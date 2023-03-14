import { openModal, closeModal } from "./modal";

export function renderMap() {
    const width = 1650;
    const height = 800;

    const svg = d3.select('svg');
    
    const projection = d3.geoMercator()
        .scale(194)
        .translate([width / 2, height / 1.4]);
    const pathGenerator = d3.geoPath()
        .projection(projection);

    d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/110m.tsv')
        .then(tsvData => {
            const countryName = {}
            tsvData.forEach(d => {
                countryName[d.iso_n3] = d.name
            })
            // d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
            d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
                .then(data => {
                    const countries = topojson.feature(data, data.objects.countries);
                    svg.selectAll('path')
                        .data(countries.features)
                        .enter().append('path')
                        .attr('class', 'country')
                        .attr('d', pathGenerator)
                        .attr('id', d => d.iso_n3)
                        .on('click', function(d) {
                            const country = d.target.__data__.properties.name
                            // const modal = d3.select('#modal')
                            // modal.select('h2').text(country)
                            // modal.style('display', 'block')
                            openModal(modal)
                            const modalName = d3.select('#modal')
                            modalName.select('h2').text(country)
                            // modalName.style('display', 'block')
                        })
                        .append('title')
                        .text(d => countryName[d.id])
                });
            })
        // closeModal()
}
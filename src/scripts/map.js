export function renderMap() {
    const width = 1650;
    const height = 800;

    const svg = d3.select('svg');
    
    const projection = d3.geoMercator()
        .scale(194)
        .translate([width / 2, height / 1.4]);
    const pathGenerator = d3.geoPath()
        .projection(projection);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {
            const countries = topojson.feature(data, data.objects.countries);
            svg.selectAll('path')
                .data(countries.features)
                .enter().append('path')
                    .attr('class', 'country')
                .attr('d', pathGenerator);
        })
}
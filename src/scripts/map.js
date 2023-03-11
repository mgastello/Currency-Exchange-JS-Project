export function renderMap() {
    const width = 960;
    const height = 600;

    const svg = d3.select('svg');
    
    const projection = d3.geoMercator()
        .scale(140)
        .translate([width / 2, height / 1.45]);
    const pathGenerator = d3.geoPath()
        .projection(projection);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {
            const countries = topojson.feature(data, data.objects.countries);
            svg.selectAll('path')
                .data(countries.features)
                .enter().append('path')
                    .attr('class', 'country')
                .attr('d', pathGenerator)
                .attr('fill', d => {
                    const color = d3.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                    return d3.format('#x')(color);
                })
                .attr('stroke', '#fff')
                .attr('stroke-width', 0.5)
        })
}
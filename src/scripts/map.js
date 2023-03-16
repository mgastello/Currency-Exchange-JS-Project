import { openModal, closeModal } from "./modal";
const codes = require("./country-currency-codes.json")
import { rates } from "./api";
const names = require("./country-currency-names.json")
const symbols = require("./country-currency-symbols.json")

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
                            openModal(modal)
                            overlay.classList.add('active')
                            const modalName = d3.select('#modal')
                            modalName.select('h2').text(country)
                            const cCode = codes[country] != undefined ? codes[country] : `No Data`
                            const cName = names[country] != undefined ? names[country] : `No Data`
                            const cSymbol = symbols[country] != undefined ? symbols[country] : `No Data`
                            rates.then((data) => {
                                const value = data.results[cCode] != undefined ? data.results[cCode] : `No Data`
                                if (value !== `No Data`) {
                                    modalName.select('p4').text(`1 USD equals ${value.toFixed(2)} ${cCode}`)
                                } else {
                                    modalName.select('p4').text(`No conversion data to ${cCode}`)
                                }
                            })
                            modalName.select('p1').text(`Currency Name: ${cName}`)
                            modalName.select('p2').text(`Currency Symbol: ${cSymbol}`)
                            modalName.select('p3').text(`Currency Code: ${cCode}`)
                        })
                        .append('title')
                        .text(d => countryName[d.id])
                });
                const closeModalButtons = document.querySelectorAll('[data-close-button]')
                    closeModalButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            const modal = button.closest('.modal')
                            closeModal(modal)
                        })
                    })
            })
        }
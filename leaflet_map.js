// Create map interface, set initial view
var map = L.map('map_place').setView([47.475, 19.062], 14);
map.fitBounds([[47.764125, 19.107982], [47.797492, 19.1430594]]);

// Create an OpenStreetMap tile layer and add it to the map
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Additional layers and map configuration
var touristicMap = L.imageOverlay("web_pngs/Touristic_Map.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);
touristicMap.addTo(map);

var temperatureMap = L.imageOverlay("web_pngs/Temperature.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);
var solarMap = L.imageOverlay("web_pngs/Solar Radiation.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);
var rhMap = L.imageOverlay("web_pngs/Relative Humidity.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);
var noiseMap = L.imageOverlay("web_pngs/Noise.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);

// Functions to display legends
function toggleLegend(layer, legendId) {
    layer.on('add', function() {
        document.getElementById(legendId).style.display = 'inline';
    }).on('remove', function() {
        document.getElementById(legendId).style.display = 'none';
    });
}

toggleLegend(touristicMap, 'poislegend');
toggleLegend(temperatureMap, 'templegend');
toggleLegend(solarMap, 'solarlegend');
toggleLegend(rhMap, 'rhlegend');
toggleLegend(noiseMap, 'noiselegend');

// Layer control setup
L.control.layers({
    "OpenStreetMap": osm
}, {
    "Touristic Map": touristicMap,
    "Temperature Map": temperatureMap,
    "Solar Radiation Map": solarMap,
    "Relative Humidity Map": rhMap,
    "Noise Map": noiseMap
}).addTo(map);

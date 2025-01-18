# Touristic and Environmental Map of Vác

Welcome to the GitHub repository for the "Touristic and Environmental Map of Vác"! This project leverages the powerful Leaflet.js library to provide an interactive mapping experience that highlights both touristic attractions and environmental features of Vác, a historic town located in Hungary.

## Project Overview

This interactive map integrates various geospatial layers to depict important touristic sites and environmental data within Vác. It aims to serve both locals and tourists by providing valuable insights into the town's topographical and ecological landscape.

### Features

- **Touristic Highlights:** Showcases major tourist attractions, providing visitors with a quick guide to Vác's must-see locations.
- **Environmental Data Visualization:** Includes layers for temperature variations, solar radiation, relative humidity, and noise levels across different parts of the town.
- **Interactive Layers:** Users can toggle different layers on and off to customize their viewing experience based on their interests or needs.
- **Mobile-Friendly Design:** Ensures that the map is accessible on various devices, enhancing usability and accessibility for users on-the-go.

## Technologies Used

- **Leaflet.js:** An open-source JavaScript library for mobile-friendly interactive maps.
- **HTML/CSS:** For structuring and styling the web page.
- **JavaScript:** For interactive features.

## Code Examples

Below are some snippets from the JavaScript used to create and manage the interactive map:

1. **Creating the map and setting the view:**
   ```javascript
   var map = L.map('map_place').setView([47.475, 19.062], 14);
   map.fitBounds([[47.764125, 19.107982], [47.797492, 19.1430594]]);
   ```
   
2. **Adding a tile layer to the map:**
  ```javascript
       var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
   ```

3. **Overlaying a custom image map and managing its legend:**
    ```javascript
    var touristicMap = L.imageOverlay("web_pngs/Touristic_Map.png", [[47.764125, 19.107982], [47.797492, 19.1430594]]);
    touristicMap.on('add', function() {
        document.getElementById('poislegend').style.display = 'inline';
    }).addTo(map);
    touristicMap.on('remove', function() {
        document.getElementById('poislegend').style.display = 'none';
    });
    ```

4. **Layer control to toggle between layers:**
   ```javascript
      L.control.layers({
    "OpenStreetMap": osm
    }, {
        "Touristic Map": touristicMap,
        "Temperature Map": temperatureMap,
        "Solar Radiation Map": solarMap,
        "Relative Humidity Map": rhMap,
        "Noise Map": noiseMap
    }).addTo(map);
    ```

4. **Fetching GeoJSON data and adding it to the map:**
     ```javascript
         fetch('data/POIs.geojson').then(response => response.json()).then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => L.circleMarker(latlng, { radius: 3, fillOpacity: 0.85 })
        }).addTo(map);
    });
    ```

## Disclaimer

This project is part of the Scripting Language in Web Cartography course during my studies in MSc in Cartography at Eötvös Loránd University.

## Acknowledgments

- **Mátyás Gede** - [Visit GitHub](https://github.com/MatyasGede)
- [Leaflet](https://leafletjs.com) - An open-source JavaScript library for mobile-friendly interactive maps.
- [OpenStreetMap](https://www.openstreetmap.org) - A collaborative project to create a free editable map of the world.

## Contact

- **Email:** [nurmdju45@gmail.com](mailto:nurmdju45@gmail.com)

Thank you for visiting our project!

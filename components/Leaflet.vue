<template>
  <div id="mapid"></div>
</template>

<script>
export default {
    async mounted (){
        // Base map
        var map = L.map('mapid').setView([52, 10], 4);
        // var map = L.map('mapid').setView([51.505, -0.09], 13);

        // Nice background by openstreatmap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

        //  Adding my own slippy tiles
        // L.tileLayer('/era5_tiles/{z}/{x}/{y}.png', {attribution: 'ERA5 temperature data'}).setOpacity(0.9).addTo(map);

        // Adding a geojson shapefile
        const ar6Shapes = await fetch('/IPCC-WGI-reference-regions-v4.geojson').then(res => res.json())
        L.geoJSON(ar6Shapes, {onEachFeature: (feature, layer) => { layer.bindTooltip(feature.properties.Name) }}).addTo(map);

        // Adding an image overlay
        var imageUrl = '/era5_image.png',
        imageBounds = [[-85, -180], [85, 180]];
        L.imageOverlay(imageUrl, imageBounds, {attribution: 'ERA5 temperature data'}).setOpacity(0.7).addTo(map);

        // Custom marker example
        // L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

        // Adding a rectangle
        // var bounds = [[50, 0], [55, 5]]  // ymin xmin ymax xmax
        // L.rectangle(bounds, {color: "#ffffff", weight: 1}).addTo(map);
    }
}
</script>

<style scoped>
#mapid {
  width: 600px;
  height: 420px;
}
</style>

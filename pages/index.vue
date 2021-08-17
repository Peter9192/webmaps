<template>
  <div class="h-screen p-10">
    <!-- <h2 class="text-4xl">My toy maps</h2> -->
    <div class="grid grid-cols-2 gap-4 justify-items-evenly">
      <!-- <Bokeh /> -->
      <!-- <OpenLayers /> -->
      <Leaflet />
      <DeckGL />
      <div class="wrap"><iframe class="frame" src="/hvplot_image.html"></iframe></div>
      <div class="wrap"><iframe class="frame" src="/hvplot_quadmesh.html"></iframe></div>
      </iframe>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.wrap { width: 600px; height: 420px; padding: 0; overflow: hidden; }
.frame { width: 1000px; height: 700px; border: 1px solid black; }
.frame {
  -ms-zoom: 0.6;
  -moz-transform: scale(0.6);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.6);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.6);
  -webkit-transform-origin: 0 0;
}
</style>

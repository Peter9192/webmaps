<template>
  <div v-on="DOMContentLoaded">
    <div
      class="bk-root"
      id="b8fd7145-1098-46e0-a2b5-fad1175fcb51"
      data-root-id="17644"
    ></div>
    <div
      class="bk-root"
      id="da0b2d23-3f35-49e3-b9ec-2eb28b59c449"
      data-root-id="17920"
    ></div>
  </div>
</template>

<script>
export default {
  async mounted() {
    // if (document.readyState != "loading") this.embedBokeh();
    // else document.addEventListener("DOMContentLoaded", this.embedBokeh());
    await this.embedBokeh();
    // const div = document.getElementById('b8fd7145-1098-46e0-a2b5-fad1175fcb51');
    // div.dispatchEvent(new Event('resize'));
    // div.style.display='none'
    // div.style.display='block'
  },
  methods: {
    async embedBokeh() {
      const res = await fetch("/atlasData.json")
      const docs_json = await res.json()
      const render_items = [
        {
          docid: "b2d3e816-73e4-479e-ae1b-ae8eddb80c74",
          root_ids: ["17644", "17920"],
          roots: {
            17644: "b8fd7145-1098-46e0-a2b5-fad1175fcb51",
            17920: "da0b2d23-3f35-49e3-b9ec-2eb28b59c449",
          },
        },
      ];
      Bokeh.embed.embed_items(docs_json, render_items);
    },
  },
};
</script>

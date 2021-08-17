export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-maps',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'Bokeh', src: "https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", defer: true },
      { hid: 'bokeh-widgets', src: "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", defer: true },
      { hid: 'bokeh-tables', src: "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js", defer: true },
      { hid: 'panel', src: "https://unpkg.com/@holoviz/panel@0.12.0/dist/panel.min.js", defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-leaflet',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

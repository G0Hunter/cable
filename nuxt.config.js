export default {
  loading: { color: 'cyan' },
  head: {
    titleTemplate: '%s | ncc-cable',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Производим качественную кабельно-проводниковую продукцию: высококачественные силовые, сигнальные, огнестойкие кабели и кабели связи' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png'}
    ]
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-link'
  },
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false }
  ],
  // router: { base: '/cable/' },
  modules: [
    '@nuxtjs/font-awesome',
    ['nuxt-google-maps-module', {
      /* module options */
      key: 'GOOGLE MAPS KEY', // Default
    }],
  ],
  css: [
    '~/assets/styles/main.scss'
  ]
}

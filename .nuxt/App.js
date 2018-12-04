import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/styles/main.scss'

import '../node_modules/font-awesome/css/font-awesome.css'

import _6f6c098b from '../layouts/default.vue'
import _2d26a6af from '../layouts/main.vue'

const layouts = { "_default": _6f6c098b,"_main": _2d26a6af }

export default {
  head: {"titleTemplate":"%s | ncc-cable","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Производим качественную кабельно-проводниковую продукцию: высококачественные силовые, сигнальные, огнестойкие кабели и кабели связи"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimg\u002Ffavicon.png"}],"style":[],"script":[{"innerHTML":"window.initMap = function(){\n      window.dispatchEvent(new Event('maps-module:loaded'));\n      window.addEventListener('maps-module:initiated', function(){\n        setTimeout(function(){\n          window.dispatchEvent(new Event('maps-module:loaded'));\n        });\n      });\n    }","type":"text\u002Fjavascript"},{"src":"\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=GOOGLE MAPS KEY&libraries=places&callback=initMap","defer":true,"async":true}],"__dangerouslyDisableSanitizers":["script"]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}

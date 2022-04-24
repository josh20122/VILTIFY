require('./bootstrap');


import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


Vue.use(Vuetify);

createInertiaApp({
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;

    return page;

  },
  


  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      vuetify: new Vuetify(),
      render: h => h(App, props),
    }).$mount(el)
  },
})
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueGlide,
  render: (h) => h(App),
}).$mount("#app");

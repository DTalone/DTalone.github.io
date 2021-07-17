import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: "#403A3A",
        secondary:"#EEEBE3",
        accent: "#C3F3FB",
      },
    },
  },
});

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
      light: {
        primary: "#C3F3FB", // Pale Silver
        secondary: "#8CA8AD", // Spanish Grey
        accent: "#84949C", // Roman Silver
      },
      dark: {
        primary: "#4D4646", // Davys Liver
        secondary: "#464040", // Dark Liver
        accent: "#403A3A", // Black Coffee
      },
    },
  },
});

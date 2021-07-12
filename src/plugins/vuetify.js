import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

export default createVuetify({
  components,
  directives,
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

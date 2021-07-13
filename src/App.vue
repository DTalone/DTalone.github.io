<template>
  <v-app class="app">
    <Navbar />
    <Drawer />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Drawer from "./components/Drawer.vue";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    Footer,
    Navbar,
    Drawer,
    // Navbar: defineAsyncComponent(() => import("./components/Navbar.vue")),
    // Drawer: defineAsyncComponent(() => import("./components/Drawer.vue")),
  },
};
</script>

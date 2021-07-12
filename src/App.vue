<template>
  <v-app class="app">
    <Navbar @handleDrawer="closeDrawer" />
    <Drawer @handleDrawer="closeDrawer" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
    }
  },
  components: {
    Footer: defineAsyncComponent(() => import("./components/Footer.vue")),
    Navbar: defineAsyncComponent(() => import("./components/Navbar.vue")),
    Drawer: defineAsyncComponent(() => import("./components/Drawer.vue")),
  },
};
</script>

<style lang="scss">
.app {
  background-color: var(--v-accent-base);
}
</style>

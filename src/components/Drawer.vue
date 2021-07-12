<template>
  <v-navigation-drawer app temporary v-model="drawer">
    <v-list>
      <router-link to="/">
        <v-list-item class="pr-2">
          <v-list-item-avatar left>
            <v-img :src="getImageUrl('avatar')"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>Faris Aziz</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link to="/projects">
        <v-list-item-icon>
          <v-icon>mdi-folder-network-outline</v-icon>
        </v-list-item-icon>
        &emsp;
        <v-list-item-title>Projects</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/store">
        <v-list-item-icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-list-item-icon>
        &emsp;
        <v-list-item-title>Store</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-account-box-outline</v-icon>
        </v-list-item-icon>
        &emsp;
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/contact">
        <v-list-item-icon>
          <v-icon>mdi-file-account-outline</v-icon>
        </v-list-item-icon>
        &emsp;
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>      
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Drawer",
  computed: {
    ...mapGetters({
      drawer: "getDrawer",
    }),
  },
  methods: {
    ...mapActions({
      handleDrawer: "handleDrawer",
    }),
    getImageUrl(name) {
      return new URL(`../assets/images/${name}.png`, import.meta.url).href;
    },
  },
};
</script>

<style>
/*  */
</style>

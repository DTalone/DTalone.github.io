<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list>
      <router-link to="/" class="router">
        <v-list-item class="pr-2">
          <v-list-item-avatar left>
            <v-img src="@/assets/images/avatar.png"></v-img>
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
      <!-- <v-list-item link to="/about">
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
      </v-list-item>       -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Drawer",
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(drawer) {
        this.$store.commit("SET_DRAWER", drawer);
      },
    },
  },
  methods: {
    ...mapActions({
      handleDrawer: "handleDrawer",
    }),
  },
};
</script>

<style scoped>
.router {
  cursor: pointer;
}
</style>

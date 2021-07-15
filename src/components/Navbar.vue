<template>
  <v-app-bar app class="tes pl-5 pr-5">
    <div class="hidden-md-and-up">
      <v-btn text @click="handleDrawer(drawer)">
        <v-icon :color="this.$vuetify.theme.themes.light.accent">
          > mdi-menu
        </v-icon>
      </v-btn>
    </div>
    <v-spacer class="hidden-md-and-up" />
    <router-link to="/" tag="div">
      <v-img src="@/assets/images/logoprofile.png" id="image" />
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn to="/project">
        <v-icon :color="this.$vuetify.theme.themes.light.accent">
          > mdi-folder-network-outline
        </v-icon>
        <span class="ml-5">Projects</span>
      </v-btn>
      <v-btn to="/store">
        <v-icon :color="this.$vuetify.theme.themes.light.accent">
          > mdi-cart-outline
        </v-icon>
        <span class="ml-5">Store</span>
      </v-btn>
      <v-btn to="/about">
        <v-icon :color="this.$vuetify.theme.themes.light.accent">
          > mdi-account-box-outline
        </v-icon>
        <span class="ml-5">About</span>
      </v-btn>
      <v-btn to="/contact">
        <v-icon :color="this.$vuetify.theme.themes.light.accent">
          > mdi-file-account-outline
        </v-icon>
        <span class="ml-5">Contact</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  created() {
    console.log(this);
  },
  computed: {
    ...mapGetters({
      drawer: "getDrawer",
    }),
  },
  methods: {
    isMobile() {
      console.log(this.$vuetify);
      return this.$vuetify.breakpoint.xsOnly;
    },
    ...mapActions({
      handleDrawer: "handleDrawer",
    }),
  },
};
</script>

<style>
#image {
  width: 150px;
}
</style>

<template>
  <div>
    <v-app-bar app class="tes pl-5 pr-5">
      <div class="hidden-md-and-up">
        <v-btn text>
          <v-icon
            :color="this.$vuetify.theme.themes.light.accent"
            @click="handleDrawer(drawer)"
          >
            > mdi-menu
          </v-icon>
        </v-btn>
      </div>
      <v-spacer class="hidden-md-and-up" />
      <router-link to="/" tag="div">
        <v-img :src="getImageUrl('logoprofile')" id="image" />
      </router-link>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn to="/projects">
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
      <!-- -->
    </v-app-bar>
  </div>
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
    getImageUrl(name) {
      return new URL(`../assets/images/${name}.png`, import.meta.url).href;
    },
    isMobile() {
      console.log(this.$vuetify)
      return this.$vuetify.breakpoint.xsOnly;
    },
    ...mapActions({
      handleDrawer: "handleDrawer",
    }),
  },
};
</script>

<style lang="scss">
@import "../scss/mixins/_mq";
/*  */
.tes {
  @include mq($until: mobile) {
    background-color: red;

  }
}
#image {
  width: 150px;
}
</style>

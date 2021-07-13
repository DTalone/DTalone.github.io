<template>
  <v-app-bar color="deep-purple" dark>
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

<style></style>

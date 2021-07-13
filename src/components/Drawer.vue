<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
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

<style></style>

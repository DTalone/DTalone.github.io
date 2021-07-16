<template>
  <v-container fluid>
    <HomeScroll1 />
    <HomeScroll2 />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

import HomeScroll1 from "@/components/HomeScroll1.vue";
import HomeScroll2 from "@/components/HomeScroll2.vue";

export default {
  name: "App",
  components: {
    HomeScroll1,
    HomeScroll2,
  },
  methods: {
    ...mapActions({
      handleDrawer: "handleDrawer",
      handleHome: "handleHome",
    }),
  },
  created() {
    this.handleHome(false);
  },
};
</script>

<style scoped>
.gridpusat2 {
  grid-template-rows: 0.5fr 2fr;
  padding: 24px;
}
.gridpusat {
  grid-template-rows: 1fr;
  /* overflow: hidden; */
}
.tes {
  /* border: 1px solid white; */
  height: fit-content;
}

.template2 {
  grid-template-rows: 1fr;
  overflow: hidden;
}
</style>

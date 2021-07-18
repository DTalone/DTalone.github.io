<template>
  <v-container fluid>
    <HomeScroll1 @scrollToElement="scrollToElement" />
    <HomeScroll2 class="scroll-2" />
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
    scrollToElement(item) {
      const el = document.getElementsByClassName(item.routes)[0];

      if (el) {
        el.scrollIntoView(item.options);
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.handleHome(false);
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
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

.v-speed-dial {
  position: fixed;
  top: 83%;
  opacity: 5%;
  &:hover {
    opacity: 100%;
  }
}

.v-btn--floating {
  position: relative;
}
</style>

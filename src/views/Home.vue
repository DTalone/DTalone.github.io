<template>
  <v-container fluid>
    <div class="gridpusat grid grid-rows-2 grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="gridpusat2 tes grid grid-rows-3 grid-cols-1 gap-1 sm:grid-cols-2 lg:gap-9">
        <div class="tes sm:col-span-2">
          <WelcomeText />
        </div>
        <div class="tes">
          <CardInfo :data="data"  />
        </div>
        <div class="tes">
          <CardInfo :data="data" />
        </div>
        <v-icon class="tes sm:col-span-2" large>
          mdi-arrow-down
        </v-icon>
      </div>
      <div class="gridimage tes">
        <PortoImage />
      </div>
    </div>
    <div class="grid grid-rows-2 grid-cols-2 gap-4 sm:grid-cols-4">
      <div class="tes col-span-2 row-span-2">5</div>
      <div class="tes col-span-2">6</div>
      <div class="tes">7</div>
      <div class="tes">8</div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="tes">9</div>
      <div class="tes">10</div>
      <div class="tes">11</div>
      <div class="tes">12</div>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

import PortoImage from "@/components/PortoImage.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "App",
  data() {
    return {
      data: {
        icon:"mdi-folder-network",
        title:"Profile",
        content:"test",
      }
    }
  },
  components: {
    PortoImage,
    WelcomeText,
    CardInfo,
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
}
.gridpusat {
  grid-template-rows: 1fr;
}
.tes {
  border: 1px solid white;
  /* min-height: 200px; */
  height: fit-content;
}
/* .container {
    display: grid;
    height: 100vh;
     margin: 0;
} */
</style>

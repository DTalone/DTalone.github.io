<template>
  <v-container fluid>
    <div class="gridpusat grid grid-rows-2 grid-cols-2 gap-4">
      <div class="gridpusat2 tes grid grid-rows-2 grid-cols-2 gap-4">
        <div class="tes col-span-2">
          <WelcomeText />
        </div>
        <div class="tes">
          <CardInfo :data="data"  />
        </div>
        <div class="tes">
          <CardInfo :data="data" />
        </div>
      </div>
      <div class="gridimage tes">
        <PortoImage />
      </div>
      <div class="gridcard tes">
      </div>
      <div class="gridcard tes">
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
import PortoImage from "@/components/PortoImage.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import CardInfo from "@/components/CardInfo.vue";
import { mapActions } from "vuex";

export default {
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
      handleHome: "handleHome",
    }),
  },
  created() {
    this.handleHome(true);
  },
};
</script>

<style scoped>
.gridpusat2 {
  grid-template-rows: 1fr 2fr;
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

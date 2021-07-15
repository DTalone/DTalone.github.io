<template>
  <v-container fluid>
    <div class="grid grid-rows-2 grid-cols-2 gap-4 sm:grid-cols-4">
      <div class="tes col-span-2">
        <WelcomeText />
      </div>
      <div class="tes col-span-2 row-span-2">
        <PortoImage />
      </div>
      <div class="tes">3</div>
      <div class="tes">4</div>
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
import { mapActions } from "vuex";

export default {
  components: {
    PortoImage,
    WelcomeText,
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
.tes {
  border: 1px solid white;
  min-height: 200px;
}
/* .container {
    display: grid;
    height: 100vh;
     margin: 0;
} */
</style>

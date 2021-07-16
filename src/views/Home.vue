<template>
  <v-container fluid>
    <div class="gridpusat grid grid-rows-2 grid-cols-1 gap-4 lg:grid-cols-2">
      <div
        class="
          gridpusat2
          tes
          grid grid-rows-3 grid-cols-1
          gap-1
          sm:grid-cols-2
          lg:gap-3
        "
      >
        <div class="tes sm:col-span-2">
          <WelcomeText />
        </div>
        <div class="tes">
          <CardInfo :data="data" />
        </div>
        <div class="tes">
          <CardInfo :data="data" />
        </div>
        <v-icon class="tes sm:col-span-2" large> mdi-arrow-down </v-icon>
      </div>
      <div class="gridimage tes">
        <PortoImage />
      </div>
    </div>
    <div
      class="
        template2
        mt-5
        grid grid-rows-2 grid-cols-1
        gap-4
        lg:grid-cols-2
        items-center
      "
    >
      <div class="tes text-center">
        <label>Framework</label>
        <ChartDoughnut :chartData="chartDataDoughnut" :options="chartOptions" />
      </div>
      <div class="tes grid justify-center items-center">
        <CardQuotes />
        <div class="grid grid-cols-3 gap-4 justify-center items-center">
          <v-icon size="90">mdi-gmail</v-icon>
          <v-icon size="90">mdi-linkedin</v-icon>
          <v-icon size="90">mdi-github</v-icon>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

import PortoImage from "@/components/PortoImage.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import CardInfo from "@/components/CardInfo.vue";
import CardQuotes from "@/components/CardQuotes.vue";
import ChartDoughnut from "@/components/Doughnut.vue";

export default {
  name: "App",
  data() {
    return {
      data: {
        icon: "mdi-folder-network",
        title: "Profile",
        content: "test",
      },
      chartDataDoughnut: {
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["red", "yellow", "blue"],
          },
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Red", "Yellow", "Blue"],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Doughnut Chart",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    };
  },
  components: {
    PortoImage,
    WelcomeText,
    CardInfo,
    ChartDoughnut,
    CardQuotes,
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

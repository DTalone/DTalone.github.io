<template>
  <v-container fluid>
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
      <div class="tes grid justify-center items-center gap-10">
        <CardQuotes :data="data" />
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
import CardQuotes from "@/components/CardQuotes.vue";
import ChartDoughnut from "@/components/Doughnut.vue";

export default {
  data() {
    return {
      data: {
        title: "Quote of the Day",
        content: "Lorem ipsumadfalkdsfn asfdklanflasdnf asdfklna dfsln",
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
    ChartDoughnut,
    CardQuotes,
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

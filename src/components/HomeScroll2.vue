<template>
  <v-container fluid>
    <div
      class="
        template2
        grid grid-rows-2 grid-cols-1
        gap-4
        lg:grid-cols-2
        items-center
      "
    >
      <div class="tes text-center p-10">
        <v-card color="#1e1e1e" class="chart-doughnut pa-3">
          <h1 class="text-2xl">Framework</h1>
          <div class="pa-5">
            <ChartDoughnut
              :chartData="chartDataDoughnut"
              :options="chartOptions"
            />
          </div>
        </v-card>
      </div>
      <div class="tes grid justify-center items-center gap-10">
        <CardQuotes :data="data" />
        <div
          class="
            icons
            grid grid-cols-3
            gap-4
            justify-between
            items-center
            text-center
          "
        >
          <a href="https://www.gmail.com/farisaziz22@gmail.com" target="_blank"
            ><v-icon size="90" class="logo">mdi-gmail</v-icon></a
          >
          <a href="https://www.linkedin.com/in/faziz14/" target="_blank"
            ><v-icon size="90" class="logo">mdi-linkedin</v-icon></a
          >
          <a href="https://www.github.com/DTalone" target="_blank"
            ><v-icon size="90" class="logo">mdi-github</v-icon></a
          >
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
            data: [10, 20, 30, 40, 50],
            backgroundColor: [
              "#A0DDFF",
              "#758ECD",
              "#C1CEFE",
              "#7189FF",
              "#624CAB",
            ],
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

.icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: linear-gradient(45deg, #ff003c, #c648c8);
  transition: all 265ms ease-out;
}

.icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.icons a:hover .logo {
  transform: scale(2);
  -ms-transform: scale(2);
  -webkit-transform: scale(2);
  color: #c3f3fb;
  background: rgb(195, 243, 251);
  background: linear-gradient(
    45deg,
    rgba(195, 243, 251, 1) 15%,
    rgba(0, 218, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}

.chart-doughnut {
  border-radius: 10px;
}
</style>

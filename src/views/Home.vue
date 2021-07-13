<template>
  <div class="small">
    <label for="Doughnut">Doughnut</label>
    <div id="ChartDoughnut">
      <ChartDoughnut :chartData="chartDataDoughnut" />
    </div>
  </div>
</template>

<script>
import ChartDoughnut from "@/components/Doughnut.vue";
export default {
  name: "App",
  components: {
    ChartDoughnut,
  },
  data() {
    return {
      chartDataDoughnut: {
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["red", "yellow", "blue"],
          },
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Red", "Yellow", "Blue"],
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Doughnut Chart",
            },
          },
        },
      },
      // optionsDoughnut: {}
    };
  },
};
</script>

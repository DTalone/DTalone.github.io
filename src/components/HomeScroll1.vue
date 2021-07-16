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
        <div class="welcome sm:col-span-2">
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
  </v-container>
</template>

<script>
import PortoImage from "@/components/PortoImage.vue";
import WelcomeText from "@/components/WelcomeText.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  data() {
    return {
      data: {
        icon: "mdi-folder-network",
        title: "Profile",
        content: "lorem ipsum kagabungungugngun alas fdadkf",
      },
    };
  },
  components: {
    PortoImage,
    WelcomeText,
    CardInfo,
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

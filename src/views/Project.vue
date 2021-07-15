<template>
  <div>
    <PortoImage />
  </div>
</template>

<script>
import PortoImage from "@/components/PortoImage.vue";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    PortoImage,
  },
};
</script>

<style scoped></style>

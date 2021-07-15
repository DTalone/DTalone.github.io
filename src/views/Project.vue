<template>
  <div>
    <PortoImage />
  </div>
</template>

<script>
import PortoImage from "@/components/PortoImage.vue";
import { mapActions } from "vuex";
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

<style scoped></style>

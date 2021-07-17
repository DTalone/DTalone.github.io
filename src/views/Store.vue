<template>
  <v-container fluid>
    <ComingSoon />
  </v-container>
</template>

<script>
import ComingSoon from "@/components/ComingSoon.vue";

import { mapActions } from "vuex";

export default {
  components: {
    ComingSoon,
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

<template>
  <v-footer padless>
    <v-col
      class="tes text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/*  */
.tes {
  border: 1px solid black;
}
</style>
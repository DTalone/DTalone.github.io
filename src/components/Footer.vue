<template>
  <div>
      <v-footer
        v-bind="localAttrs"
        :padless="padless"
        class="tes"
      >
        <v-card
          flat
          tile
          width="100%"
          class="red lighten-1 text-center"
        >
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Faziz</strong>
          </v-card-text>
        </v-card>
      </v-footer>

  </div>
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

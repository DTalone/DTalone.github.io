<template>
  <v-speed-dial
    v-model="fab"
    bottom
    left
    direction="top"
    open-on-hover
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> mdi-account-circle </v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="green">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo">
      <v-icon>mdi-network-outline</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {};
</script>

<style scoped>
.v-speed-dial {
  position: absolute;
}
.v-btn--floating {
  position: relative;
}
</style>

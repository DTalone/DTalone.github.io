<template>
  <div>
    <CardQuotes />
  </div>
</template>

<script>
import CardQuotes from "@/components/CardQuotes.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      data: {
        icon: "mdi-folder-network-outline",
        title: "Profile",
        content:
          "Hello, My name is Faris Aziz, you can call me Faziz. I study in Informatics Engineering",
      },
    };
  },
  components: {
    CardQuotes,
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

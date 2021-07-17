<template>
  <div>
    <vue-glide perView="1" gap="100">
      <vue-glide-slide v-for="index in 10" :key="index">
        <CardProject />
      </vue-glide-slide>
      <button data-glide-dir="<">prev</button>
      <button data-glide-dir=">">next</button>
    </vue-glide>
  </div>
</template>

<script>
import CardProject from "@/components/CardProject.vue";
import { mapActions } from "vuex";
import { Glide, GlideSlide } from 'vue-glide-js'

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
    CardProject,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
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

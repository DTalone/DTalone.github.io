<template>
  <div>
    <vue-glide :perView="1" :gap="100">
      <vue-glide-slide v-for="item in project" :key="item.picture">
        <CardProject :item="item"/>
      </vue-glide-slide>
      <button data-glide-dir="<">prev</button>
      <button data-glide-dir=">">next</button>
    </vue-glide>
  </div>
</template>

<script>
import CardProject from "@/components/CardProject.vue";
import { mapActions } from "vuex";
import { Glide, GlideSlide } from "vue-glide-js";
import Project from "@/assets/documentations/document";
export default {
  name: "App",
  data() {
    return {
      project: Project,
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

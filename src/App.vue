<template>
  <v-app>
    <v-main>
      <div :class="isScrolled">
        <HeaderNav/>
        <HomeSection/>
        <AboutSection/>
        <FolioSection/>
        <ProjectsCaroussel/>
        <AppFooter/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import FolioSection from "@/components/FolioSection.vue";
import ProjectsCaroussel from "@/components/ProjectsSection.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",

  components: {
    HeaderNav,
    HomeSection,
    AboutSection,
    FolioSection,
    ProjectsCaroussel,
    AppFooter,
  },

  data() {
    return {
      isScrolled: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    document.title = process.env.VUE_APP_TITLE || "";
  },

  methods: {
    handleScroll() {
      if (window.scrollY !== 0) {
        this.isScrolled = "scrolled";
      } else {
        this.isScrolled = "";
      }
    },
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

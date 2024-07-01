<template>
  <v-app>
    <v-main>
      <div :class="isScrolled">
        <HeaderNav/>
        <HomeSection/>
        <AboutSection/>
        <FolioSection/>
        <ProjectsCaroussel/>
        <SkillsSection/>
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
import ogimg from "@/assets/images/ogimg.jpg";
import SkillsSection from "./components/SkillsSection.vue";

export default {
  name: "App",

  components: {
    HeaderNav,
    HomeSection,
    AboutSection,
    FolioSection,
    ProjectsCaroussel,
    SkillsSection,
    AppFooter,
  },

  data() {
    return {
      isScrolled: "",
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
  metaInfo() {
    return {
      meta: [
        { hid: "description", name: "description", content: this.$t('meta.description') },
        { hid: "keywords", name: "keywords", content: this.$t('meta.keywords') },
        { hid: "author", name: "author", content: "Felipe Travassos" },
        { hid: "og:title", property: "og:title", content: `${process.env.APP_VUE_TITLE} - ${this.$t('meta.title')}` },
        { hid: "og:description", property: "og:description", content: this.$t('meta.description') },
        { hid: "og:image", property: "og:image", content: ogimg },
        { hid: "og:url", property: "og:url", content: process.env.APP_VUE_SITE_URL },
        { hid: "twitter:title", name: "twitter:title", content: `${process.env.APP_VUE_TITLE} - ${this.$t('meta.title')}` },
        { hid: "twitter:description", name: "twitter:description", content: this.$t('meta.description') },
        { hid: "twitter:image", name: "twitter:image", content: ogimg },
      ]
    };
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <div :class="isScrolled">
        <AppLoader/>
        <HeaderNav/>
        <HomeSection/>
        <AboutSection/>
        <FolioSection/>
        <ProjectsCaroussel/>
        <SkillsSection/>
        <ContactSection/>
        <AppFooter/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, watchEffect } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import ogimg from "@/assets/images/ogimg.jpg";
import AppFooter from "@/components/AppFooter.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import FolioSection from "@/components/FolioSection.vue";
import ProjectsCaroussel from "@/components/ProjectsSection.vue";
import AppLoader from "./components/AppLoader.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default defineComponent({
  name: "App",

  components: {
    AppLoader,
    HeaderNav,
    HomeSection,
    AboutSection,
    FolioSection,
    ProjectsCaroussel,
    SkillsSection,
    AppFooter,
    ContactSection
  },

  setup() {
    const isScrolled = ref("");
    const { t, locale } = useI18n();

    const description = ref(t('meta.description'));
    const keywords = ref(t('meta.keywords'));
    const appTitle = ref(t('meta.title'));

    const updateMetaTags = () => {
      useHead({
        title: appTitle.value,
        meta: [
          { name: "description", content: description.value },
          { name: "keywords", content: keywords.value },
          { name: "author", content: process.env.VUE_APP_AUTHOR },
          { property: "og:title", content: appTitle.value },
          { property: "og:description", content: description.value },
          { property: "og:image", content: ogimg },
          { property: "og:url", content: process.env.VUE_APP_SITE_URL || "https://example.com" },
          { name: "twitter:title", content: appTitle.value },
          { name: "twitter:description", content: description.value },
          { name: "twitter:image", content: ogimg },
        ],
      });
    };

    watchEffect(() => {
      description.value = t('meta.description');
      keywords.value = t('meta.keywords');
      appTitle.value = t('meta.title');
      updateMetaTags();
    });

    const handleScroll = () => {
      if (window.scrollY !== 0) {
        isScrolled.value = "scrolled";
      } else {
        isScrolled.value = "";
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isScrolled
    };
  },
});
</script>

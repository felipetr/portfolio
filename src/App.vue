<template>
  <v-app>
    <v-main>
      <HomeSection/>
      <AboutSection/>
    </v-main>
  </v-app>
</template>

<script>

import HomeSection from '@/components/HomeSection.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
  name: 'App',

  components: {
    HomeSection,
    AboutSection
  },
  mounted() {
    document.title = process.env.VUE_APP_TITLE || '';
  }
};
</script>

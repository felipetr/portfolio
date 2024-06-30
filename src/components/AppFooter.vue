<template>
  <v-footer :color="footerBlue" justify="center">
    <v-row justify="center" no-gutters>
    <v-col class="text-center">
      <p>{{ siteTitle }} - 2024</p>
      <small>{{ $t('powered') }} <a href="https://vuejs.org" target="_blank" title="Vue.js" class="vuelink"><i class="fa-brands fa-vuejs"></i> Vue.js</a></small>
    </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      siteTitle: process.env.VUE_APP_TITLE,
      footerBlue: process.env.VUE_APP_FOOTER_BLUE
    };
  },
};
</script>

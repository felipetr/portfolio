<template>
  <v-footer :color="footerBlue" justify="center" class="footer">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col class="text-center">
          {{ siteTitle }} - 2024 <br /><small
            >{{ $t("powered") }}
            <a href="https://vuejs.org" target="_blank" title="Vue.js" class="vuelink">
              <i class="fa-brands fa-vuejs"></i> Vue.js</a
            ></small
          >
          <v-divider></v-divider>
          <small>{{ $t("this_projetc") }} <a target="_blank" href="https://github.com/felipetr/portfolio" class="a-green">GitHub</a></small>
          <div>
            <small>v{{ version }}</small>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import packageJson from '@/../package.json';

export default {
  name: "AppFooter",
  data() {
    return {
      version: packageJson.version,
      siteTitle: process.env.VUE_APP_TITLE,
      footerBlue: process.env.VUE_APP_FOOTER_BLUE,
    };
  },
};
</script>

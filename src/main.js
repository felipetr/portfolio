import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head';
import axios from 'axios'; // Importe o Axios
import App from './App.vue';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
import './assets/libs/flag-icons/css/flag-icons.min.css';
import './assets/css/styles.css';

import ptBR from './locales/ptBR.json';
import enUS from './locales/enUS.json';
import esES from './locales/esES.json';

loadFonts();

const head = createHead();

const messages = {
  'en-US': enUS,
  'es-ES': esES,
  'pt-BR': ptBR
};

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;

  switch (true) {
    case lang.startsWith('pt'):
      return 'pt-BR';
    case lang.startsWith('es'):
      return 'es-ES';
    default:
      return 'en-US';
  }
};

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  messages,
});

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app
  .use(vuetify)
  .use(head)
  .use(i18n)
  .mount('#app');

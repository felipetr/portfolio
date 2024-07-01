import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
import './assets/css/styles.css';

import ptBR from './locales/ptBR.json';
import enUS from './locales/enUS.json';
import esES from './locales/esES.json';

loadFonts();

const head = createHead();

const messages = {
  en_US: enUS,
  es_ES: esES,
  pt_BR: ptBR
};

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;

  switch (true) {
    case lang.startsWith('pt'):
      return 'pt_BR';
    case lang.startsWith('es'):
      return 'es_ES';
    default:
      return 'en_US';
  }
};

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  messages,
});

createApp(App)
  .use(vuetify)
  .use(head)
  .use(i18n)
  .mount('#app');

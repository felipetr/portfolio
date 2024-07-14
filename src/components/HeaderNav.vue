<template>
  <div>
    <SocialNetworkIcons />
    <header class="menuNavParent">
      <a
        target="_blank"
        :href="`cv/felipetravassos_cv_${$i18n.locale}.pdf`"
        class="dnone d-md-inline-block"
        :title="$t('download_cv')"
      >
        <span class="dnone">{{ $t("download_cv") }}</span>
        <v-btn :color="green" :text="$t('download_cv')"></v-btn>
      </a>
      <button class="headerbars" :title="$t('openmenu')" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
        <span class="d-none">{{ $t("openmenu") }}</span>
      </button>
      <div :class="isOpened + ' blureffect menu'">
        <div class="language-switcher-box">
          <v-select
            v-model="selectedLanguage"
            :items="languages"
            item-title="text"
            item-value="value"
            :label="$t('language')"
            return-object
            hide-details
            :menu-props="{ offsetY: true }"
            variant="outlined"
            @update:modelValue="changeLocale"
          >
            <template #selection>
              <v-icon>mdi-translate</v-icon> {{ selectedLanguage.text }}
            </template>
          </v-select>
        </div>
        <v-divider></v-divider>
        <span
          class="dblock d-md-none">

        <a target="_blank"
          :href="`cv/felipetravassos_cv_${$i18n.locale}.pdf`"
          :title="$t('download_cv')"
        >
          <span class="dnone">{{ $t("download_cv") }}</span>
          <v-btn :color="green" class="w100" :text="$t('download_cv')"></v-btn>
        </a>
        <v-divider></v-divider>
      </span>
        <nav color="transparent">
          <ul class="navUl">
            <li>
              <a
                :title="$t('aboutme_title')"
                href="#about"
                @click.prevent="scrollToAnchor('#about')"
                >{{ $t("aboutme_title") }}</a
              >
            </li>
            <li>
              <a
                :title="$t('portfolio_title')"
                href="#portfolio"
                @click.prevent="scrollToAnchor('#portfolio')"
                >{{ $t("portfolio_title") }}</a
              >
            </li>
            <li>
              <a
                :title="$t('skills_title')"
                href="#skills"
                @click.prevent="scrollToAnchor('#skills')"
                >{{ $t("skills_title") }}</a
              >
            </li>
            <li>
              <a
                :title="$t('experiences_title')"
                href="#experiences"
                @click.prevent="scrollToAnchor('#experiences')"
                >{{ $t("experiences_title") }}</a
              >
            </li>
            <li>
              <a
                :title="$t('certifications_title')"
                href="#education"
                @click.prevent="scrollToAnchor('#education')"
                >{{ $t("certifications_title") }}</a
              >
            </li>
            <li>
              <a
                :title="$t('contactme_title')"
                href="#contact"
                @click.prevent="scrollToAnchor('#contact')"
                >{{ $t("contactme_title") }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="headerMenu pfixed">
      <div class="HeaderNav text-center blureffect">
        <a href="#home" @click.prevent="scrollToAnchor('#home')">
          <img
            :src="require('../assets/images/logo_white.svg')"
            alt="Felipe Travassos"
            class="headerlogo"
            contain
          />
          <span class="dnone">Felipe Travassos</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SocialNetworkIcons from "./SocialNetworkIcons.vue";

export default {
  name: "HeaderNav",
  components: {
    SocialNetworkIcons,
  },
  data() {
    return {
      isOpened: "",
      green: process.env.VUE_APP_GREEN,
      selectedLanguage: { text: this.$t("language_name"), value: this.$i18n.locale },
      languages: [
        { text: "English", value: "en-US" },
        { text: "Español", value: "es-ES" },
        { text: "Português", value: "pt-BR" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpened = this.isOpened === "opened" ? "" : "opened";
    },
    changeLocale(newLocale) {
      this.$i18n.locale = newLocale.value;
      this.isOpened = "";
    },
    scrollToAnchor(anchor) {
      const anchorElement = document.querySelector(anchor);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
        this.isOpened = "";
      }
    },
  },
};
</script>

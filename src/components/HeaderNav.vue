<template>
  <div>
    <SocialNetworkIcons />
    <header class="menuNavParent">
      <button class="headerbars" :title="$t('openmenu')" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
        <span class="d-none">{{ $t('openmenu') }}</span>
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

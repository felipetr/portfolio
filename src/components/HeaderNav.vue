<template>
  <div>
    <SocialNetworkIcons />
    <header class="menuNavParent">
      <button class="headerbars" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
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
        <div class="p6"><hr /></div>
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
        { text: "English", value: "en_US" },
        { text: "Español", value: "es_ES" },
        { text: "Português", value: "pt_BR" },
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

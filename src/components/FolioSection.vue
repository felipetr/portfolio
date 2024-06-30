<template>
  <section id="portfolio" class="section">
      <h1 class="text-center">{{ $t("portfolio_title") }}</h1>
      <p class="text-center">{{ $t("portfolio_subtitle") }}</p>
      <div class="py-4 px-4 my-4">
        <v-row justify="center">
          <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card :color="darkestBlue" class="mx-auto" max-width="100%">
              <div style="position: relative; width: 100%; padding-top: 56.25%;">
                <v-img
                  :src="require(`@/assets/images/folio/${card.imageUrl}`)"
                  cover
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                ></v-img>
              </div>

              <v-card-title class="green-color">
                {{ card.cardtitle }}
              </v-card-title>

              <v-card-subtitle v-if="this.$i18n.locale === 'pt_BR'">
                {{ card.cardsubtitle.ptBR }}
              </v-card-subtitle>
              <v-card-subtitle v-if="this.$i18n.locale === 'es_ES'">
                {{ card.cardsubtitle.esES }}
              </v-card-subtitle>
              <v-card-subtitle v-if="this.$i18n.locale === 'en_US'">
                {{ card.cardsubtitle.enUS }}
              </v-card-subtitle>

              <v-card-actions>
                <a :href="card.externalUrl" target="_blank" v-if="card.externalUrl">
                  <div class="d-none">{{ $t('explore') }}</div>
                  <v-btn :color="green" :text="$t('explore')"></v-btn>
                </a>
                <v-spacer></v-spacer>

                <v-btn
                  color="#74aa4d"
                  :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="card.show = !card.show"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="card.show">
                  <v-divider></v-divider>

                  <v-card-text v-if="this.$i18n.locale === 'pt_BR'">
                    {{ card.cardtext.ptBR }}
                  </v-card-text>
                  <v-card-text v-if="this.$i18n.locale === 'es_ES'">
                    {{ card.cardtext.esES }}
                  </v-card-text>
                  <v-card-text v-if="this.$i18n.locale === 'en_US'">
                    {{ card.cardtext.enUS }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </div>
  </section>
</template>

<script>
import folio from "@/folio.json";

export default {
  name: "AboutSection",
  data() {
    return {
      cards: folio.cards,
      darkestBlue: process.env.VUE_APP_DARKEST_BLUE,
      green: process.env.VUE_APP_GREEN
    };
  },
};
</script>

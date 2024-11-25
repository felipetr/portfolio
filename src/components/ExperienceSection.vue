<template>
  <section id="experience" class="section darkestblue-bg">
    <v-container>
      <h1 class="text-center">{{ $t("experiences_title") }}</h1>
      <p class="text-center">{{ $t("experiences_subtitle") }}</p>
      <v-row>
        <v-col cols="12" v-for="(card, index) in experiences" :key="index">
          <v-skeleton-loader v-if="loading" type="card" :rounded="true" :height="400">
          </v-skeleton-loader>
          <v-card v-else :color="darkblue">
            <v-card-title class="break-space">
              <h4>
                {{ card.company }}
                <small class="city" v-if="this.$i18n.locale === 'pt-BR'">
                {{ card.city.ptBR }}</small>

                <small class="city" v-if="this.$i18n.locale === 'es-ES'">
                  {{ card.city.esES }}
                </small>
                <small class="city" v-if="this.$i18n.locale === 'en-US'">
                  {{ card.city.enUS }}
                </small>
              </h4>

              <div v-if="this.$i18n.locale === 'pt-BR'">{{ card.job.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es-ES'">{{ card.job.esES }}</div>
              <div v-if="this.$i18n.locale === 'en-US'">{{ card.job.enUS }}</div>
            </v-card-title>
            <v-card-subtitle
              ><span>{{ card.since }}</span>
              <span> - </span>
              <span v-if="card.to">{{ card.to }}</span>
              <span v-else>{{ $t("now") }}</span>
            </v-card-subtitle>
            <v-card-text>
              <v-divider></v-divider>
              <div v-if="this.$i18n.locale === 'pt-BR'">{{ card.description.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es-ES'">{{ card.description.esES }}</div>
              <div v-if="this.$i18n.locale === 'en-US'">{{ card.description.enUS }}</div>
            </v-card-text>
            <v-card-text>
              <h5>{{ $t("techs") }}</h5>
              <div>
                <div>
                  <small>&nbsp;</small>
                </div>
                <div style="margin: -6px -3px">
                  <v-chip
                    style="margin: 6px 3px"
                    :color="green"
                    v-for="(tech, key) in card.techs"
                    :key="key"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </div>
            </v-card-text>
            <v-card-subtitle> </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import experiences from "@/data/experiences.json";

export default {
  name: "ContactSection",
  data() {
    return {
      experiences: experiences.experiences,
      green: process.env.VUE_APP_GREEN,
      blue: process.env.VUE_APP_BLUE,
      darkblue: process.env.VUE_APP_DARK_BLUE,
      darkestblue: process.env.VUE_APP_DARKEST_BLUE,
    };
  },
  methods: {
    formatDate(dateString) {
      const dateArr = dateString.split("-");
      const year = dateArr[0];
      const month = dateArr[1];
      let formattedDate = `${this.months.enUS[month]} ${year}`;
      if (this.$i18n.locale === "pt-BR") {
        formattedDate = `${this.months.ptBR[month]} de ${year}`;
      }
      if (this.$i18n.locale === "es-ES") {
        formattedDate = `${this.months.esES[month]} de ${year}`;
      }
      return formattedDate;
    },
  },
};
</script>

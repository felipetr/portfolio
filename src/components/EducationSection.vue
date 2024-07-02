<template>
  <section id="education" class="section darkestblue-bg">
    <v-container>
      <h1 class="text-center">{{ $t("certifications_title") }}</h1>
      <p class="text-center">{{ $t("certifications_subtitle") }}</p>
      <div class="py-4 my-4">
        <h2 class="text-center">{{ $t("college") }}</h2>
        <v-divider class="opacity-to-zero"></v-divider>
        <v-row>
          <v-col cols="12" v-for="(card, index) in college" :key="index">
            <v-skeleton-loader
              v-if="loading"
              type="card"
              :rounded="true"
              :height="400"
            ></v-skeleton-loader>
            <v-card v-else :color="blue">
              <v-card-title :color="green">
                <h4>{{ card.institution }}</h4>
              </v-card-title>

              <v-card-subtitle>
                <span v-if="this.$i18n.locale === 'pt-BR'">
                  {{ card.course.ptBR }}
                </span>
                <span v-if="this.$i18n.locale === 'es-ES'">
                  {{ card.course.esES }}
                </span>
                <span v-if="this.$i18n.locale === 'en-US'">
                  {{ card.course.enUS }}
                </span>
              </v-card-subtitle>
              <v-card-text>
                {{ card.start }} - {{ card.end }}
                <v-divider></v-divider>
                <div class="text-end op5">
                  <small v-if="this.$i18n.locale === 'pt-BR'">
                    {{ card.status.ptBR }}
                  </small>
                  <small v-if="this.$i18n.locale === 'es-ES'">
                    {{ card.status.esES }}
                  </small>
                  <small v-if="this.$i18n.locale === 'en-US'">
                    {{ card.status.enUS }}
                  </small>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
  <div class="section">
    <v-container>
      <div class="py-4 my-4">
        <h2 class="text-center">{{ $t("certifications") }}</h2>
        <v-divider class="opacity-to-zero"></v-divider>
        <v-row>
          <v-col cols="12" v-for="(card, index) in certifications" :key="index">
            <v-skeleton-loader
              v-if="loading"
              type="card"
              :rounded="true"
              :height="400"
            ></v-skeleton-loader>
            <v-card v-else :color="darkestblue">
              <v-card-title>
                <h4>{{ card.name }}</h4>
              </v-card-title>

              <v-card-text> {{ card.tech }} - {{ formatDate(card.date) }} </v-card-text>
              <v-card-subtitle v-if="card.updatedDate">
                {{ $t('last_update') }}: {{ formatDate(card.updatedDate) }}
              </v-card-subtitle>
              <v-card-text>
                <v-divider></v-divider>
                <v-row>
                  <v-col v-if="card.code"  variant="plain">
                    <div style="position: relative; left: -15px">
                      <v-chip  variant="text" color="#fff">{{ $t("credential_code") }}: </v-chip>
                      <v-chip :color="green">{{ card.code }} </v-chip>
                    </div>
                  </v-col>
                  <v-col v-if="card.validation_url" class="text-end">
                    <a :href="card.validation_url" target="_blank">
                      <div class="d-none">{{ $t("see_certificate") }}</div>
                      <v-btn :color="green" :text="$t('see_certificate')"></v-btn>
                    </a>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import education from "@/education.json";
import date from "@/date.json";

export default {
  name: "ContactSection",
  data() {
    return {
      college: education.college,
      months: date.months,
      certifications: education.certifications,
      green: process.env.VUE_APP_GREEN,
      blue: process.env.VUE_APP_BLUE,
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

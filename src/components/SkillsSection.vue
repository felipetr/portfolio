<template>
  <section id="skills">
    <div class="section">
      <v-container>
        <div class="py-4 my-4">
          <h1 class="text-center">{{ $t("hard_skills") }}</h1>
          <p class="text-center mb-4">{{ $t("hard_skills_subtitle") }}</p>
          <v-row>
            <v-col cols="12" md="6" v-for="(skill, index) in sortedHardSkills" :key="index">
              <div v-if="this.$i18n.locale === 'pt-BR'">{{ skill.title.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es-ES'">{{ skill.title.esES }}</div>
              <div v-if="this.$i18n.locale === 'en-US'">{{ skill.title.enUS }}</div>
              <v-progress-linear
                :color="green"
                :model-value="skill.perc"
                :height="10"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="darkestblue-bg section">
      <v-container>
        <div class="py-4 my-4">
          <h1 class="text-center">{{ $t("soft_skills") }}</h1>
          <p class="text-center mb-4">{{ $t("soft_skills_subtitle") }}</p>
          <v-row>
            <v-col cols="12" md="6" v-for="(skill, index) in sortedSoftSkills" :key="index">
              <div v-if="this.$i18n.locale === 'pt_BR'">{{ skill.title.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es_ES'">{{ skill.title.esES }}</div>
              <div v-if="this.$i18n.locale === 'en_US'">{{ skill.title.enUS }}</div>
              <v-progress-linear
                :color="green"
                :model-value="skill.perc"
                :height="10"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="section">
      <v-container>
        <div class="py-4 my-4">
          <h1 class="text-center">{{ $t("language_skills_title") }}</h1>
          <p class="text-center mb-4">{{ $t("language_skills_subtitle") }}</p>
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(lang, index) in langskills"
              :key="index"
            >
            <v-skeleton-loader v-if="loading" type="card"
            :rounded="true" :height="400"></v-skeleton-loader>
            <v-card v-else :color="blue">
                <v-card-title>
                  {{ $t(`${lang.lang}`) }}
                </v-card-title>

                <v-card-subtitle>
               {{ $t(`language_skills.${lang.level}.title`) }}
                  <v-btn style="float: right; margin-bottom: 10px;"
                    color="#74aa4d"
                    :icon="lang.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="lang.show = !lang.show"
                  ></v-btn>
              </v-card-subtitle>

                <v-expand-transition>
                  <div v-show="lang.show">
                    <v-card-text>
                      <div>{{ $t(`language_skills.${lang.level}.desc`) }}</div>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
import skills from "@/skills.json";
import languageskills from "@/language_skills.json";

export default {
  name: "SkillsSection",
  data() {
    return {
      hardSkills: skills.hardSkills,
      softSkills: skills.softSkills,
      langskills: languageskills.language_skills,
      green: process.env.VUE_APP_GREEN,
      blue: process.env.VUE_APP_BLUE,
    };
  },
  computed: {
    sortedHardSkills() {
      return this.hardSkills.slice().sort((a, b) => b.perc - a.perc);
    },
    sortedSoftSkills() {
      return this.softSkills.slice().sort((a, b) => b.perc - a.perc);
    },
  },
};
</script>

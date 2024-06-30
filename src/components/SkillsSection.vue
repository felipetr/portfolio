<template>
  <section id="skills">
    <div class="section">
      <v-container>
        <div class="py-4 my-4">
          <h1 class="text-center">{{ $t("hard_skills") }}</h1>
          <p  class="text-center mb-4">{{ $t("hard_skills_subtitle") }}</p>
          <v-row>
            <v-col cols="12" md="6" v-for="(skill, index) in sortedHardSkills" :key="index">
              <div v-if="this.$i18n.locale === 'pt_BR'">{{ skill.title.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es_ES'">{{ skill.title.esES }}</div>
              <div v-if="this.$i18n.locale === 'en_US'">{{ skill.title.enUS }}</div>
              <v-progress-linear
              :color="green" :model-value="skill.perc" :height="10"></v-progress-linear>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div  class="darkestblue-bg section">
      <v-container>
        <div class="py-4 my-4">
          <h1  class="text-center">{{ $t("soft_skills") }}</h1>
          <p class="text-center mb-4">{{ $t("soft_skills_subtitle") }}</p>
          <v-row>
            <v-col cols="12" md="6" v-for="(skill, index) in sortedSoftSkills" :key="index">
              <div v-if="this.$i18n.locale === 'pt_BR'">{{ skill.title.ptBR }}</div>
              <div v-if="this.$i18n.locale === 'es_ES'">{{ skill.title.esES }}</div>
              <div v-if="this.$i18n.locale === 'en_US'">{{ skill.title.enUS }}</div>
              <v-progress-linear
              :color="green" :model-value="skill.perc" :height="10"></v-progress-linear>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
import skills from "@/skills.json"; // Importa o arquivo JSON com as habilidades

export default {
  name: "SkillsSection",
  data() {
    return {
      hardSkills: skills.hardSkills,
      softSkills: skills.softSkills,
      green: process.env.VUE_APP_GREEN
    };
  },
  computed: {
    sortedHardSkills() {
      return this.hardSkills.slice().sort((a, b) => b.perc - a.perc);
    },
    sortedSoftSkills() {
      return this.softSkills.slice().sort((a, b) => b.perc - a.perc);
    }
  }
};
</script>

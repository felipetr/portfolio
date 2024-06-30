<template>
  <v-carousel height="auto" hide-delimiters>
    <template v-slot:prev="{ props }">
      <div class="prevBtn" @click="props.onClick">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    </template>
    <template v-slot:next="{ props }">
      <div class="nextBtn" @click="props.onClick">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </template>
    <template v-for="(projectgroup, index) in projects" :key="index">
      <v-carousel-item
      style="margin: 0 !important; padding: 0 !important; height: auto !important;">
        <div style="padding: 0 80px;">
          <v-row>
            <v-col class="text-center p-3"
            :cols="cols" v-for="(project, idx) in projectgroup" :key="idx">
              <v-img
                :style="'background: ' +
                'url(' + require(`@/assets/images/projects/${project.logo}`) + '); ' +
                'background-size: contain; background-repeat: no-repeat; ' +
                'background-position: center center; width: 100%'"
                :src="require(`@/assets/images/inv.png`)"
                :alt="project.title"
                :title="project.title"
              />
            </v-col>
          </v-row>
        </div>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<script>
export default {
  name: "ProjectsCarousel",
  props: {
    col: String,
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>

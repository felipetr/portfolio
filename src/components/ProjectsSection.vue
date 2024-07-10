<template>
  <section id="about" class="section darkestblue-bg">
    <v-container>
      <h1 class="text-center">{{ $t("projects_title") }}</h1>
      <p class="text-center">{{ $t("projects_subtitle") }}</p>
      <div class="py-4 my-4">
        <v-row>
          <v-col cols="12">
            <ProjectsCarousel
              :projects="projectsXs"
              v-if="windowWidth < 600"
              :col="12"
            />
            <ProjectsCarousel
              :projects="projectsSm"
              v-else-if="windowWidth >= 600 && windowWidth < 960"
              :col="4"
            />
            <ProjectsCarousel
              :projects="projectsMd"
              v-else-if="windowWidth >= 960 && windowWidth < 1264"
              :col="3"
            />
            <ProjectsCarousel
              :projects="projectsLg"
              v-else
              :col="2"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import projectsData from "@/data/projects.json";
import ProjectsCarousel from "@/components/ProjectsCarousel.vue";

function chunkProjects(arr, size) {
  return arr.reduce(
    (acc, _, i) =>
      (i % size
        ? acc[acc.length - 1].push(arr[i])
        : acc.push([arr[i]])) && acc,
    []
  );
}

const projectsDataSm = {
  projects: chunkProjects(projectsData.projects, 3),
};

const projectsDataXs = {
  projects: chunkProjects(projectsData.projects, 1),
};

const projectsDataMd = {
  projects: chunkProjects(projectsData.projects, 4),
};

const projectsDataLg = {
  projects: chunkProjects(projectsData.projects, 6),
};

export default {
  name: "ProjectsSection",
  components: {
    ProjectsCarousel,
  },
  data() {
    return {
      projectsXs: projectsDataXs.projects,
      projectsSm: projectsDataSm.projects,
      projectsMd: projectsDataMd.projects,
      projectsLg: projectsDataLg.projects,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

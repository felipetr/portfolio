<template>
  <section id="about" class="section darkestblue-bg">
    <v-container>
      <h1 class="text-center">{{ $t("aboutme_title") }}</h1>
      <p class="text-center">{{ $t("aboutme_subtitle") }}</p>
      <div class="py-4 my-4">
        <v-row align="center">
          <v-col cols="12" md="4" class="text-center">
            <v-img
          :src="require('@/assets/images/avatar.png')"
          alt="Felipe Travassos"
          class="avatar"
          contain
           />
          </v-col>
          <v-col cols="12" md="8" class="text-left">
            <p>{{ $t("aboutme_content_p1") }}</p>
            <p>{{ $t("aboutme_content_p2") }}</p>
            <p>{{ $t("aboutme_content_p3") }}</p>
            <p>{{ $t("aboutme_content_p4") }}</p>
            <p>{{ $t("aboutme_content_p5") }}</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

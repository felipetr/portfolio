<template>
  <section id="home">
    <div id="mesh">
      <v-img
          :src="require('../assets/images/logo_white.svg')"
          alt="Felipe"
          class="homelogo"
          contain
           />
    </div>
    <FluidBackground/>
  </section>
</template>

<script>
import FluidBackground from '@/components/FluidBackground.vue';

export default {
  name: 'HomeSection',

  components: {
    FluidBackground,
  },
};
</script>

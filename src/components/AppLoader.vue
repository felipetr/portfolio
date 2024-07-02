<template>
  <div id="loader" class="blureffect" :class="{ 'opacity-to-zero': loaded, 'hidden': hideLoader }">
    <v-img
      :src="require('../assets/images/loader.gif')"
      alt="Felipe"
      class="loader"
      contain
    />
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
      loaded: false,
      hideLoader: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.hideLoader = true;
      }, 500);
    }, 2000);
  },
};
</script>

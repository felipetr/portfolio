<template>
  <div class="sociallinks">
    <span v-for="(socialmedia, index) in socialmedias" :key="index">
      <a :href="socialmedia.url"
      target="_blank" rel="noopener noreferrer"
      :title="socialmedia.name">
      <i :class="`fa-brands fa-${socialmedia.icon} social-icon`"></i>
      <span class="dnone">{{ socialmedia.name }}</span>
    </a>
    </span>
  </div>
</template>

<script>
import socialMediasData from "@/data/contacts.json";

export default {
  name: 'SocialNetworkIcons',
  data() {
    return {
      socialmedias: socialMediasData.socialmedias,
    };
  },
};
</script>

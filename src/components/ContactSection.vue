<template>
  <section id="contact" class="section darkestblue-bg">
    <v-container>
      <h1 class="text-center">{{ $t("contactme_title") }}</h1>
      <p class="text-center">{{ $t("contactme_subtitle") }}</p>
      <div class="py-4 my-4">
        <v-row>
          <v-col cols="12" md="8" class="text-center">
            <ContactForm />
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-left">
            <p v-for="(contact, index) in contacts" :key="index">
              <a target="_blank"
              :href="contact.url"
              class="contact-icon sm-small"
              :title="$t(contact.title)">
                <i :class="`fa-solid fa-${contact.icon}`"></i>
                <span class="dnone">{{ $t(contact.title) }}:</span> {{ contact.text }}
              </a>
            </p>
            <span v-for="(socialmedia, index) in socialmedias" :key="index">
              <a
                :href="socialmedia.url"
                target="_blank"
                rel="noopener noreferrer"
                :title="socialmedia.name"
              >
                <i :class="`fa-brands fa-${socialmedia.icon} social-icon`"></i>
                <span class="dnone">{{ socialmedia.name }}</span>
              </a>
            </span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import socialMediasData from "@/data/contacts.json";

export default {
  name: "ContactSection",
  data() {
    return {
      contacts: socialMediasData.contacts,
      socialmedias: socialMediasData.socialmedias,
    };
  },
  components: {
    ContactForm,
  },
};
</script>

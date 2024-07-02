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
            <p>contato@felipetravassos.com</p>
            <p>+55 (81) 9 9827.7376</p>
              <a
                href="https://www.linkedin.com/in/felipe-travassos-b5322934/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i class="fa-brands fa-linkedin social-icon"></i><span class="dnone">LinkedIn</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i class="fa-brands fa-github social-icon"></i><span class="dnone">GitHub</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5581998277376"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <i class="fa-brands fa-whatsapp social-icon"></i><span class="dnone">WhatsApp</span>
              </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ContactSection",
  components: {
    ContactForm,
  },
};
</script>

<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
    <v-text-field
      v-model="form.name"
      :rules="required"
      :label="$t('name')"
      clearable
    ></v-text-field>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-autocomplete
          v-model="form.codeArea"
          :rules="required"
          :items="countryOptions"
          item-value="code"
          :item-title="(item) => `${getTitle(item, 'item-title')}`"
          :label="$t('ddi')"
          return-object
          hide-details
        >
          <template #selection>
            {{ form.codeArea.code }}
          </template>
          <template #item="{ item, props }">
            <v-list-item v-bind="props" :value="item.value">
              <span v-html="getTiltleByCode(item.value)"></span>
            </v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
          v-model="form.phone"
          :rules="required"
          :label="$t('phone')"
          clearable
          @input="validateNumber"
        />
      </v-col>
    </v-row>
    <v-text-field v-model="form.email" :rules="emailValidate" label="E-mail" clearable />
    <v-textarea v-model="form.message" :rules="required" :label="$t('message')" clearable />
    <v-alert :color="returnData.status" class="text-center" v-if="returnData.message">
      <div class="text-center">
        <v-img
          v-if="returnData.status"
          :src="require(`@/assets/images/alert_icons/${returnData.status}.svg`)"
          :alt="returnData.status"
          class="alertimg"
          contain
        />
      </div>
      <div :class="`alert-${returnData.status}`">
        {{ returnData.message }}
        <v-divider></v-divider>
        <small>{{ returnData.subtitle }}</small>
      </div>
    </v-alert>
    <v-btn v-if="loading" class="mt-2" color="#6c757d" block
      ><i class="fa-solid fa-circle-notch fa-spin"></i> {{ $t("sending") }}
    </v-btn>
    <v-btn v-else class="mt-2" type="submit" :color="green" block>{{ $t("send") }}</v-btn>
  </v-form>
</template>

<script>
import countries from "@/data/countries.json";
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      countryOptions: countries.countries,
      green: process.env.VUE_APP_GREEN,
      isvalid: false,
      recaptcha: process.env.VUE_APP_RECAPTCHA_KEY,
      norules: [
        (value) => {
          if (value) return true;
          return true;
        }
      ],
      required: [
        (value) => {
          if (value) return true;
          return this.$t("validation.required");
        },
      ],
      emailValidate: [
        (value) => {
          if (!value) {
            return this.$t("validation.required");
          }
          if (!this.validateEmail(value)) {
            return this.$t("validation.invalid_email");
          }
          return true;
        },
      ],
      defaultCodeArea: {
        ptBR: "Brasil",
        enUS: "Brazil",
        esES: "Brasil",
        code: "+55",
        flag: "br",
      },
      form: {
        name: "",
        codeArea: {
          ptBR: "Brasil",
          enUS: "Brazil",
          esES: "Brasil",
          code: "+55",
          flag: "br",
        },
        phone: "",
        email: "",
        message: "",
      },
      apitoken: "",
      loading: false,
      returnData: {
        message: "",
        subtitle: "",
        status: "",
      },
    };
  },
  methods: {
    async submit(event) {
      this.returnData.message = "";
      this.returnData.status = "";
      this.loading = true;

      if (this.isvalid) this.loading = true;

      const results = await event;

      this.loading = false;
      if (results.valid) {
        this.$recaptcha("login").then((token) => {
          const data = new FormData();
          data.append("name", this.form.name);
          data.append("email", this.form.email);
          data.append("code", this.form.codeArea.code);
          data.append("phone", this.form.phone);
          data.append("message", this.form.message);
          data.append("g-recaptcha-response", token);

          this.apitoken = token;
          try {
            axios
              .post(`${process.env.VUE_APP_API_URL}/sendmail`, data, {
                headers: {
                  Accept: "application/json",
                },
              })
              .then((response) => {
                this.returnData.message = this.$t(`${response.data.status}msg_title`);
                this.returnData.subtitle = this.$t(`${response.data.status}msg_subtitle`);
                this.returnData.status = response.data.status;
                if (response.data.status === "success") {
                  this.form.name = "";
                  this.form.email = "";
                  this.form.codeArea = this.defaultCodeArea;
                  this.form.phone = "";
                  this.form.message = "";
                }
              });
          } catch (error) {
            this.returnData.message = this.$t("errormsg_title");
            this.returnData.subtitle = this.$t("errormsg_subtitle");
            this.returnData.status = "error";
          }
        });
      } else {
        const anchorElement = document.querySelector("#contact");
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validateNumber() {
      this.form.phone = this.form.phone.replace(/\D/g, "");
    },
    getTiltleByCode(code) {
      const itemSelected = this.countryOptions.find((country) => country.code === code);
      return this.getTitle(itemSelected, "item");
    },
    getTitle(item, type) {
      const flag = `<span class="fi fi-${item.flag}"></span>`;
      let returnHtml = "";
      if (type === "item") {
        returnHtml = `${flag}`;
      } else if (type === "item-title") {
        let name = item.enUS;
        if (this.$i18n.locale === "pt-BR") {
          name = item.ptBR;
        }
        if (this.$i18n.locale === "es-ES") {
          name = item.esES;
        }
        if (name) {
          name = ` | ${name}`;
        }
        returnHtml = `${item.code}${name}`;
      } else {
        returnHtml = `${flag}${item.code}`;
      }
      return returnHtml;
    },
  },
  mounted() {},
};
</script>

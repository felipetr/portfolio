<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field v-model="Name" :rules="required" :label="$t('name')" clearable></v-text-field>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-autocomplete
          v-model="CodeArea"
          :rules="required"
          :items="countryOptions"
          item-value="code"
          :item-title="(item) => `${getTitle(item, 'item-title')}`"
          :label="$t('ddi')"
          return-object
          hide-details
        >
          <template #selection>
            {{ CodeArea.code }}
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
          v-model="Phone"
          :rules="required"
          :label="$t('phone')"
          clearable
          @input="validateNumber"
        ></v-text-field>

      </v-col>
    </v-row>

    <v-text-field v-model="Email"
    :rules="emailValidate"
    label="E-mail" clearable>
    </v-text-field>
        <v-textarea
          v-model="Message"
          :rules="required"
          :label="$t('message')"
          clearable
        ></v-textarea>
    <v-btn v-if="loading"
    class="mt-2" color="#6c757d"
    block><i class="fa-solid fa-circle-notch fa-spin"></i> {{ $t('sending') }}
  </v-btn>
    <v-btn v-else class="mt-2" type="submit" :color="green" block>{{ $t('send') }}</v-btn>
  </v-form>
</template>

<script>
import countries from "@/countries.json";

export default {
  data() {
    return {
      countryOptions: countries.countries,
      green: process.env.VUE_APP_GREEN,
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
      Name: "",
      loading: false,
      CodeArea: {
        ptBR: "Brasil",
        enUS: "Brazil",
        esES: "Brasil",
        code: "+55",
        flag: "br",
      },
      Phone: "",
      Email: "",
      Message: "",
    };
  },
  methods: {
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validateNumber() {
      this.Phone = this.Phone.replace(/\D/g, "");
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
};
</script>

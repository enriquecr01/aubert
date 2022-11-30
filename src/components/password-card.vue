<template style="display: inline-block;">
  <Card>
    <template #title>
      <img :src="`https://logo.clearbit.com/${ url }?size=40`" />
      {{ name }}
    </template>
    <template #subtitle>
      <div>{{ user }}</div>
      <Button
        icon="pi pi-arrow-right"
        class="p-button-rounded p-button-info p-button-outlined"
        v-tooltip.top="gosite"
      />
      <Button
        icon="pi pi-copy"
        class="p-button-rounded p-button-secondary p-button-outlined"
        v-tooltip.top="copy"
        style="margin-left: 0.5em"
      />
      <Button
        icon="pi pi-pencil"
        class="p-button-rounded p-button-warning p-button-outlined"
        v-tooltip.top="edit"
        style="margin-left: 0.5em"
      />
      <Button
        icon="pi pi-trash"
        class="p-button-rounded p-button-danger p-button-outlined"
        v-tooltip.top="deletepass"
        style="margin-left: 0.5em"
      />
    </template>
  </Card>

</template>

<script>
import { getWord } from "../languages.js";

export default {
  name: "PasswordCard",
  props: {
    lang: String,
    url: String,
    name: String,
    user: String,
  },
  mounted() {
    this.selectedLang = localStorage.getItem("language");
    this.setLanguage();
  },
  data: function() {
    return {
      copy: "xd",
      gosite: "xd",
      edit: "xd",
      deletepass: "xd",
    };
  },
  methods: {
    setLanguage() {
      this.copy = getWord(this.selectedLang, "copy");
      this.gosite = getWord(this.selectedLang, "gosite");
      this.edit = getWord(this.selectedLang, "edit");
      this.deletepass = getWord(this.selectedLang, "delete");
    },
  },
  watch: {
    lang(newValue) {
      this.selectedLang = newValue;
      this.setLanguage()
    },
  },
};
</script>

<style>
</style>
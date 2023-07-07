<template>

  <div :class="`flex items-center gap-4 p-4 text-gray-300 rounded shadow-white1 hover:${ color } hover:text-gray-50`" @click="showPassword()">
    <img class="w-12 h-12 rounded-md" :src="`https://logo.clearbit.com/${ altIcon ? 'clearbit.com' : url }?size=100px`" @error="setAltIcon">
    <div class="flex flex-col">
      <strong class="text-sm font-medium">{{ name }}</strong>
      <span class="text-sm font-medium">{{ user }}</span>
    </div>
  </div>

</template>

<script>
import { getWord } from "../../languages.js";

export default {
  name: "PasswordCard",
  emits: ['showPassword'],
  props: {
    lang: String,
    url: String,
    name: String,
    user: String,
    color: String,
    secret: String,
    notes: String,
    id: Number
  },
  mounted() {
    this.selectedLang = localStorage.getItem("language");
    this.setLanguage();
    this.altIcon = false;
  },
  data: function() {
    return {
      copy: "xd",
      gosite: "xd",
      edit: "xd",
      deletepass: "xd",
      altIcon: false,
    };
  },
  methods: {
    setAltIcon() {
      this.altIcon = true;
    },
    setLanguage() {
      this.copy = getWord(this.selectedLang, "copy");
      this.gosite = getWord(this.selectedLang, "gosite");
      this.edit = getWord(this.selectedLang, "edit");
      this.deletepass = getWord(this.selectedLang, "delete");
    },
    showPassword() {
      this.$emit('showPassword', { url: this.url, name: this.name, user: this.user, color: this.color, secret: this.secret, notes: this.notes, id: this.id })
    }
  },
  watch: {
    lang(newValue) {
      this.selectedLang = newValue;
      this.setLanguage()
    },
    url() {
      this.altIcon = false;
    },
  },
};
</script>

<style>
  .shadow-white1:hover {
    box-shadow: 0px 0px 30px 5px rgba(130,130,130,0.77);
    -webkit-box-shadow: 0px 0px 30px 5px rgba(130,130,130,0.77);
    -moz-box-shadow: 0px 0px 30px 5px rgba(130,130,130,0.77);
    transition: 0.5s;
  }
</style>
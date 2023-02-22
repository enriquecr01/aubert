<template>
  <router-view :language="language"></router-view>
</template>

<script>

import './assets/tailwind.css';

export default {
  components: {
  },
  mounted() {
    if (localStorage.getItem("language") === undefined) {
      localStorage.setItem("language", "MX")
    }
  },
  data() {
    return {
      language: localStorage.getItem("language"),
    }
  },
  methods: {
    selectedLang(lang) {
      this.language = lang;
    },
  }
}
</script>

<style>
</style>

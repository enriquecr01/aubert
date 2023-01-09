<template>
  <router-view :language="language"></router-view>
</template>

<script>

import './assets/tailwind.css';

export default {
  components: {
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

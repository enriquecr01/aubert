<template>

  <div class="w-full left-0 top-0 w-full h-10vh flex bg-gray-900">
    <div class="container flex items-center m-auto justify-between px-4">
      <div class="flex items-center text-gray-200">
        <span class="text-lg font-medium">Aubert</span>
      </div>

      <div class="flex items-center space-x-4">
        <button class="menu-btn">
          <span class="text-gray-200 hover:text-yellow-500 focus:text-yellow-600">
            {{registerLabel}}
          </span>
        </button>
        <button class="menu-btn">
          <span class="text-gray-200 hover:text-yellow-500 focus:text-yellow-600">
            {{loginLabel}}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getWord } from "../../languages.js";


export default {
  name: 'MenuBar',
  mounted() {
    console.log('menubar')

    this.selectedLang = localStorage.getItem("language");
    this.setLanguage();
  },
  data() {
    return {
      language: localStorage.getItem("language") ? localStorage.getItem("language") : 'MX',
      loginLabel: '',
      registerLabel: '',
    }
  },
  methods: {
    setLanguage() {
      this.loginLabel = getWord(this.selectedLang, "loginLabel");
      this.registerLabel = getWord(this.selectedLang, "registerLabel");
    },
  },
  watch: {
    language(newValue) {
      this.selectedLang = newValue;
      this.setLanguage()
    },
  }
}
</script>

<style>
    .h-10vh{
        height: 10vh;
    }
</style>
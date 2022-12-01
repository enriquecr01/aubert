<template>



  <div class="grid grid-cols-2 gap-4" style="height: 100vh">
    <Menu @changeLanguage="selectedLang"/>

    <div class="container mx-auto grid-flow-col" >
    <router-view v-slot="{ Component }">
      <component :is="Component" :language="language" />
    </router-view>
  </div>
  </div>

</template>

<script>
import Menu from './components/menu.vue';

import './assets/tailwind.css';

export default {
  components: {
    Menu
  },
  data() {
    return {
      language: localStorage.getItem('language')
    }
  },
  methods: {
    selectedLang(lang) {
      this.language = lang
    }
  }
}
</script>

<style>
</style>

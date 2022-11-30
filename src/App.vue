<template>
  <Menu @changeLanguage="selectedLang"/>

  <div class="container mx-auto" >
    <router-view v-slot="{ Component }">
      <component :is="Component" :language="language" />
    </router-view>
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

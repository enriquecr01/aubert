<template>
  <div class="flex flex-wrap w-full h-screen"> 

    <MenuBar @changeLanguage="selectedLang"/>
    
    <Menu @changeLanguage="selectedLang" />


    <div class="lg:w-10/12 w-full bg-gray-600">
        <div class="p-4 text-gray-500">
          <router-view v-slot="{ Component }">
              <component :is="Component" :language="language" />
            </router-view>
        </div>
    </div>

  </div>

</template>

<script>
import Menu from './components/menu.vue';
import MenuBar from './components/menubar.vue';

import './assets/tailwind.css';

export default {
  components: {
    Menu,
    MenuBar
  },
  data() {
    return {
      language: localStorage.getItem('language'),
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

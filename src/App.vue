<template>
  <div class="flex flex-wrap bg-gray-100 w-full h-screen"> 
    <div class="w-2/12 bg-white rounded p-3 shadow-lg">
      <Menu @changeLanguage="selectedLang"/>
    </div>

    <div class="w-10/12">
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

<template>

  <v-idle
    @idle="closeSession"
    :wait="5"
    :duration="600" />

  <div class="flex flex-wrap w-full h-screen">
    <MenuBar @changeLanguage="selectedLang" />

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
import Menu from "./components/menu.vue";
import MenuBar from "./components/menubar.vue";

import "./assets/tailwind.css";

export default {
  components: {
    Menu,
    MenuBar,
  },
  mounted() {
    window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        this.eliminateSession();
        event.returnValue = '';
    });
    
    this.intervalSession = setInterval(this.evaluateSession, 1000);
  },
  data() {
    return {
      language: localStorage.getItem("language"),
      intervalSession: null,
    };
  },
  methods: {
    selectedLang(lang) {
      this.language = lang;
    },
    evaluateSession() {
      let token = localStorage.getItem('token') 
      if (token === null) {
        this.closeSession();
        clearInterval(this.intervalSession);
      }
    },
    closeSession() {
      this.eliminateSession();
      this.$router.push('/login');
    },
    eliminateSession() {
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('token');
    }
  },
};
</script>

<style>
  .v-idle {
    display: none;
  }
</style>

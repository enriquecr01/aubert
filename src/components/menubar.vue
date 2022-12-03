<template>
  <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">

    <PrintMenu @changeLanguage="selectedLang"/>

  </Sidebar>

  <div class="w-full lg:hidden left-0 top-0 w-full h-20 flex bg-gray-100">
    <div
      class="container flex items-center m-auto justify-between md:px-2 px-4"
    >
      <div class="flex items-center">
        <svg
          class="w-8 h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span class="text-lg font-medium">Aubert</span>
      </div>

      <div class="flex items-center space-x-4">
        <button class="menu-btn" @click="visibleLeft = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PrintMenu from './print-menu.vue';


export default {
  name: "MenuBar",
  components: {
    PrintMenu
  },
  emits: ["changeLanguage"],
  data() {
    return {
      visibleLeft: false,
    };
  },
  methods: {
    selectedLang(lang) {
        this.$emit("changeLanguage", lang);    
    }
  }
};
</script>

<style>

.emoji {
  width: 1.5rem;
}
</style>
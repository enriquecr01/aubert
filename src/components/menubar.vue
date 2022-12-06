<template>
  <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">

    <PrintMenu @changeLanguage="selectedLang"/>

  </Sidebar>

  <div class="w-full lg:hidden left-0 top-0 w-full h-20 flex bg-gray-900">
    <div class="container flex items-center m-auto justify-between px-4">
      <div class="flex items-center text-gray-200">
        <span class="text-lg font-medium">Aubert</span>
      </div>

      <div class="flex items-center space-x-4">
        <button class="menu-btn" @click="visibleLeft = true">
          <span class="text-gray-200">
            <i class="pi pi-fw pi-bars"></i>
          </span>
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

html .p-sidebar {
  background: #111827;
}
</style>
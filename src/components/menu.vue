<template>
  <div class="lg:w-2/12 md:w-0 bg-gray-900 text-slate-300 rounded p-3 shadow-lg hidden lg:block">
    <PrintMenu @changeLanguage="selectedLang"/>
  </div>

</template>

<script>
import PrintMenu from './print-menu.vue';

export default {
  name: "Menu",
  components: {
    PrintMenu
  },
  emits: ["changeLanguage"],
  data() {
    return {
    };
  },
  methods: {
    selectedLang(lang) {
      this.$emit("changeLanguage", lang);
    },
  },
};
</script>
		
<style scoped>
.emoji {
  width: 1.5rem;
}
</style>
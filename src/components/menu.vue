<template>
  <Menubar :model="items">
    <template #start>
      <img alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        style="height: 40px"
      />
    </template>
    <template>
      <router-link :to="item.to"></router-link>
    </template>
    <template #end>
        <Button @click="selectLang('MX')" class="p-button-rounded p-button-text p-button-plain"> <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1f2-1f1fd.png" class="emoji" /> </Button>
        <Button @click="selectLang('EN')" class="p-button-rounded p-button-text p-button-plain"> <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1fa-1f1f8.png" class="emoji" /> </Button>
        <Button @click="selectLang('FR')" class="p-button-rounded p-button-text p-button-plain"> <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1eb-1f1f7.png" class="emoji" /> </Button>

      <InputText placeholder="Buscar" type="text" />
    </template>
  </Menubar>
</template>

<script>
import { getWord } from '../languages.js';

export default {
  name: "Menu",
  mounted() {
    this.selectedLang = localStorage.getItem('language')
    this.setLanguage();
  },
  data() {
    return {
      selectedLang: 'MX',
      items: [
        {
          label: 'XD',
          icon: "pi pi-fw pi-key",
          to: "/",
        },
        {
          label: "Contraseñas de Wi-Fi",
          icon: "pi pi-fw pi-wifi",
          to: "/wifipassword",
        },
        {
          label: "Notas",
          icon: "pi pi-fw pi-file",
          to: "/notes",
        },
        {
          label: "Cerrar Sesion",
          icon: "pi pi-fw pi-power-off",
          to: "/login",
        },
      ],
    };
  },
  methods: {
    selectLang(lang) {
      localStorage.setItem('language', lang);
      this.selectedLang = lang;
      this.setLanguage();
    },
    setLanguage() {
      this.items[0].label = getWord(this.selectedLang, 'passwords');
      this.items[1].label = getWord(this.selectedLang, 'passwordswifi');
      this.items[2].label = getWord(this.selectedLang, 'notes');
      this.items[3].label = getWord(this.selectedLang, 'logout');

      this.$emit('changeLanguage', this.selectedLang);
    }
  }
};
</script>
		
<style scoped>
  .emoji {
    width: 1.5rem    
  }
</style>
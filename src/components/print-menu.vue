<template>
      <div class="flex items-center space-x-4 p-2 mb-5">
      <img class="h-12 rounded-full" :src="`https://api.dicebear.com/5.x/initials/svg?seed=${nameUser.replace(/ /g,'')}`" alt="James Bhatta" />
      <div>
        <h4 class="font-semibold text-lg text-gray-300 capitalize font-poppins tracking-wide">
          {{ nameUser }}
        </h4>
      </div>
    </div>

    <div>
      <Button @click="selectLang('MX')" class="p-button-text p-button-text p-button-plain">
        <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1f2-1f1fd.png" class="emoji" />
      </Button>
      <Button @click="selectLang('EN')" class="p-button-text p-button-text p-button-plain" >
        <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1fa-1f1f8.png" class="emoji" />
      </Button>
      <Button @click="selectLang('FR')" class="p-button-text p-button-text p-button-plain" >
        <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f1eb-1f1f7.png" class="emoji" />
      </Button>
    </div>

    <ul class="space-y-2 text-sm">
      <li v-for="(item, index) in items" :key="index" @click="item.method">
        <router-link :to="item.to">
          <a class="flex items-center space-x-3 text-gray-300 p-2 rounded-md font-medium hover:bg-gray-700 focus:shadow-outline" >
            <span class="text-gray-200">
              <i :class="item.icon"></i>
            </span>
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </li>
    </ul>
</template>

<script>
import { getWord } from "../languages.js";

export default {
    name: "PrintMenu",
    emits: ["changeLanguage"], // added to avoid Extraneous non-emits event listeners
    mounted() {
        if (!localStorage.getItem("language")) {
          localStorage.setItem("language", 'MX');
        }
        this.nameUser = localStorage.getItem("name");
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data() {
    return {
      selectedLang: "MX",
      nameUser: '',
      items: [
        {
          label: "Contraseñas",
          icon: "pi pi-fw pi-key",
          to: "/password",
          method: this.noFunction
        },
        {
          label: "Notas",
          icon: "pi pi-fw pi-file",
          to: "/notes",
          method: this.noFunction
        },
        {
          label: "Cerrar Sesion",
          icon: "pi pi-fw pi-power-off",
          to: "/login",
          method: this.removeDataSession
        },
      ],
    };
  },
  methods: {
    selectLang(lang) {
      localStorage.setItem("language", lang);
      this.selectedLang = lang;
      this.setLanguage();
    },
    setLanguage() {
      console.log(this.selectedLang)
      this.items[0].label = getWord(this.selectedLang, "passwords");
      this.items[1].label = getWord(this.selectedLang, "notes");
      this.items[2].label = getWord(this.selectedLang, "logout");

      this.$emit("changeLanguage", this.selectedLang);
    },
    noFunction() {
    },
    removeDataSession() {
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('token');
      this.$router.push('/login')
    }
  },
}
</script>

<style>

</style>
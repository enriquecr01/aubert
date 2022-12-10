<template>
    <div :class="`flex items-center gap-4 p-4 rounded ${ selectedPassword.color.replace('500', '800') } text-gray-50`">
        <img class="rounded-md" :src="`https://logo.clearbit.com/${ selectedPassword.url  }?size=100`">
        <div class="flex flex-col">
            <strong class="text-3xl font-medium">{{ titleEdit }}</strong>
            <span class="text-3xl">{{ selectedPassword.name }}</span>
        </div>
    </div>
    <div class="px-10">
        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="gosite"> <i class=" pi pi-external-link p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">URL </label> 
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" placeholder="xd.com" :value="selectedPassword.url">
        </div>

        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`"  v-ripple> <i class=" pi pi-user p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">Username</label>
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" placeholder="example@gmail.com" :value="selectedPassword.user">
        </div>

        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="copy"> <i class=" pi pi-copy p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">Password</label>

            <div class="flex justify-end items-center relative">
                <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 pr-10 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :type="typeTextPassword" placeholder="password" :value="selectedPassword.secret">
                <i :class="`pi ${visiblePasswordIcon} p-button-icon absolute mr-2 w-6`" @click="passwordVisible"></i>
            </div>
                        
        </div>
    </div>
</template>

<script>
import { getWord } from "../languages.js";

export default {
    name: 'password-panel',
    props: {
        language: String,
        selectedPassword: Object,
    },
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data: function() {
        return {
            titleEdit: '',
            gosite: 'no',
            copy: 'no',
            visiblePasswordIcon: 'pi-eye',
            typeTextPassword: 'password',
        }
    },
  methods: {
    setLanguage() {
      this.titleEdit = getWord(this.selectedLang, "titleEdit");
      this.gosite = getWord(this.selectedLang, "gosite");
      this.copy = getWord(this.selectedLang, "copy");
    },
    passwordVisible() {
        if (this.visiblePasswordIcon === 'pi-eye') {
            this.visiblePasswordIcon = 'pi-eye-slash';
            this.typeTextPassword = 'text';
        } else {
            this.visiblePasswordIcon = 'pi-eye';
            this.typeTextPassword = 'password';
        }
    }
  },
  watch: {
    language(newValue) {
      this.selectedLang = newValue;
      this.setLanguage()
    },
  },

}
</script>

<style>

</style>
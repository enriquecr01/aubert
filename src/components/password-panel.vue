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
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="gosite" @click="goSite"> <i class=" pi pi-external-link p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">URL </label> 
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" placeholder="xd.com" :value="selectedPassword.url">
        </div>

        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" @click="focusUsername" v-ripple> <i class=" pi pi-user p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ usernameLabel }}</label>
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" ref="username" placeholder="example@gmail.com" :value="selectedPassword.user">
        </div>

        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="copy" @click="copyClipboard"> <i class=" pi pi-copy p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ passwordLabel }}</label>

            <div class="flex justify-end items-center relative">
                <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 pr-14 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :type="typeTextPassword" placeholder="password" :value="selectedPassword.secret">
                <div class="absolute inset-y-0 right-0 flex items-center pr-9" @click="passwordVisible">
                    <i :class="`pi ${visiblePasswordIcon} p-button-icon absolute text-gray-50`" v-tooltip.top="{ value: visiblePasswordIcon === 'pi-eye' ? showPassword : hidePassword, class: 'custom-error' }"></i>
                </div>
            </div>
                        
        </div>

        <div class="w-full my-4">
            <button :class="`${ selectedPassword.color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" @click="focusNotes" v-ripple> <i class=" pi pi-book p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ notesLabel }}</label>
            <textarea rows="4" :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${selectedPassword.color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :placeholder="notesPlaceholder" ref="notes"></textarea>
        </div>

        <div class="w-full my-4">
            <label class="text-md font-medium text-gray-50">{{ pickColorLabel }}</label>
            <div>
                <button class="bg-gray-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-gray-500')"></button>
                <button class="bg-yellow-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-yellow-500')"></button>
                <button class="bg-green-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-green-500')"></button>
                <button class="bg-blue-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-blue-500')"></button>
                <button class="bg-purple-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-purple-500')"></button>
                <button class="bg-pink-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-pink-500')"></button>
                <button class="bg-indigo-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-indigo-500')"></button>
                <button class="bg-red-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-red-500')"></button>
            </div>
        </div>

        <div class="flex justify-end w-full my-4">
            <button class="bg-red-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" @click="showTemplate($event)" v-ripple>{{ deleteLabel }}</button>
            <button class="bg-gray-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple v-if="mobile" @click="closeModal">{{ closeLabel }}</button>
            <button class="bg-blue-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple>{{ saveLabel }}</button>
        </div>

    </div>

    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4 bg-gray-900 text-gray-50">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{slotProps.message.message}}</p>
            </div>
        </template>
    </ConfirmPopup>


</template>

<script>
import { getWord } from "../languages.js";

export default {
    name: 'password-panel',
    props: {
        language: String,
        selectedPassword: Object,
        mobile: Boolean,
    },
    emits: [ 'previsualizeColor', 'closeModal' ],
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data: function() {
        return {
            titleEdit: '',
            gosite: 'no',
            copy: 'no',
            showPassword: 'no',
            hidePassword: 'no',
            notesPlaceholder: 'no',
            usernameLabel: 'no',
            passwordLabel: 'no',
            notesLabel: 'no',
            pickColorLabel: 'no',
            closeLabel: 'no',
            saveLabel: 'no',
            deleteLabel: 'no',
            confirmDelete: 'no',
            yesLabel: 'no',
            noLabel: 'no',
            nameLabel: 'no',
            visiblePasswordIcon: 'pi-eye',
            typeTextPassword: 'password',
        }
    },
  methods: {
    setLanguage() {
      this.titleEdit = getWord(this.selectedLang, "titleEdit");
      this.gosite = getWord(this.selectedLang, "gosite");
      this.copy = getWord(this.selectedLang, "copy");
      this.showPassword = getWord(this.selectedLang, "showPassword");
      this.hidePassword = getWord(this.selectedLang, "hidePassword");
      this.notesPlaceholder = getWord(this.selectedLang, "notesPlaceholder");
      this.usernameLabel = getWord(this.selectedLang, "usernameLabel");
      this.passwordLabel = getWord(this.selectedLang, "passwordLabel");
      this.notesLabel = getWord(this.selectedLang, "notesLabel");
      this.pickColorLabel = getWord(this.selectedLang, "pickColorLabel");
      this.closeLabel = getWord(this.selectedLang, "closeLabel");
      this.saveLabel = getWord(this.selectedLang, "saveLabel");
      this.deleteLabel = getWord(this.selectedLang, "deleteLabel");
      this.confirmDelete = getWord(this.selectedLang, "confirmDelete");
      this.yesLabel = getWord(this.selectedLang, "yesLabel");
      this.noLabel = getWord(this.selectedLang, "noLabel");
      this.nameLabel = getWord(this.selectedLang, "nameLabel");
    },
    passwordVisible() {
        if (this.visiblePasswordIcon === 'pi-eye') {
            this.visiblePasswordIcon = 'pi-eye-slash';
            this.typeTextPassword = 'text';
        } else {
            this.visiblePasswordIcon = 'pi-eye';
            this.typeTextPassword = 'password';
        }
    },
    goSite() {
        if (this.selectedPassword.url.includes('https://')) {
            window.open(this.selectedPassword.url, '_blank').focus();
        } else {
            window.open(`https://www.${this.selectedPassword.url}`, '_blank').focus();
        }
    },
    copyClipboard() {
        navigator.clipboard.writeText(this.selectedPassword.secret);
    },
    focusUsername() {
        this.$refs.username.focus();
    },
    focusNotes() {
        this.$refs.notes.focus();
    },
    previsualizeColor(color) {
        this.$emit('previsualizeColor', color);
    },
    closeModal() {
        this.$emit('closeModal', true);
    },
    showTemplate(event) {
        this.$confirm.require({
            target: event.currentTarget,
            group: 'demo',
            message: this.confirmDelete,
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            acceptClass: 'p-button-danger',
            rejectClass: 'p-button-info',
            acceptLabel: this.yesLabel,
            rejectLabel: this.noLabel,
            accept: () => {
                console.log('ELIMINADO')
            },
            reject: () => {
                console.log('NO ELIMINADO')
            }
        });
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
    .custom-error .p-tooltip-text {
        font-size: 0.75rem; /* 12px */
        line-height: 1rem; /* 16px */
    }

    .p-confirm-popup {
        background: #000000;
    }

    .p-confirm-popup-footer {
        background: rgba(17, 24, 39, 1);
    }
</style>
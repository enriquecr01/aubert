<template>
    <div :class="`flex items-center gap-4 p-4 rounded ${ color.replace('500', '800') } text-gray-50`">
        <img class="rounded-md" :src="`https://logo.clearbit.com/${ url  }?size=100`">
        <div class="flex flex-col">
            <strong class="text-3xl font-medium">{{ titleEdit }}</strong>
            <span class="text-3xl">{{ name }}</span>
        </div>
    </div>
    <div class="px-10">
        <div class="w-full my-4">
            <label class="text-md font-medium text-gray-50"> {{ nameLabel }} </label> 
            <input :class="`w-full bg-gray-600 text-gray-50 mt-1 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${ color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" :placeholder="namePlaceholder" v-model="name">
        </div>
        
        <div class="w-full my-4">
            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="gosite" @click="goSite"> <i class=" pi pi-external-link p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">URL </label> 
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" :placeholder="urlPlaceholder" ref="url" v-on:blur="putValueURL()" :value="url">
        </div>

        <div class="w-full my-4">
            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" @click="copyClipboardUsername" v-ripple> <i class=" pi pi-user p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ usernameLabel }}</label>
            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" ref="username" placeholder="example@gmail.com" v-model="username">
        </div>

        <div class="w-full my-4">
            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" v-ripple v-tooltip.top="copy" @click="copyClipboard"> <i class=" pi pi-copy p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ passwordLabel }}</label>

            <div class="flex justify-end items-center relative">
                <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 pr-14 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :type="typeTextPassword" :placeholder="passwordPlaceholder" v-model="secret">
                <div class="absolute inset-y-0 right-0 flex items-center pr-9" @click="passwordVisible">
                    <i :class="`pi ${visiblePasswordIcon} p-button-icon absolute text-gray-50`" v-tooltip.top="{ value: visiblePasswordIcon === 'pi-eye' ? showPassword : hidePassword, class: 'custom-error' }"></i>
                </div>
            </div>
                        
        </div>

        <div class="w-full my-4">
            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple`" @click="focusNotes" v-ripple> <i class=" pi pi-book p-button-icon"></i> </button>
            <label class="text-md font-medium text-gray-50">{{ notesLabel }}</label>
            <textarea rows="4" :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :placeholder="notesPlaceholder" ref="notes" v-model="notes"></textarea>
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
                <button class="bg-orange-500 m-1 px-5 py-5 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-orange-500')"></button>
            </div>
        </div>

        <div class="flex justify-end w-full my-4">
            <button class="bg-red-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" @click="showTemplate($event)" v-ripple>{{ deleteLabel }}</button>
            <button class="bg-gray-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple v-if="mobile" @click="closeModal">{{ closeLabel }}</button>
            <button class="bg-blue-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple @click="saveChanges">{{ saveLabel }}</button>
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
import { updatePassword, deletePassword } from "../services/passwords-service";

export default {
    name: 'password-panel',
    props: {
        language: String,
        selectedPassword: Object,
        mobile: Boolean,
    },
    emits: [ 'closeModal', 'passwordUpdated' ],
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
        this.setPropsToData(this.selectedPassword)
    },
    data: function() {
        return {
            id: 0,
            titleEdit: '',
            username: '',
            name: '',
            url: '',
            secret: '',
            notes: '',
            color: 'bg-gray-500',
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
            namePlaceholder: 'no',
            urlPlaceholder: 'no',
            passwordPlaceholder: 'no',
            passwordUpdatedTitle: 'no',
            passwordAddedTitle: 'no',
            passwordFailedTitle: 'no',
            passwordFailedMessage: 'no',
            passwordDeletedTitle: 'no',
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
      this.namePlaceholder = getWord(this.selectedLang, "namePlaceholder");
      this.passwordPlaceholder = getWord(this.selectedLang, "passwordPlaceholder");
      this.urlPlaceholder = getWord(this.selectedLang, "urlPlaceholder");
      this.passwordUpdatedTitle = getWord(this.selectedLang, "passwordUpdatedTitle");
      this.passwordAddedTitle = getWord(this.selectedLang, "passwordAddedTitle");
      this.passwordFailedTitle = getWord(this.selectedLang, "passwordFailedTitle");
      this.passwordDeletedTitle = getWord(this.selectedLang, "passwordDeletedTitle");
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
    copyClipboardUsername() {
        navigator.clipboard.writeText(this.username);
    },
    focusNotes() {
        this.$refs.notes.focus();
    },
    previsualizeColor(color) {
        this.color = color;
    },
    closeModal() {
        this.$emit('closeModal', false);
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
            accept: async () => {
                let response = await deletePassword(this.id);
                if (response.status === 0) {
                    this.$toast.add({severity:'success', summary: this.passwordDeletedTitle, life: 3000});
                } else {
                    this.$toast.add({severity:'warn', summary: this.passwordFailedTitle, detail: this.passwordFailedMessage, life: 3000});
                }
                this.$emit('passwordUpdated', 'deleted')
            },
            reject: () => {
                console.log('NO SE PUDO ELIMINAR PASSWORD')
            }
        });
    },
    setPropsToData(password) {
        this.username = password.user;
        this.name = password.name;
        this.url = password.url;
        this.secret = password.secret;
        this.notes = password.notes;
        this.color = password.color;
        this.id = password.id;
    },
    putValueURL() {
        this.url = this.$refs.url.value;
    },
    async saveChanges() {
        let response = await updatePassword(this.id, this.name, this.url, this.username, this.secret, this.notes, this.color);
        if (response.status === 0) {
            this.$toast.add({severity:'success', summary: this.passwordUpdatedTitle, life: 3000});
        } else {
            this.$toast.add({severity:'warn', summary: this.passwordFailedTitle, detail: this.passwordFailedMessage, life: 3000});
        }

        this.$emit('passwordUpdated', 'update')
    },
  },
  watch: {
    language(newValue) {
      this.selectedLang = newValue;
      this.setLanguage()
    },
    selectedPassword(newValue) {
        this.setPropsToData(newValue);
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
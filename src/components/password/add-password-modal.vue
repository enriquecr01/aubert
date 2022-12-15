<template>
    <div class="w-full flex items-center justify-center h-screen">
        <div class="relative w-full h-full max-w-2xl">
            <!-- Modal content -->
            <div class="relative bg-gray-700 rounded-lg shadow">
                <!-- Modal body -->
                <div class="pb-1 space-y-6">
                    <div :class="`flex items-center gap-4 p-4 rounded ${ color.replace('500', '800') } text-gray-50`">
                        <img class="rounded-md" :src="`https://logo.clearbit.com/${ url === '' ? 'clearbit.com' : url }?size=100`">
                        <div class="flex flex-col">
                            <strong class="text-3xl font-medium">{{ titleEdit }}</strong>
                            <span class="text-3xl">{{ name }}</span>
                        </div>
                    </div>
                    <div class="px-10">
                        <div class="w-full my-4">
                            <label class="text-md font-medium text-gray-50"> {{ nameLabel }} </label> 
                            <input :class="`w-full bg-gray-600 text-gray-50 mt-1 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" :placeholder="namePlaceholder" v-model="name">
                        </div>

                        <div class="w-full my-4">
                            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full`"> <i class=" pi pi-external-link p-button-icon"></i> </button>
                            <label class="text-md font-medium text-gray-50">URL </label> 
                            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" :placeholder="urlPlaceholder" ref="url" v-on:blur="putValueURL()">
                        </div>

                        <div class="w-full my-4">
                            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full`"> <i class=" pi pi-user p-button-icon"></i> </button>
                            <label class="text-md font-medium text-gray-50">{{ usernameLabel }}</label>
                            <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" type="text" placeholder="example@gmail.com" v-model="username">
                        </div>

                        <div class="w-full my-4">
                            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full`"> <i class=" pi pi-key p-button-icon"></i> </button>
                            <label class="text-md font-medium text-gray-50">{{ passwordLabel }}</label>

                            <div class="flex justify-end items-center relative">
                                <input :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 pr-14 border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :type="typeTextPassword" :placeholder="passwordPlaceholder" v-model="secret">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-9" @click="passwordVisible">
                                    <i :class="`pi ${visiblePasswordIcon} p-button-icon absolute text-gray-50`" v-tooltip.top="{ value: visiblePasswordIcon === 'pi-eye' ? showPassword : hidePassword, class: 'custom-error' }"></i>
                                </div>
                            </div>
                                        
                        </div>

                        <div class="w-full my-4">
                            <button :class="`${ color } text-white mr-3 mb-1 px-3 py-2 rounded-full`"> <i class=" pi pi-book p-button-icon"></i> </button>
                            <label class="text-md font-medium text-gray-50">{{ notesLabel }}</label>
                            <textarea rows="4" :class="`w-full bg-gray-600 text-gray-50 px-3 py-2 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${color.replace('bg', 'ring')} ease-linear transition-all duration-150`" :placeholder="notesPlaceholder" v-model="notes"></textarea>
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
                            <button class="bg-gray-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple @click="closeModal">{{ closeLabel }}</button>
                            <button class="bg-blue-600 text-gray-50 m-1 px-3 py-2 rounded p-ripple" v-ripple @click="savePassword">{{ saveLabel }}</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { getWord } from "../../languages.js";


export default {
    name: 'AddPasswordModal',
    emits: [ 'closeModalAdd' ],
    props: {
        language: String
    },
    components: {
    },
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data: function() {
        return {
            username: '',
            name: '',
            url: '',
            secret: '',
            notes: '',
            visiblePasswordIcon: 'pi-eye',
            typeTextPassword: 'password',
            color: 'bg-gray-500',
            titleEdit: 'no',
            showPassword: 'no',
            hidePassword: 'no',
            notesPlaceholder: 'no',
            usernameLabel: 'no',
            passwordLabel: 'no',
            notesLabel: 'no',
            pickColorLabel: 'no',
            closeLabel: 'no',
            saveLabel: 'no',
            confirmDelete: 'no',
            nameLabel: 'no',
            urlPlaceholder: 'no',
            namePlaceholder: 'no',
            passwordPlaceholder: 'no',
        }
    },
  methods: {
        setLanguage() {
            this.titleEdit = getWord(this.selectedLang, "titleEdit");
            this.showPassword = getWord(this.selectedLang, "showPassword");
            this.hidePassword = getWord(this.selectedLang, "hidePassword");
            this.notesPlaceholder = getWord(this.selectedLang, "notesPlaceholder");
            this.usernameLabel = getWord(this.selectedLang, "usernameLabel");
            this.passwordLabel = getWord(this.selectedLang, "passwordLabel");
            this.notesLabel = getWord(this.selectedLang, "notesLabel");
            this.pickColorLabel = getWord(this.selectedLang, "pickColorLabel");
            this.closeLabel = getWord(this.selectedLang, "closeLabel");
            this.saveLabel = getWord(this.selectedLang, "saveLabel");
            this.nameLabel = getWord(this.selectedLang, "nameLabel");
            this.urlPlaceholder = getWord(this.selectedLang, "urlPlaceholder");
            this.namePlaceholder = getWord(this.selectedLang, "namePlaceholder");
            this.passwordPlaceholder = getWord(this.selectedLang, "passwordPlaceholder");

        },
        previsualizeColor(color) {
            this.color = color;
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
        savePassword() {
            console.log(this.name, this.url, this.username, this.secret, this.notes, this.color)
        },
        putValueURL() {
            this.url = this.$refs.url.value;
        },
        closeModal() {
            this.$emit('closeModalAdd', false)
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
</style>
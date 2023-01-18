<template>
    <section class="bg-gray-600">
        <MenuBar :language="language" />
        <div class="px-6 text-gray-50 bg-gray-700 h-90vh">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center h-90vh flex-wrap g-6">

            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-6">
                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-3xl text-center font-semibold mx-4 mb-0">{{ registerTitleLabel }}</p>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">{{ registerInstructionsLabel }}</p>
                </div>

                <!-- <Message severity="error" v-if="errorLogin" :closable="false" :life="3000">Bad credentials. Try again please.</Message> -->

                <div class="mb-6">
                    <input class="`form-control block w-full bg-gray-800 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="text" :placeholder="fullNameRegisterLabel" v-model="fullName">
                </div>

                <div class="mb-6">
                    <input class="`form-control block w-full bg-gray-800 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="text" :placeholder="emailAddressLabel" v-model="fullName">
                </div>

                <div class="mb-6">
                    <input class="`form-control block w-full bg-gray-800 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="password" :placeholder="passwordLabel" v-model="fullName">
                </div>

                <div class="text-center lg:text-left">

                    <button class="bg-blue-600 text-white font-medium m-1 px-7 py-3 rounded shadow-md p-ripple hover:bg-blue-800 transition duration-200 ease-in-out" v-ripple>{{registerLabel}}</button>

                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                        {{loginFromRegisterLabel}}
                    <a  href="#!" class="text-yellow-300 hover:text-yellow-500 focus:text-yellow-600 transition duration-200 ease-in-out">{{loginLabel}}</a>
                    </p>
                </div>
            </div>

            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full" />
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import MenuBar from '../components/landing-login/menu-bar.vue';
import { getWord } from "../languages.js";

export default {
    name: "Register",
    components: {
        MenuBar
    },
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data() {
        return {
            language: localStorage.getItem("language") ? localStorage.getItem("language") : 'MX',
            registerTitleLabel: "no",
            fullNameRegisterLabel: "no",
            registerInstructionsLabel: "no",
            emailAddressLabel: 'no',
            passwordLabel: 'no',
            registerLabel: 'no',
            loginFromRegisterLabel: 'no',
            loginLabel: 'no',
            fullName: ''
        }
    },
    methods: {
        setLanguage() {
            this.registerTitleLabel = getWord(this.selectedLang, "registerTitleLabel");
            this.fullNameRegisterLabel = getWord(this.selectedLang, "fullNameRegisterLabel");
            this.registerInstructionsLabel = getWord(this.selectedLang, "registerInstructionsLabel");
            this.emailAddressLabel = getWord(this.selectedLang, "emailAddressLabel");
            this.passwordLabel = getWord(this.selectedLang, "passwordLabel");
            this.registerLabel = getWord(this.selectedLang, "registerLabel");
            this.loginFromRegisterLabel = getWord(this.selectedLang, "loginFromRegisterLabel");
            this.loginLabel = getWord(this.selectedLang, "loginLabel");
        },
    },
    watch: {
        language(newValue) {
            this.selectedLang = newValue;
            this.setLanguage()
        },
    }
    
}
</script>

<style>

</style>
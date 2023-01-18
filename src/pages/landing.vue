<template>

    <MenuBar :language="language" />

    <section class="text-gray-400 bg-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-90vh">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {{ titleLandingHeader }}
          </h1>
          <p class="leading-relaxed mb-8">
            {{ descriptionLandingLabel }}
          </p>
          <div class="flex justify-center">
            <router-link to="/login">
                <button class="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg hover:shadow-2xl transition duration-200 ease-in-out">
                  {{ loginLabel }}
                </button>
            </router-link>
            <button class="ml-4 inline-flex text-gray-50 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg hover:shadow-2xl transition duration-200 ease-in-out">
              {{ registerLabel }}
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import MenuBar from '../components/landing-login/menu-bar.vue';
import { getWord } from "../languages.js";

export default {
    name: "landing",
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
            titleLandingHeader: 'no',
            descriptionLandingLabel: 'no',
            loginLabel: '',
            registerLabel: '',
        }
    },
    methods: {
        setLanguage() {
            this.titleLandingHeader = getWord(this.selectedLang, "titleLandingHeader");
            this.descriptionLandingLabel = getWord(this.selectedLang, "descriptionLandingLabel");
            this.loginLabel = getWord(this.selectedLang, "loginLabel");
            this.registerLabel = getWord(this.selectedLang, "registerLabel");
            
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
    .h-90vh{
        height: 90vh;
    }
</style>
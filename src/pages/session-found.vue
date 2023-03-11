<template>

    <section class="text-gray-400 bg-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-screen">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" v-if="!buttonNoPressed" />
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://www.wallpapertip.com/wmimgs/67-672715_tan.jpg" v-if="buttonNoPressed" />
            <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-white" v-if="!buttonNoPressed">{{ sessionFoundTitleLabel }}</h1>
            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-white" v-if="buttonNoPressed">{{ sessionFoundTitleNoButtonLabel }}</h1>
            <div :class="buttonsDivClass">
                <button class="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg hover:shadow-2xl transition duration-200 ease-in-out" @click="invalidateSession">
                    {{ yesLabel }}
                </button>
                <button class="ml-4 inline-flex text-gray-50 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg hover:shadow-2xl transition duration-200 ease-in-out" @click="clickNo">
                    {{ noLabel }}
                </button>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getWord } from "../languages.js";

export default {
    title () {
        return getWord(localStorage.getItem("language"), "sessionFoundTitle") + " | Aubert";
    },
    name: "SessionFound",
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data() {
        return {
            buttonsDivClass: "flex justify-center",
            buttonNoPressed: false,
            language: localStorage.getItem("language") ? localStorage.getItem("language") : 'MX',
            yesLabel: 'no',
            noLabel: 'no',
            sessionFoundTitleLabel: 'no',
            sessionFoundTitleNoButtonLabel: "",
        }
    },
    methods: {
        setLanguage() {
            this.yesLabel = getWord(this.selectedLang, "yesLabel");
            this.noLabel = getWord(this.selectedLang, "noLabel");
            this.sessionFoundTitleLabel = getWord(this.selectedLang, "sessionFoundTitleLabel");
            this.sessionFoundTitleNoButtonLabel = getWord(this.selectedLang, "sessionFoundTitleNoButtonLabel");
            
        },
        invalidateSession() {
            localStorage.removeItem('id');
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.removeItem('token');
            this.$router.push('/login');
        },
        clickNo() {
            this.buttonsDivClass = "hidden";
            this.buttonNoPressed = true;
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
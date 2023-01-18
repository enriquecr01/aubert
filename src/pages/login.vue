<template>
<section class="bg-gray-600">
  <MenuBar :language="language" />
  <div class="px-6 text-gray-50 bg-gray-600 h-90vh">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center h-90vh flex-wrap g-6"
    >

      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-6">
          <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p class="text-center font-semibold mx-4 mb-0">{{ signInLabel }}</p>
          </div>

          <Message severity="error" v-if="errorLogin" :closable="false" :life="3000">Bad credentials. Try again please.</Message>

          <div class="mb-6">
            <input class="`form-control block w-full bg-gray-700 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="text" :placeholder="emailAddressLabel" v-model="email">
          </div>

          <div class="mb-6">
            <input class="`form-control block w-full bg-gray-700 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="password" :placeholder="passwordLabel" v-model="password">
          </div>

          <!-- <div class="flex justify-between items-center mb-6">
            <a href="#!" class="text-gray-50">Forgot password?</a>
          </div> -->

          <div class="text-center lg:text-left">

            <button class="bg-blue-600 text-white font-medium m-1 px-7 py-3 rounded shadow-md p-ripple" v-ripple @click="attemptLogin">{{loginLabel}}</button>

            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              {{noAccountLabel}}
              <a
                href="#!"
                class="text-yellow-300 hover:text-yellow-500 focus:text-yellow-600 transition duration-200 ease-in-out"
                >{{registerLabel}}</a>
            </p>
          </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import MenuBar from '../components/landing-login/menu-bar.vue';
import { login } from '../services/user-service';
import { getWord } from "../languages.js";


export default {

  components: {
    MenuBar
  },
  mounted() {
    this.selectedLang = localStorage.getItem("language");
    this.setLanguage();
  },
  data() {
    return {
      email: '',
      password: '',
      errorLogin: false,
      language: localStorage.getItem("language") ? localStorage.getItem("language") : 'MX',
      signInLabel: 'no',
      passwordLabel: 'no',
      emailAddressLabel: '',
      loginLabel: '',
      noAccountLabel: '',
      registerLabel: '',
    }
  },
  methods: {
    setLanguage() {
      this.signInLabel = getWord(this.selectedLang, "signInLabel");
      this.passwordLabel = getWord(this.selectedLang, "passwordLabel");
      this.emailAddressLabel = getWord(this.selectedLang, "emailAddressLabel");
      this.loginLabel = getWord(this.selectedLang, "loginLabel");
      this.noAccountLabel = getWord(this.selectedLang, "noAccountLabel");
      this.registerLabel = getWord(this.selectedLang, "registerLabel");
    },
    async attemptLogin() {
      let response = {};
      response = await login(this.email, this.password);

      if (response.errorStatus) {
        this.errorLogin = true;
      } else {
        localStorage.setItem('id', response.user.ID);
        localStorage.setItem('email', response.user.email);
        localStorage.setItem('name', response.user.name);
        localStorage.setItem('token', response.token);
        this.$router.push('/password');
      }

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

<style scoped>
    .h-90vh{
        height: 90vh;
    }
</style>
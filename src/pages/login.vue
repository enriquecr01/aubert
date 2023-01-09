<template>
<section class="bg-gray-600">
  <MenuBar />
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
            <p class="text-center font-semibold mx-4 mb-0">Sign in with your mail and your master key</p>
          </div>

          <!-- Email input -->
          <div class="mb-6">
            <input class="`form-control block w-full bg-gray-700 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="text" placeholder="Email Address" v-model="email">
          </div>

          <!-- Password input -->
          <div class="mb-6">
            <input class="`form-control block w-full bg-gray-700 text-gray-50 mt-1 px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150`" type="password" placeholder="Password" v-model="password">
          </div>

          <!-- <div class="flex justify-between items-center mb-6">
            <a href="#!" class="text-gray-50">Forgot password?</a>
          </div> -->

          <div class="text-center lg:text-left">

            <button class="bg-blue-600 text-white font-medium m-1 px-7 py-3 rounded shadow-md p-ripple" v-ripple @click="attemptLogin">Login</button>

            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-yellow-300 hover:text-yellow-500 focus:text-yellow-600 transition duration-200 ease-in-out"
                >Register</a>
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

export default {

  components: {
    MenuBar
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async attemptLogin() {
      console.log(this.email, this.password)
      let response = await login(this.email, this.password)
      console.log(response)
      localStorage.setItem('email', response.email)
      localStorage.setItem('id', response.ID)
      localStorage.setItem('name', response.name)
    }
  }

}
</script>

<style scoped>
    .h-90vh{
        height: 90vh;
    }
</style>
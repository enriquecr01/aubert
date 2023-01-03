<template>

  <div class="w-full left-0 top-0 w-full h-10vh flex bg-gray-900">
    <div class="container flex items-center m-auto justify-between px-4">
      <div class="flex items-center text-gray-200">
        <span class="text-lg font-medium">Aubert</span>
      </div>

      <div class="flex items-center space-x-4">
        <button class="menu-btn">
          <span class="text-gray-200 hover:text-yellow-500 focus:text-yellow-600">
            Register
          </span>
        </button>
        <button class="menu-btn">
          <span class="text-gray-200 hover:text-yellow-500 focus:text-yellow-600">
            Login
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MenuBar'

}
</script>

<style>
    .h-10vh{
        height: 10vh;
    }
</style>
<template>
        <div :class="`flex flex-col w-full ${color.replace('bg', 'border')} h-screen md:h-screen lg:max-h-80 rounded-lg shadow-lg ${color} hover:${color.replace('800','700')} ease-linear transition-all duration-150`">
          <div class="py-3 px-3">
            <h5 class="font-medium text-gray-50">{{ title }}</h5>
          </div>
          <main class="p-3 mb-auto text-gray-200">
            {{ note }}
          </main>
          <div class="p-3 text-gray-100">
            <button class="text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple" v-ripple>
              <i class="pi pi-palette p-button-icon"></i>
            </button>
          </div>
        </div>

</template>
    
<script>
    export default {
        name: "NoteCardExpand",
        emits: [ "closeModal" ],
        props: {
            title: String,
            note: String,
            color: String,
        },
        methods: {
            
        }
    };
</script>
    
<style>
</style>
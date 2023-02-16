<template>
  <v-idle @idle="saveNote" :duration="5" />

        <div :class="`flex flex-col w-full ${colorNote.replace('bg', 'border')} h-screen md:h-screen lg:max-h-96 rounded-lg shadow-lg ${colorNote} hover:${colorNote.replace('800','700')} ease-linear transition-all duration-150`">
          <div class="py-3 px-3">
            <input :class="`w-full bg-transparent font-medium text-gray-50 px-3 py-2 pr-14 border border-transparent rounded focus:outline-none focus:border-transparent focus:ring-2 focus:${colorNote.replace('bg', 'ring')} ease-linear transition-all duration-150`" v-model="titleNote">
          </div>
          <main class="p-3 mb-auto text-gray-200">
            <QuillEditor theme="bubble" :content="content" contentType="html" placeholder="..." @update:content="onWrite" />
          </main>

          <div :class="classDivColors">
            <button class="bg-zinc-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-zinc-800')"></button>
            <button class="bg-yellow-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-yellow-800')"></button>
            <button class="bg-green-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-green-800')"></button>
            <button class="bg-blue-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-blue-800')"></button>
            <button class="bg-purple-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-purple-800')"></button>
            <button class="bg-pink-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-pink-800')"></button>
            <button class="bg-indigo-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-indigo-800')"></button>
            <button class="bg-red-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-red-800')"></button>
            <button class="bg-orange-800 m-1 px-5 py-5 border border-gray-500 rounded-full p-ripple" v-ripple @click="previsualizeColor('bg-orange-800')"></button>
          </div>

          <div class="p-3 text-gray-100">
            <button class="text-white mr-3 mb-1 px-3 py-2 rounded-full float-left p-ripple" v-ripple @click="appearDivColors">
              <i class="pi pi-palette p-button-icon"></i>
            </button>

            <button class="text-white mr-3 mb-1 px-3 py-2 rounded float-right p-ripple" v-ripple @click="closeNote">
              {{ closeLabel }}
            </button>
          </div>
        </div>

</template>
    
<script>
import { getWord } from '../../languages';

  export default {
    name: "NoteCardExpand",
    emits: [ "closeNote" ],
    props: {
      ID: Number,
      title: String,
      note: String,
      color: String,
      language: String,
    },
    components: {
    },
    mounted() {
      this.selectedLang = localStorage.getItem("language");
      this.content = this.note;

      this.setLanguage();
      this.colorsDivDefault();
    },
    data() {
        return {
          content: "",
          titleNote: "",
          colorNote: "",
          selectedLang: "MX",
          closeLabel: "",
          classDivColors: "",
        }
    },
    methods: {
      onWrite(event) {
        this.content = event;
      },
      saveNote() {
        console.log("voy a guardar esta madre", this.content);
      },
      closeNote() {
        this.$emit("closeNote", true);
      },
      setLanguage() {
        this.closeLabel = getWord(this.selectedLang, "closeLabel");
      },
      appearDivColors() {
        if (this.classDivColors === `${this.colorNote.replace('800', '900')} hidden rounded`) {
          this.classDivColors = `${this.colorNote.replace('800', '900')} flex overflow-x-auto rounded`;
        } else {
          this.classDivColors = `${this.colorNote.replace('800', '900')} hidden rounded`;
        }
      },
      colorsDivDefault() {
        this.classDivColors = `${this.colorNote.replace('800', '900')} hidden rounded`;        
      },
      previsualizeColor(color) {
        this.colorNote = color;
        this.classDivColors = `${this.colorNote.replace('800', '900')} flex overflow-x-auto rounded`;
      }
    },
    watch: {
      ID() {
        this.colorsDivDefault();
      },
      note(newValue) {
        this.content = newValue;
      },
      title(newValue) {
        this.titleNote = newValue;
      },
      color(newValue) {
        this.colorNote = newValue;
        this.classDivColors = `${this.colorNote.replace('800', '900')} hidden rounded`;        
      },
      language(newValue) {
        this.selectedLang = newValue;
        this.setLanguage();
      },
    },
  };
</script>
    
<style>

  .ql-editor.ql-blank::before {
    color: rgba(249, 250, 251, 0.5) !important;
  }

  main::-webkit-scrollbar {
      width: 0px;
      background: transparent;
  }

  /* main::-webkit-scrollbar {
    width: .5em;
  }
      
  main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
      
  main::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgba(17, 24, 39, 1);
  } */
/* 
    .ql-container, .ql-editor{
  height: auto;
} */

  /* .ql-editor::-webkit-scrollbar {
      width: 0px;
      background: transparent;
  } */

  .ql-editor::-webkit-scrollbar {
    width: .5em;
  }
      
  .ql-editor::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
      
  .ql-editor::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgba(17, 24, 39, 1);
  }

  @media (min-width: 1024px) {
    .ql-bubble {
      max-height: 170px !important;
    }
  }

@media (max-width: 1024px) {
  .ql-bubble {
    max-height: 550px;
  }
}



</style>
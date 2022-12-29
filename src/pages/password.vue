<template>
    <div :class="controlColumnsGrid">
        <div class="bg-gray-700 shadow-white h-96vh rounded" style="overflow-y:scroll;">
            <div class="bg-gray-600 p-4">
                <input class="w-4/5 bg-gray-700 mr-2 text-gray-50 px-3 py-2 border border-gray-700  border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150" type="text" placeholder="Buscar contraseña" >
                <button class="w-1/6 bg-blue-700 text-white px-3 py-2 rounded border border-blue-700 p-ripple" v-ripple @click="openModalAdd"> <i class=" pi pi-plus p-button-icon"></i> </button>
            </div>

            <Password v-for="(pass, index) in passwords" :key="index" :lang="language" :url="pass.url" :name="pass.name" :user="pass.user" :color="pass.color" :secret="pass.secret" @showPassword="putPassword" />
        </div>
        <div :class="[Object.keys(selectedPassword).length === 0 ? classInstructions : classSelected]" style="overflow-y:scroll;">
            <h3 v-if="Object.keys(selectedPassword).length === 0"> {{ instructions }} </h3>
            <div v-if="(Object.keys(selectedPassword).length > 0) && !mobile">
                <PasswordPanel :language="language" :selectedPassword="selectedPassword" :mobile="mobile" @closeModal="showModal = false" />
            </div>
        </div>
    </div>


    <vue-final-modal v-model="showModal" class="overflow-y-auto">
        <div class="w-full flex items-center justify-center h-screen">
            <div class="relative w-full h-full max-w-2xl">
                <!-- Modal content -->
                <div class="relative bg-gray-700 rounded-lg shadow">
                    <!-- Modal body -->
                    <div class="pb-1 space-y-6" v-if="Object.keys(selectedPassword).length > 0">
                        <PasswordPanel :language="language" :selectedPassword="selectedPassword" :mobile="mobile" @closeModal="showModal = false" />
                    </div>
                </div>
            </div>
        </div>

    </vue-final-modal>

    <vue-final-modal v-model="showModalAdd" class="overflow-y-auto">
        <AddPasswordModal :language="language" @closeModalAdd="closeModalAdd" />
    </vue-final-modal>


</template>

<script>
import Password from '../components/password/password-card.vue';
import PasswordPanel from '../components/password-panel.vue';
import { getWord } from "../languages.js";
import AddPasswordModal from '../components/password/add-password-modal.vue';
import { getPasswords } from "../services/passwords-service";

import { VueFinalModal } from 'vue-final-modal'


export default {
    props: {
        language: String
    },
    components: {
        Password,
        PasswordPanel,
        VueFinalModal,
        AddPasswordModal
    },
    async mounted() {
        let passwordsApi = await getPasswords()
        this.passwords = passwordsApi
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
        window.addEventListener("resize", this.resizedWindow);
        this.setClassesOnResize(window.innerWidth);
    },
    unmounted() {
        window.removeEventListener("resize", this.resizedWindow);
    },
    data: function() {
        return {
            controlColumnsGrid: "grid grid-cols-2 gap-4 h-96vh",
            instructions: 'xd',
            selectedPassword: {},
            classSelected: 'bg-gray-700 h-96vh rounded',
            classInstructions: 'grid h-screen place-items-center bg-gray-700 h-96vh rounded',
            showModal: false,
            mobile: false,
            showModalAdd: false,
            passwords: [
                {
                    url: "spotify.com", 
                    name: "Spotify",
                    user: "turchu@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "riot-games.com" ,
                    name: "Riot Games" ,
                    user: "ejemplo@live.com",
                    color: "bg-green-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "coppel.com",
                    name: "Coppel",
                    user: "libni@live.com",
                    color: "bg-blue-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "elrellano.com",
                    name: "El Rellano",
                    user: "chistoso@live.com",
                    color: "bg-purple-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "nintendo.com",
                    name: "Nintentdo",
                    user: "mario@live.com",
                    color: "bg-pink-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "twitter.com",
                    name: "Twitter",
                    user: "@pendejotron1235",
                    color: "bg-indigo-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "instax.com",
                    name: "Instax",
                    user: "camaras@live.com",
                    color: "bg-red-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "spotify.com", 
                    name: "Spotify",
                    user: "turchu@live.com",
                    color: "bg-gray-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "riot-games.com" ,
                    name: "Riot Games" ,
                    user: "ejemplo@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "coppel.com",
                    name: "Coppel",
                    user: "libni@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "elrellano.com",
                    name: "El Rellano",
                    user: "chistoso@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "nintendo.com",
                    name: "Nintentdo",
                    user: "mario@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "twitter.com",
                    name: "Twitter",
                    user: "@pendejotron1235",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "instax.com",
                    name: "Instax",
                    user: "camaras@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "spotify.com", 
                    name: "Spotify",
                    user: "turchu@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "riot-games.com" ,
                    name: "Riot Games" ,
                    user: "ejemplo@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "coppel.com",
                    name: "Coppel",
                    user: "libni@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "elrellano.com",
                    name: "El Rellano",
                    user: "chistoso@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "nintendo.com",
                    name: "Nintentdo",
                    user: "mario@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "twitter.com",
                    name: "Twitter",
                    user: "@pendejotron1235",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                },
                {
                    url: "instax.com",
                    name: "Instax",
                    user: "camaras@live.com",
                    color: "bg-yellow-500",
                    secret: "bg-yellow-500",
                }
            ]
        };
    },
  methods: {
    putPassword(pass) {
        this.selectedPassword = pass;
        if (this.mobile) {
            this.showModal = true
        }
    },
    setLanguage() {
      this.instructions = getWord(this.selectedLang, "instructions");
      this.titleEdit= getWord(this.selectedLang, "titleEdit");
    },
    resizedWindow(e) {
        // This is for make reactive columns
        this.setClassesOnResize(e.target.outerWidth);
    },
    setClassesOnResize(width) {
        if (width < 1024) {
            this.controlColumnsGrid = 'grid grid-cols-1 gap-4 h-96vh';
            this.classInstructions = 'grid h-screen place-items-center bg-gray-700 h-96vh rounded hidden';
            this.classSelected = 'bg-gray-700 h-96vh rounded hidden';
            this.mobile = true;
        } else {
            this.controlColumnsGrid = 'grid grid-cols-2 gap-4 h-96vh';
            this.classInstructions = 'grid h-screen place-items-center bg-gray-700 h-96vh rounded';
            this.classSelected = 'bg-gray-700 h-96vh rounded';
            this.mobile = false;
        }
    },
    openModalAdd() {
        this.showModalAdd = true;
    },
    closeModalAdd() {
        this.showModalAdd = false;
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

<style scoped>
    div::-webkit-scrollbar {
        width: .5em;
    }
    
    div::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    
    div::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: rgba(17, 24, 39, 1);
    }

    .shadow-white {
        box-shadow: 0 25px 50px -12px rgba(252, 251, 251, 0.25);
    }

    .h-96vh{
        height: 96vh;
    }


</style>
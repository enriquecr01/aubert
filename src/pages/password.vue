<template>
    <div :class="controlColumnsGrid">
        <div class="bg-gray-700 shadow-white h-96vh rounded" style="overflow-y:scroll;">
            <Password v-for="(pass, index) in passwords" :key="index" :lang="language" :url="pass.url" :name="pass.name" :user="pass.user" :color="pass.color" :secret="pass.secret" @showPassword="putPassword" />
        </div>
        <div :class="[Object.keys(selectedPassword).length === 0 ? classInstructions : classSelected]">
            <h3 v-if="Object.keys(selectedPassword).length === 0"> {{ instructions }} </h3>
            <div v-if="Object.keys(selectedPassword).length > 0">
                <PasswordPanel :language="language" :selectedPassword="selectedPassword" @previsualizeColor="updateSelectedPasswordColor" />
            </div>
        </div>
    </div>

</template>

<script>
import Password from '../components/password-card.vue';
import PasswordPanel from '../components/password-panel.vue';
import { getWord } from "../languages.js";


export default {
    props: {
        language: String
    },
    components: {
        Password,
        PasswordPanel
    },
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data: function() {
    return {
        controlColumnsGrid: "grid grid-cols-2 gap-4 h-96vh",
        instructions: 'xd',
        selectedPassword: {},
        classSelected: 'bg-gray-700 h-96vh rounded',
        classInstructions: 'grid h-screen place-items-center bg-gray-700 h-96vh rounded',
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
    },
    setLanguage() {
      this.instructions = getWord(this.selectedLang, "instructions");
      this.titleEdit= getWord(this.selectedLang, "titleEdit");
    },
    updateSelectedPasswordColor(data) {
        this.selectedPassword.color = data
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
<template>
    <div :class="controlColumnsGrid">
        <div class="bg-gray-700 shadow-white h-96vh" style="overflow-y:scroll;">
            <Password v-for="(pass, index) in passwords" :key="index" :lang="language" :url="pass.url" :name="pass.name" :user="pass.user" @showPassword="putPassword" />
        </div>
        <div class="grid h-screen place-items-center bg-gray-700 h-96vh">
            {{ instructions }}
        </div>
    </div>

</template>

<script>
import Password from '../components/password-card.vue';
import { getWord } from "../languages.js";


export default {
    props: {
        language: String
    },
    components: {
        Password
    },
    mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
    },
    data: function() {
    return {
        controlColumnsGrid: "grid grid-cols-2 gap-4 h-96vh",
        instructions: 'xd',
        passwords: [
            {
                url: "spotify.com", 
                name: "Spotify",
                user: "turchu@live.com"
            },
            {
                url: "riot-games.com" ,
                name: "Riot Games" ,
                user: "ejemplo@live.com",
            },
            {
                url: "coppel.com",
                name: "Coppel",
                user: "libni@live.com",
            },
            {
                url: "elrellano.com",
                name: "El Rellano",
                user: "chistoso@live.com",
            },
            {
                url: "nintendo.com",
                name: "Nintentdo",
                user: "mario@live.com",
            },
            {
                url: "twitter.com",
                name: "Twitter",
                user: "@pendejotron1235"
            },
            {
                url: "instax.com",
                name: "Instax",
                user: "camaras@live.com"
            },
            {
                url: "spotify.com", 
                name: "Spotify",
                user: "turchu@live.com"
            },
            {
                url: "riot-games.com" ,
                name: "Riot Games" ,
                user: "ejemplo@live.com",
            },
            {
                url: "coppel.com",
                name: "Coppel",
                user: "libni@live.com",
            },
            {
                url: "elrellano.com",
                name: "El Rellano",
                user: "chistoso@live.com",
            },
            {
                url: "nintendo.com",
                name: "Nintentdo",
                user: "mario@live.com",
            },
            {
                url: "twitter.com",
                name: "Twitter",
                user: "@pendejotron1235"
            },
            {
                url: "instax.com",
                name: "Instax",
                user: "camaras@live.com"
            },
            {
                url: "spotify.com", 
                name: "Spotify",
                user: "turchu@live.com"
            },
            {
                url: "riot-games.com" ,
                name: "Riot Games" ,
                user: "ejemplo@live.com",
            },
            {
                url: "coppel.com",
                name: "Coppel",
                user: "libni@live.com",
            },
            {
                url: "elrellano.com",
                name: "El Rellano",
                user: "chistoso@live.com",
            },
            {
                url: "nintendo.com",
                name: "Nintentdo",
                user: "mario@live.com",
            },
            {
                url: "twitter.com",
                name: "Twitter",
                user: "@pendejotron1235"
            },
            {
                url: "instax.com",
                name: "Instax",
                user: "camaras@live.com"
            }
        ]
    };
  },
  methods: {
    putPassword(xd) {
        console.log(xd)
    },
    setLanguage() {
      this.instructions = getWord(this.selectedLang, "instructions");
    },
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
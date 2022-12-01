<template>
    <div class="grid grid-cols-1 gap-4" style="overflow-y:scroll; height:96vh; display:block;">
        <Password v-for="(pass, index) in passwords" :key="index" :lang="language" :url="pass.url" :name="pass.name" :user="pass.user" />
    </div>

    <!-- <table id="customers" style="overflow-y:scroll; height:100vh; display:block;"> -->
        <!-- <tr v-for="(pass, index) in passwords" :key="index" > -->

            <!-- <th>{{pass.url}}</th>
            <th>{{pass.name}}</th>
            <th>{{pass.user}}</th> -->
        <!-- </tr> -->
<!-- </table> -->

</template>

<script>
import Password from '../components/password-card.vue'

export default {
    props: {
        language: String
    },
    components: {
        Password
    },
    data: function() {
    return {
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
}
</script>

<style scoped>
</style>
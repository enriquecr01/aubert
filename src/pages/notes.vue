
<template>
    <div class="grid grid-cols-auto h-96vh">

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3 bg-gray-700 rounded auto-rows-min" style="overflow-y:scroll;" >
            <NoteCard v-for="(note, index) in notes" :key="index" :ID="note.ID" :title="note.title" :note="note.note" :color="note.color" @expandNote="expandNote" />
                
        </div>
    </div> 

    <vue-final-modal v-model="showModal" :esc-to-close="true" class="overflow-y-auto" classes="flex items-center" content-class="mx-auto lg:w-8/12 md:w-full w-full h-screen md:h-screen lg:max-h-80" >
        
        <!-- <div class="flex items-center justify-center h-screen"> -->

            <NoteExpandedCard :language="language" :ID="selectedNote.ID" :title="selectedNote.title" :note="selectedNote.note" :color="selectedNote.color" @closeNote="showModal=false" />
        <!-- </div> -->


    </vue-final-modal>

</template>

<script>
import NoteCard from '../components/notes/note-card.vue';
import NoteExpandedCard from '../components/notes/note-card-expand.vue';
import { VueFinalModal } from 'vue-final-modal'

export default {
    components: {
        NoteCard,
        VueFinalModal,
        NoteExpandedCard
    },
    props: {
        language: String
    },
    data: function() {
        return {
            showModal: false,
            selectedNote: {
                    ID: 0,
                    title: "",
                    note: "",
                    color: "",
                 },
            notes: [
                {
                    ID: 1,
                    title: "Ejemplo",
                    note: "<h1>Un ejemplazo jajaja siganlo por que es un ejemplo a seguir</h1>",
                    color: "bg-zinc-800",
                },
                {
                    ID: 2,
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-red-800",
                },
                {
                    ID: 3,
                    title: "Ejemplo",
                    note: "Hola nota 1",
                    color: "bg-yellow-800",
                },
                {
                    ID: 4,
                    title: "Ejemplo",
                    note: "Noto una cosa",
                    color: "bg-green-800",
                },
                {
                    ID: 5,
                    title: "Ejemplo",
                    note: "jkjkjkjkjkjkjkjk",
                    color: "bg-blue-800",
                },
                {
                    ID: 6,
                    title: "Ejemplo",
                    note: "qwejieqewqljwejlweqjkejqjlkwqljkewq",
                    color: "bg-purple-800",
                },
                {
                    ID: 7,
                    title: "Ejemplo",
                    note: "dsakjsdlaksjalksad",
                    color: "bg-pink-800",
                },
                {
                    ID: 8,
                    title: "Ejemplo",
                    note: "<h1><strong>Titulo loco</strong></h1><p>Hola a todos soy el anticristo 2007 y les vengo a hablar sobre los homosexuales XDDD</p><h2>Son jotos, no mamen, matenlos</h2>",
                    color: "bg-indigo-800",
                },
                {
                    ID: 9,
                    title: "Ejemplo",
                    note: "Otro texto",
                    color: "bg-orange-800",
                },
            ]
        };
    },
    methods: {
        setLanguage() {
        },
        expandNote(note) {
            // console.log("putos", note, this.selectedNote)
            this.showModal = true;
            this.selectedNote = { ID: note.ID, title: note.title, note: note.note, color: note.color }
            // console.log("putos", note, this.selectedNote)

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
    .h-96vh{
        height: 96vh;
    }

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
</style>

<template>
    <div class="grid grid-cols-auto h-96vh">

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3 bg-gray-700 rounded auto-rows-min" style="overflow-y:scroll;" >
            <NoteCard v-for="(note, index) in notes" :key="index" :title="note.title" :note="note.note" :color="note.color" @expandNote="expandNote" />
                
        </div>
    </div> 

    <vue-final-modal v-model="showModal" :esc-to-close="true" class="overflow-y-auto" classes="flex items-center" content-class="mx-auto lg:w-8/12 md:w-full w-full h-screen md:h-screen lg:max-h-80" >
        
        <!-- <div class="flex items-center justify-center h-screen"> -->

            <NoteExpandedCard :title="selectedNote.title" :note="selectedNote.note" :color="selectedNote.color" @closeNote="showModal=false" />
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
    data: function() {
        return {
            showModal: false,
            selectedNote: {
                    title: "",
                    note: "",
                    color: "",
                 },
            notes: [
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-zinc-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-red-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-yellow-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-green-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-blue-800",
                },                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-purple-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-pink-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-indigo-800",
                },
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-orange-800",
                },
            ]
        };
    },
    methods: {
        expandNote(note) {
            console.log("putos", note, this.selectedNote)
            this.showModal = true;
            this.selectedNote = { title: note.title, note: note.note, color: note.color }
            console.log("putos", note, this.selectedNote)

        }
    }
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
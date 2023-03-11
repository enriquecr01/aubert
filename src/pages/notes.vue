
<template>
    <div class=" h-96vh">
        <div class="bg-gray-700 shadow-white">
            <div class="bg-gray-600 p-4">
                <input class="w-4/5 bg-gray-700 mr-2 text-gray-50 px-3 py-2 border border-gray-700  border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150" type="text" id="searchNotes" :placeholder="searchNotesLabel" ref="searchBar" v-on:keyup="searchNotes" >
                <button class="w-1/6 bg-blue-700 text-white px-3 py-2 rounded border border-blue-700 p-ripple" v-ripple @click="addNote"> <i class=" pi pi-plus p-button-icon"></i> </button>
            </div>
        </div>

        <div class="grid h-88vh lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3 bg-gray-700 rounded auto-rows-min" style="overflow-y:scroll;" >
        
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            <Skeleton height="15rem" v-if="loadNotes"></Skeleton>
            
            <NoteCard v-for="(note, index) in notes" :key="index" :ID="note.ID" :title="note.title" :note="note.note" :color="note.color" :indexNote="index" @expandNote="expandNote" />
        </div>

    </div> 

    <vue-final-modal v-model="showModal" :esc-to-close="true" @closed="clickOutsideModal" class="overflow-y-auto" classes="flex items-center" content-class="mx-auto lg:w-8/12 md:w-full w-full h-screen md:h-screen lg:max-h-80" >
        <NoteExpandedCard :language="language" :ID="selectedNote.ID" :title="selectedNote.title" :note="selectedNote.note" :color="selectedNote.color" :index="selectedNote.index" :clickOutsideModalFlag="clickOutsideModalFlag" @closeNote="closeNote"  />
    </vue-final-modal>

</template>

<script>
import NoteCard from '../components/notes/note-card.vue';
import NoteExpandedCard from '../components/notes/note-card-expand.vue';
import { VueFinalModal } from 'vue-final-modal'
import { getNotes, searchNotes, addNote } from '../services/notes-service'
import { getWord } from "../languages.js";


export default {
    title () {
        return getWord(localStorage.getItem("language"), "notes") + " | Aubert";
    },
    components: {
        NoteCard,
        VueFinalModal,
        NoteExpandedCard
    },
    props: {
        language: String
    },
    async mounted() {
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
        this.notes = await getNotes();
        this.loadNotes = false;
    },
    data: function() {
        return {
            showModal: false,
            searchNotesLabel: 'no',
            selectedNote: {
                ID: 0,
                title: "",
                note: "",
                color: "",
            },
            loadNotes: true,
            clickOutsideModalFlag: false,
            notes: []
        };
    },
    methods: {
        setLanguage() {
            this.searchNotesLabel = getWord(this.selectedLang, "searchNotesLabel");
        },
        expandNote(note) {
            this.showModal = true;
            this.selectedNote = { ID: note.ID, title: note.title, note: note.note, color: note.color, index: note.index }
        },
        async addNote() {
            let newNote = await addNote();
            this.selectedNote = { ID: newNote.ID, title: newNote.title, note: newNote.note, color: newNote.color };
            this.showModal = true;
        },
        updateSingleNote(noteUpdated) {
            this.notes[noteUpdated.index] = noteUpdated;
        },
        async searchNotes() {
            if (this.$refs.searchBar.value === '') {
                this.loadNotes = true;
                this.notes = await getNotes();
                this.loadNotes = false;
            } else {    
                this.loadNotes = true;
                this.notes = await searchNotes(this.$refs.searchBar.value);
                this.loadNotes = false;
            }        
        },
         async closeNote(note) {
            if (note.index) {
                this.notes[note.index] = note;
            } else {
                this.notes = await getNotes(); 
            }
            this.showModal = false;
            this.clickOutsideModalFlag = false;
        },
        clickOutsideModal() {
            this.clickOutsideModalFlag = true;
        }
    },
    watch: {
        language(newValue) {
            this.selectedLang = newValue;
            this.setLanguage();
        },
    },
}
</script>

<style scoped>
    .h-96vh{
        height: 96vh;
    }

    .h-88vh{
        height: 88vh;
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

    .p-skeleton {
        background-color: #1e293b;
    }
    
</style>
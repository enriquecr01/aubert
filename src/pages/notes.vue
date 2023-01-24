
<template>
    <div class="grid grid-cols-auto h-96vh">

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3 bg-gray-700 rounded auto-rows-min" style="overflow-y:scroll;">
            <NoteCard v-for="(note, index) in notes" :key="index" :title="note.title" :note="note.note" :color="note.color" />
                
        </div>
    </div> 
</template>

<script>
import NoteCard from '../components/notes/note-card.vue';

export default {
    components: {
        NoteCard,
    },
    data: function() {
        return {
            notes: [
                {
                    title: "Ejemplo",
                    note: "Un ejemplazo jajaja siganlo por que es un ejemplo a seguir",
                    color: "bg-gray-800",
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
}
</script>

<style scoped>
    .h-96vh{
        height: 96vh;
    }
</style>
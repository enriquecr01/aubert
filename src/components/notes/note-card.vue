<template>
<div :class="`flex flex-col w-full ${color.replace('bg', 'border')} h-screen max-h-60 rounded-lg shadow-lg ${color} hover:${color.replace('800', '700')} ease-linear transition-all duration-150`" @click="expandNote">
    <div class="py-3 px-3">
      <h5 class="font-medium text-gray-50">{{ title }}</h5>
    </div>
    <main class="p-3 mb-auto text-gray-200 line-clamp-6" v-html="note">
    </main>
    <!-- <div class="p-3 text-gray-100">
        <button class="text-white mr-3 mb-1 px-3 py-2 rounded-full p-ripple" v-ripple> <i class="pi pi-palette p-button-icon"></i> </button>
    </div> -->
</div>

</template>

<script>
export default {
    name: "NoteCard",
    emits: [ "expandNote" ],
    props: {
        ID: Number,
        title: String,
        note: String,
        color: String,
    },
    methods: {
        expandNote() {
            this.$emit("expandNote", {  ID: this.ID, title: this.title, note: this.note, color: this.color })
        }
    }
}
</script>

<style>
</style>
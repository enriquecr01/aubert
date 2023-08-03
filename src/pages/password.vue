<template>
    <Toast :breakpoints="{'425px': {width: '100%', right: '0', left: '0'}}" />

    <div :class="controlColumnsGrid">
        <div class="bg-gray-700 shadow-white h-96vh rounded" style="overflow-y:scroll;">
            <div class="bg-gray-600 p-4">
                <input class="w-4/5 bg-gray-700 mr-2 text-gray-50 px-3 py-2 border border-gray-700  border border-gray-700 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 ease-linear transition-all duration-150" type="text" autocomplete="one-time-code" :placeholder="searchPasswordLabel" id="searchPasswordAubert" ref="searchBar" v-on:keyup="searchPasswords" >
                <button class="w-1/6 bg-blue-700 text-white px-3 py-2 rounded border border-blue-700 p-ripple" v-ripple @click="openModalAdd"> <i class=" pi pi-plus p-button-icon"></i> </button>
            </div>

            <div class="custom-skeleton p-4" v-if="loadingPasswords">
                <ul class="m-0 p-0">
                    <li class="mb-3">
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex">
                            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                            <div style="flex: 1">
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Password v-for="(pass, index) in passwords" :key="index" :lang="language" :url="pass.url" :name="pass.name" :user="pass.user" :color="pass.color" :secret="pass.secret" :notes="pass.notes" :id="pass.ID" @showPassword="putPassword" />
        </div>
        <div :class="[Object.keys(selectedPassword).length === 0 ? classInstructions : classSelected]" style="overflow-y:scroll;">
            <h3 v-if="Object.keys(selectedPassword).length === 0"> {{ instructions }} </h3>
            <div v-if="(Object.keys(selectedPassword).length > 0) && !mobile">
                <PasswordPanel :language="language" :selectedPassword="selectedPassword" :mobile="mobile" @closeModal="showModal = false" @passwordUpdated="actionPasswordDone" />
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
                        <PasswordPanel :language="language" :selectedPassword="selectedPassword" :mobile="mobile" @closeModal="showModal = false" @passwordUpdated="actionPasswordDone" />
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
import { getPasswords, searchPasswords } from "../services/passwords-service";

import { VueFinalModal } from 'vue-final-modal'


export default {
    title () {
        return getWord(localStorage.getItem("language"), "passwords") + " | Aubert";
    },
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
        this.selectedLang = localStorage.getItem("language");
        this.setLanguage();
        this.passwords = await getPasswords();
        this.loadingPasswords = false;
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
            searchPasswordLabel: 'no',
            selectedPassword: {},
            classSelected: 'bg-gray-700 h-96vh rounded',
            classInstructions: 'grid h-screen place-items-center bg-gray-700 h-96vh rounded',
            showModal: false,
            mobile: false,
            showModalAdd: false,
            loadingPasswords: true,
            passwordTitleBrowser: "xd",
            passwords: []
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
      this.titleEdit = getWord(this.selectedLang, "titleEdit");
      this.searchPasswordLabel = getWord(this.selectedLang, "searchPasswordLabel");
      this.passwordTitleBrowser = getWord(this.selectedLang, "passwords");
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
    async closeModalAdd(value) {
        this.showModalAdd = false;
        if (value === 1) {
            this.passwords = await getPasswords()
        }
    },
    async searchPasswords() {
        if (this.$refs.searchBar.value === '') {
            this.loadingPasswords = true;
            this.passwords = await getPasswords();
            this.loadingPasswords = false;
        } else {    
            this.loadingPasswords = true;
            this.passwords = await searchPasswords(this.$refs.searchBar.value);
            this.loadingPasswords = false;
        }        
    },
    async actionPasswordDone(value) {
        if (this.mobile) {
            this.showModal = false;
        } 

        if (value === 'deleted') {
            this.selectedPassword = {};
        }

        this.passwords = await getPasswords();
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

    .p-skeleton {
        background-color: #1e293b;
    }

</style>
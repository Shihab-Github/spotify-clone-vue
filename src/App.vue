<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

import MyPlaylist from './components/MyPlaylist.vue'
import Menus from './components/Menus.vue'


let openMenu = ref(false)

</script>

<template>
    <div>
        <div
            class="w-[calc(100%-240px)] right-0 fixed flex items-center justify-between bg-[#101010] h-[60px] z-20 bg-opacity-80">
            <div class="flex items-center ml-6">
                <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
                    <ChevronLeft fillColor="#FFFFFF" :size="30" />
                </button>
                <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
                    <ChevronRight fillColor="#FFFFFF" :size="30" />
                </button>
            </div>
            <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'" class="bg-black 
            hover:bg-[#282828] 
            rounded-full 
            p-0.5
            mr-8
            mt-0.5
            cursor-pointer
            ">
                <div class="flex items-center">
                    <img src="https://yt3.ggpht.com/9WK0qm1LXZgLmgld5PIX1nNIztLsB_NP_Cad_lz8-Y8GvhfECRmpBVAiRCTP64XbEZGoUrA1BQ=s108-c-k-c0x00ffffff-no-rj"
                        alt="IAM" width="27" class="rounded-full">
                    <div class="text-white text-[14px] ml-1.5 mr-1 font-semibold">Raza Shihab Mahbub</div>
                    <ChevronDown v-if="!openMenu" fillColor="#FFFFFF" :size="25" />
                    <ChevronUp v-else fillColor="#FFFFFF" :size="25" />
                </div>
            </button>
            <span v-if="openMenu" class="
                fixed
                w-[190px]
                bg-[#282828]
                shadow-2xl
                z-50
                rounded-sm
                top-12
                right-[35px]
                p-1
                cursor-pointer
            ">
                <ul class="text-gray-200 font-semibold text-[14px]">
                    <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
                    <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
                </ul>
            </span>
        </div>

        <div id="sideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
            <RouterLink to="/">
                <img width="125" src="/images/icons/spotify-logo.png" alt="spotify">
            </RouterLink>
            <div class="my-8"></div>
            <Menus />
            <div class="border-b border-b-gray-700"></div>
            <MyPlaylist />
        </div>
    </div>
    <div class="fixed right-0 top-0 w-[calc(100%-240px)] h-full bg-gradient-to-b from-[#1C1C1C] to-black">
        <div class="mt-[70px]"></div>
        <RouterView />
        <div class="mb-[100px]"></div>
    </div>
</template>



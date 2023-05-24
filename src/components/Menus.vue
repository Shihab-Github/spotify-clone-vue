<script setup>
import MenuItem from './MenuItem.vue';
import { RouterLink } from 'vue-router'

</script>
<template>
    <ul>
        <RouterLink to="/">
            <MenuItem :iconSize="23" name="Home" iconString="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
            <MenuItem :iconSize="23" name="Search" iconString="search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
            <MenuItem :iconSize="23" name="Library" iconString="library" pageUrl="/library" />
        </RouterLink>

        <div class="py-3.5"></div>
        <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
        <MenuItem :iconSize="24" name="Liked Songs" iconString="liked" pageUrl="/liked" />
    </ul>
</template>
<template>
    <v-app class="app">
        <navigation-bar app @click:icon="clickIconHandler" />

        <navigation-drawer app :drawer.sync="drawer" />

        <v-content class="content">
            <v-container fluid grid-list-lg>
                <router-view />
            </v-container>
        </v-content>

        <footer-bar app />
    </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'

export default {
    name: 'App',
    components: {
        NavigationBar,
        NavigationDrawer,
        FooterBar
    },
    data: () => ({
        drawer: false
    }),
    methods: {
        clickIconHandler() {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

.app {
    font-family: 'Quicksand', sans-serif !important;
}

.content {
    margin-top: 50px;
}
</style>

<style lang="scss">
.section {
    margin-bottom: 32px !important;

    &--big {
        margin-bottom: 64px !important;
    }
}

.my-headline,
.my-title {
    font-family: 'Quicksand', sans-serif !important;
}
</style>

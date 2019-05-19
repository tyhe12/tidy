<template>
    <v-toolbar fixed>
        <v-toolbar-side-icon @click="iconClickHandler"></v-toolbar-side-icon>
        <v-toolbar-title class="my-headline headline text-uppercase">
            <router-link class="link-title" tag="span" to="/">
                Keeping it Tidy with Cooley
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <my-link large to="/offerings">
                What I Offer
            </my-link>

            <my-link large to="/reviews">
                What People Say
            </my-link>

            <my-link large to="/faqs">
                FAQs
            </my-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import MyLink from './MyLink.vue'

export default {
    components: {
        MyLink
    },
    methods: {
        iconClickHandler() {
            this.$emit('click:icon')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants';

.link-title {
    cursor: pointer;
}

.link-title:hover {
    color: $primary-color;
}
</style>

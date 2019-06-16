<template>
    <v-toolbar fixed>
        <v-toolbar-side-icon @click="iconClickHandler"></v-toolbar-side-icon>
        <v-toolbar-title class="my-headline headline text-uppercase">
            <router-link class="link-title" tag="span" to="/">
                Cleaning with Cooley
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="link link-btn" flat large to="/about" active-class="">
                Who I Am
            </v-btn>

            <v-btn class="link link-btn" flat large to="/offerings" active-class="">
                My Services
            </v-btn>

            <v-menu open-on-hover bottom right transition="slide-y-transition" nudge-bottom="64">
                <template v-slot:activator="{ on }">
                    <v-btn class="link" flat large v-on="on" active-class="">
                        More
                        <v-icon small class="ml-2">fa-angle-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-tile>
                        <v-btn class="link link-menu" flat large to="/reviews" active-class="">
                            What People Say
                        </v-btn>
                    </v-list-tile>

                    <v-list-tile>
                        <v-btn class="link link-menu" flat large to="/included" active-class="">
                            What is Included
                        </v-btn>
                    </v-list-tile>

                    <v-list-tile>
                        <v-btn class="link link-menu" flat large to="/faqs" active-class="">
                            FAQs
                        </v-btn>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        iconClickHandler() {
            this.$emit('click:icon')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants';

.link:hover {
    &::before {
        background: currentColor;
    }
    color: $primary-color;
}

.link-menu {
    width: 100%;
}

.link-title {
    cursor: pointer;
}

.link-title:hover {
    color: $primary-color;
}
</style>

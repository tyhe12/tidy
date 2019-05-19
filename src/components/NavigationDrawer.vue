<template>
    <v-navigation-drawer v-model="show" fixed temporary>
        <v-list class="pa-1">
            <v-list-tile to="/">
                <v-list-tile-action>
                    <v-icon>fas fa-home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Keeping It Tidy With Cooley
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    {{ item.title }}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
// import MyLink from './MyLink.vue'

export default {
    // components: {
    //     MyLink
    // },
    props: {
        drawer: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            show: this.drawer,
            items: [
                { title: 'What I Offer', icon: 'fas fa-tags', link: '/offerings' },
                { title: 'What People Say', icon: 'fas fa-comments', link: '/reviews' },
                { title: 'FAQs', icon: 'fas fa-question-circle', link: '/faqs' }
            ]
        }
    },
    watch: {
        show(newValue) {
            this.$emit('update:drawer', newValue)
        },
        drawer(newValue) {
            this.show = newValue
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants';

.link {
    cursor: pointer;
}

.link:hover {
    color: $primary-color;
}
</style>

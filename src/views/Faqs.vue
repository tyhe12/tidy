<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12>
            <faq-item title="Some Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Some Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Some Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </faq-item>
        </v-flex>
    </v-layout>
</template>

<script>
import FaqItem from '../components/FaqItem.vue'
import MySpacer from '../components/MySpacer.vue'

export default {
    components: {
        FaqItem,
        MySpacer
    }
}
</script>

<style></style>

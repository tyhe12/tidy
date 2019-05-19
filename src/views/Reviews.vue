<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12 v-for="(review, index) in reviews" :key="index">
            <review-card :rating="review.rating" :title="review.title">
                Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur
                ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit
                laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant
                invenire splendide mel, ea nec propriae adipisci.
            </review-card>
        </v-flex>
    </v-layout>
</template>

<script>
import ReviewCard from '../components/ReviewCard.vue'
import MySpacer from '../components/MySpacer.vue'

export default {
    components: {
        ReviewCard,
        MySpacer
    },
    data: () => ({
        reviews: [
            {
                rating: 5,
                title: 'Review Title 1'
            },
            {
                rating: 4,
                title: 'Review Title 2'
            }
        ]
    })
}
</script>

<style></style>

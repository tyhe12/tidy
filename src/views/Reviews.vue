<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12>
            <review-card :rating="5" title="AWESOME!">
                Tracy is AWESOME. After she comes to my apartment it is impecable. She is very into
                cleaning every little spot you might think nobody is going to clean. Since the
                begging she always went beyond my expectations. Besides her impecable cleaning she
                is also someone kind, respectful and someone I can trust, nothing ever have gone
                missing in mi apartment, so with my eyes closed I will give her the keys to my
                house. Also she is great with pets, she loves coco and treat her with so much
                love!!!
            </review-card>
        </v-flex>

        <v-flex xs12>
            <review-card :rating="5" title="Creative and Professional">
                I've had a lot cleaners, but Tracy is different. She not only cleans perfectly, but
                she does it above and beyond! She is very creative and learns how I like to my
                apartment to be cleaned the more she does it. She understands how I store different
                dog toys, and always comes up with creative ways to organize my kitchen counter! She
                is a very smart but hardworking person!
            </review-card>
        </v-flex>

        <v-flex xs12>
            <review-card :rating="5" title="Great">
                Tracy was great! Really pleased with her service and professionalism!
            </review-card>
        </v-flex>

        <v-flex xs12>
            <review-card :rating="5" title="Thank You!">
                Tracy is the Best! She’s so kind, helpful and does the best job cleaning that I ever
                had. She goes above and beyond. THANK YOU!!!
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
    }
}
</script>

<style></style>

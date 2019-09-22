<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12 class="d-flex justify-end">
            <v-btn
                class="write-review-button"
                color="primary"
                v-scroll-to="{ el: '#review-form', offset: -75 }"
            >
                Write a Review
            </v-btn>
        </v-flex>

        <v-flex xs12 v-for="(review, index) in reviews" :key="index">
            <review-card :rating="review.rating" :title="review.title">
                {{ review.review }}
            </review-card>
        </v-flex>

        <v-flex xs12>
            <review-form id="review-form" @submit="submitHandler"></review-form>
        </v-flex>
    </v-layout>
</template>

<script>
import ReviewCard from '../components/ReviewCard.vue'
import ReviewForm from '../components/ReviewForm.vue'

export default {
    data: () => ({
        reviews: [
            {
                rating: 5,
                title: 'AWESOME!',
                review:
                    'Tracy is AWESOME. After she comes to my apartment it is impecable. She is very into cleaning every little spot you might think nobody is going to clean. Since the begging she always went beyond my expectations. Besides her impecable cleaning she is also someone kind, respectful and someone I can trust, nothing ever have gone missing in mi apartment, so with my eyes closed I will give her the keys to my house. Also she is great with pets, she loves coco and treat her with so much love!!!'
            },
            {
                rating: 5,
                title: 'Creative and Professional',
                review:
                    'I had a lot cleaners, but Tracy is different. She not only cleans perfectly, but she does it above and beyond! She is very creative and learns how I like to my apartment to be cleaned the more she does it. She understands how I store different dog toys, and always comes up with creative ways to organize my kitchen counter! She is a very smart but hardworking person!'
            },
            {
                rating: 5,
                title: 'Great',
                review: 'Tracy was great! Really pleased with her service and professionalism!'
            },
            {
                rating: 5,
                title: 'Thank You!',
                review:
                    'Tracy is the Best! She’s so kind, helpful and does the best job cleaning that I ever had. She goes above and beyond. THANK YOU!!!'
            }
        ]
    }),
    components: {
        ReviewCard,
        ReviewForm
    },
    methods: {
        submitHandler(event) {
            // push to reviews
            this.reviews.push(event)
            // post to service
        }
    }
}
</script>

<style scoped lang="scss">
.write-review-button {
    flex: none !important;
}
</style>

<template>
    <v-card class="review-form">
        <v-card-text>
            <v-form ref="form">
                <legend class="review-form__legend">
                    <h3 class="title my-title mb-0">Please leave us a review</h3>
                </legend>

                <v-text-field
                    name="Title"
                    label="Title"
                    v-model="title"
                    :rules="titleRules"
                ></v-text-field>

                <v-textarea
                    name="Review"
                    label="Please leave your comments here"
                    v-model="review"
                    hint="Please tell us what you think to help us get better"
                    :rules="reviewRules"
                ></v-textarea>

                <star-rating
                    v-model="rating"
                    background-color="pink lighten-3"
                    color="pink"
                    centered
                ></star-rating>

                <v-btn color="primary" @click="submit">
                    Submit
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import StarRating from './StarRating.vue'

export default {
    components: {
        StarRating
    },
    data: () => {
        const rating = 0
        const title = null
        const review = null
        return {
            title,
            titleRules: [
                v => !!v || 'A title is needed',
                v => (v && v.length <= 50) || 'Please be a little more concise'
            ],
            review,
            reviewRules: [v => !!v || 'Review is required'],
            rating
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // submit review
                this.$emit('submit', {
                    rating: this.rating,
                    title: this.title,
                    review: this.review
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.review-form__legend {
    margin-bottom: 16px;
}
</style>

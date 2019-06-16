<template>
    <v-card class="review-card">
        <v-card-title primary-title>
            <v-layout align-center row wrap class="review-title">
                <v-flex xs12 sm6>
                    <h3 class="title my-title mb-0">{{ title }}</h3>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-rating
                        class="review-rating no-padding-left"
                        v-model="rating"
                        background-color="pink lighten-3"
                        color="pink"
                        readonly
                    ></v-rating>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text class="review-card__text">
            <slot />
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        rating: {
            type: Number,
            required: true,
            default: 5
        },
        title: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
.review-card__text {
    margin-top: 0;
    padding-top: 0;
}

.review-rating {
    display: flex;
    justify-content: flex-start;
}

@media only screen and (min-width: 600px) {
    .review-rating {
        justify-content: flex-end;
    }
}
</style>

<style>
.no-padding-left .fa-star {
    padding-left: 0;
}
</style>

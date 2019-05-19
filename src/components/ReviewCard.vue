<template>
    <v-card class="pricing-card">
        <v-card-title primary-title>
            <div class="review-title">
                <h3 class="title my-title mb-0">{{ title }}</h3>
                <v-rating
                    v-model="rating"
                    background-color="pink lighten-3"
                    color="pink"
                    readonly
                ></v-rating>
            </div>
        </v-card-title>
        <v-card-text class="pricing-card__text">
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

<style>
.pricing-card__text {
    margin-top: 0;
    padding-top: 0;
}

.review-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>

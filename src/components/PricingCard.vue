<template>
    <v-hover>
        <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 8 : 2}`"
            max-width="450"
            height="152"
            class="pricing-card"
        >
            <v-card-title primary-title class="pricing-card__title">
                <div>
                    <h3 class="title my-title mb-0">{{ title }}</h3>
                    <span class="grey--text">{{ subtitle }}</span>
                </div>
            </v-card-title>

            <v-divider light></v-divider>

            <v-card-actions class="pricing-section">
                Estimate
                <v-spacer></v-spacer>
                <div class="price">{{ priceTag }}</div>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        price: {
            type: Number,
            required: true,
            default: 0
        },
        title: {
            type: String,
            require: true,
            default: 'title'
        },
        subtitle: {
            type: String,
            default: ''
        },
        hourly: {
            tyoe: Boolean,
            default: false
        }
    },
    computed: {
        priceTag() {
            return this.hourly ? `$${this.price}/hr` : `$${this.price}`
        }
    }
}
</script>

<style scoped lang="scss">
.pricing-card {
    margin: 0 auto;
}

.pricing-card__title {
    height: 114px;
}
</style>

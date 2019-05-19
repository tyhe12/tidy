<template>
    <v-layout align-center row wrap>
        <v-flex xs12 class="section">
            <v-tabs
                v-model="active"
                color="grey lighten-3"
                centered
                grow
                slider-color="pink lighten-3"
            >
                <v-tab v-for="(tab, index) in tabs" :key="index" ripple>
                    <span class="title my-headline">
                        {{ tab.name }}
                    </span>
                </v-tab>
            </v-tabs>
        </v-flex>

        <v-tabs-items v-model="active">
            <v-tab-item v-for="(tab, index) in tabs" :key="index">
                <v-layout align-center row wrap class="section">
                    <v-flex xs12 md6 v-for="(item, idx) in tab.items" :key="idx">
                        <pricing-card
                            :title="item.title"
                            :price="item.price"
                            :subtitle="item.subtitle"
                        />
                    </v-flex>
                </v-layout>
            </v-tab-item>
        </v-tabs-items>
    </v-layout>
</template>

<script>
import PricingCard from '../components/PricingCard.vue'

export default {
    components: {
        PricingCard
    },
    data: () => {
        const cleans = [
            {
                title: 'Studio/One Bedroom',
                price: 65
            },
            {
                title: 'Two Bedroom',
                price: 80
            },
            {
                title: 'Three Bedroom',
                price: 90
            },
            {
                title: 'Condo/House 1000-2000 Sq. ft',
                price: 150
            },
            {
                title: 'Condo/House 2000-3000 Sq. ft',
                price: 250
            }
        ]
        const addons = [
            {
                title: 'Green Clean',
                price: 5,
                subtitle: 'Eco Friendly Products'
            },
            {
                title: 'Refrigirator',
                price: 25
            },
            {
                title: 'Stove',
                price: 15
            },
            {
                title: 'Laundry / 2 Loads',
                price: 35,
                subtitle: 'Including Folding, Additional $5/load'
            },
            {
                title: 'Closet Organization',
                price: 20
            },
            {
                title: 'Cabinet Organization',
                price: 20
            },
            {
                title: 'Baseboards',
                price: 10
            },
            {
                title: 'Dusting Blinds',
                price: 20
            }
        ]
        const specials = [
            {
                title: 'Winter/Spring Clean',
                price: 100,
                subtitle: 'Regular cleaning and hard-to-reach corners, you need this twice a year!'
            },
            {
                title: 'Pre-party Clean',
                price: 50,
                subtitle: 'Kitchen, Bathroom, and Living Room'
            },
            {
                title: 'After Party Clean',
                price: 80,
                subtitle: 'Prices vary with sizes'
            },
            {
                title: 'Move In/Out Clean',
                price: 80,
                subtitle: 'Prices vary with sizes'
            }
        ]
        return {
            active: null,
            tabs: [
                {
                    name: 'Deep Clean',
                    key: 'cleans',
                    items: [...cleans, ...specials]
                },
                {
                    name: 'Add-on Services',
                    key: 'addons',
                    items: addons
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.page-header {
    margin-bottom: 24px;
}
</style>

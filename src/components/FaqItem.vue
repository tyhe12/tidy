<template>
    <v-expansion-panel expand class="faq-item">
        <v-expansion-panel-content>
            <template v-slot:actions>
                <v-icon>fa-angle-up</v-icon>
            </template>
            <template v-slot:header class="faq-item__title">
                <div class="title my-title">{{ title }}</div>
            </template>
            <v-card>
                <v-card-text>
                    <slot />
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import '../assets/constants';
.faq-item {
    width: 100%;
}

.v-expansion-panel__container--active .v-expansion-panel__header {
    border-bottom: 1px solid #e0e0e0;
}
</style>

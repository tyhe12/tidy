<template>
    <v-btn
        class="link link-btn"
        flat
        :to="to"
        :small="small"
        :large="large"
        :block="block"
        active-class=""
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
            default: '/'
        },
        small: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants';

.link:hover {
    color: $primary-color;
}
</style>

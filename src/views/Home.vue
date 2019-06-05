<template>
    <v-layout align-center justify-center row wrap>
        <v-layout align-center class="section--big">
            <v-flex xs12>
                <v-hover>
                    <v-carousel hide-controls hide-delimiters slot-scope="{ hover }">
                        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="v-carousel--reveal white--text"
                                    style="height: 100%;"
                                >
                                    <div
                                        class="font-weight-bold headline my-headline text-sm-center v-carousel__headline"
                                    >
                                        "Why Tidy Up With Cooley?"
                                    </div>
                                    <div class="text-xs-center subheading v-carousel__text">
                                        I'm here to provide a clean and a positive atmosphere in my
                                        clients’ home by delivering world class customer service and
                                        cleaning. I value open and honest relationships with my
                                        clients and love giving them a little time back in their
                                        week to focus on their goals. I want to always deliver the
                                        “Wow” through my services.
                                    </div>
                                </div>
                            </v-expand-transition>
                        </v-carousel-item>
                    </v-carousel>
                </v-hover>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md7>
                <div class="my-headline headline font-weight-bold headline-text text-xs-center">
                    "Why Tidy Up With Cooley?"
                </div>
                <p class="text-xs-center subheading" color="pink lighten-3">
                    My goal is to provide a clean and a positive atmosphere in my clients’ home by
                    delivering world class customer service and cleaning. I value open and honest
                    relationships with my clients and love giving them a little time back in their
                    week to focus on their goals. I want to always deliver the “Wow” through my
                    services.
                </p>
            </v-flex>
            <v-flex xs12 md5 d-flex align-center justify-center>
                <v-avatar :size="avatarSize">
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
                </v-avatar>
            </v-flex>
        </v-layout>

        <!-- <v-divider xs12 class="section" /> -->

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md7 order-md2>
                <div class="my-headline headline font-weight-bold headline-text text-xs-center">
                    "How will Cooley clean my home?"
                </div>
                <p class="text-xs-center subheading">
                    I don't believe in cleaning halfway - Every clean is a deep clean and I bring my
                    own products!
                </p>
            </v-flex>
            <v-flex xs12 md5 d-flex align-center justify-center>
                <v-avatar :size="avatarSize">
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
                </v-avatar>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md7>
                <div class="my-headline headline font-weight-bold headline-text text-xs-center">
                    "Why Tidy Up With Cooley?"
                </div>
                <p class="text-xs-center subheading" color="pink lighten-3">
                    My goal is to provide a clean and a positive atmosphere in my clients’ home by
                    delivering world class customer service and cleaning. I value open and honest
                    relationships with my clients and love giving them a little time back in their
                    week to focus on their goals. I want to always deliver the “Wow” through my
                    services.
                </p>
            </v-flex>
            <v-flex xs12 md5 d-flex align-center justify-center>
                <v-avatar :size="avatarSize">
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
                </v-avatar>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center row wrap class="section--big">
            <v-flex xs12 md7 order-md2>
                <div class="my-headline headline font-weight-bold headline-text text-xs-center">
                    "How will Cooley clean my home?"
                </div>
                <p class="text-xs-center subheading">
                    I don't believe in cleaning halfway - Every clean is a deep clean and I bring my
                    own products!
                </p>
            </v-flex>
            <v-flex xs12 md5 d-flex align-center justify-center>
                <v-avatar :size="avatarSize">
                    <img src="../assets/logo.png" alt="avatar" />
                </v-avatar>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import CarouselImage1 from '../assets/img/IMG_1435.jpg'
import CarouselImage2 from '../assets/img/IMG_1452.jpg'
import CarouselImage3 from '../assets/img/IMG_1526.jpg'
import CarouselImage4 from '../assets/img/IMG_1531.jpg'

export default {
    data() {
        return {
            avatarSize: 128,
            items: [
                {
                    src: CarouselImage1
                },
                {
                    src: CarouselImage2
                },
                {
                    src: CarouselImage3
                },
                {
                    src: CarouselImage4
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.v-carousel--reveal {
    display: flex;
    align-items: center;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
    background: rgba(244, 143, 177, 0.7);
    position: absolute;
    width: 100%;
}

.v-carousel__headline {
    margin-bottom: 32px;
}

.v-carousel__text {
    max-width: 600px;
}

.headline-card {
    margin-left: auto;
    margin-right: auto;
}

.headline-text {
    padding-top: 32px;
    padding-bottom: 32px;
}
</style>

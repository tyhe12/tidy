<template>
    <v-footer color="pink lighten-3" height="auto">
        <v-card flat tile class="pink lighten-3 white--text footer__card--fullwidth">
            <v-container fluid grid-list-xs>
                <v-layout row wrap>
                    <v-flex sm6 xs12>
                        <v-card-title primary-title>
                            <div class="footer__content-title">
                                <h3 class="my-title title mb-0">Navigate</h3>
                            </div>
                        </v-card-title>

                        <v-card-text class="footer__text--no-space-top">
                            <v-list dense dark class="pink lighten-3">
                                <v-list-tile
                                    class="footer__navigate-item"
                                    active-class=""
                                    v-for="item in items"
                                    :key="item.title"
                                    :to="item.link"
                                >
                                    <v-list-tile-content class="footer__navigate-item-content">{{
                                        item.title
                                    }}</v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card-text>
                    </v-flex>

                    <v-flex sm6 xs12>
                        <v-card-title primary-title>
                            <div class="footer__icon-title">
                                <h3 class="my-title title mb-0">Connect With Me</h3>
                            </div>
                        </v-card-title>

                        <v-card-text class="footer__connect--no-space-top">
                            <v-btn
                                v-for="(icon, idx) in icons"
                                :key="idx"
                                class="mx-3 white--text"
                                icon
                                :href="icon.link"
                            >
                                <v-icon size="24px">{{ icon.icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-divider></v-divider>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'Home', icon: 'fas fa-home', link: '/' },
            { title: 'Who I Am', icon: 'fas fa-user-circle', link: '/about' },
            { title: 'My Services', icon: 'fas fa-tags', link: '/offerings' },
            {
                title: 'What People Say',
                icon: 'fas fa-comments',
                link: '/reviews'
            },
            {
                title: 'What Is Included',
                icon: 'fas fa-box-open',
                link: '/included'
            },
            { title: 'FAQs', icon: 'fas fa-question-circle', link: '/faqs' }
        ],
        icons: [
            {
                icon: 'fab fa-facebook',
                link: 'https://www.facebook.com/CleaningwithCooley'
            },
            {
                icon: 'fab fa-instagram',
                link: 'https://www.instagram.com/cleaningwithcooley/'
            },
            {
                icon: 'fab fa-twitter',
                link: 'https://twitter.com/CleaningwCooley'
            },
            {
                icon: 'fas fa-phone',
                link: 'tel:708-308-8582'
            },
            {
                icon: 'fas fa-envelope',
                link: 'mailto:info@cleaningwithcooley.com'
            }
        ]
    })
}
</script>

<style>
.footer__card--fullwidth {
    width: 100%;
}

.footer__text {
    color: white;
}

.footer__text--no-space-top {
    margin-top: 0;
    padding-top: 0;
}

.footer__navigate-item > a {
    height: 24px !important;
}

.footer__connect--no-space-top {
    margin-top: 0;
    padding-top: 0;
}
</style>

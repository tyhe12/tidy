<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12>
            <v-card>
                <v-layout align-center justify-center row wrap>
                    <v-flex xs12>
                        <v-card-title>
                            <span
                                class="about-title title font-weight-light text-xs-center text-uppercase my-title"
                                >Who I Am</span
                            >
                        </v-card-title>
                    </v-flex>

                    <v-flex xs12 d-flex justify-center>
                        <v-avatar size="200">
                            <img src="../assets/logo.png" alt="avatar" />
                        </v-avatar>
                    </v-flex>

                    <v-flex xs12>
                        <v-card-text class="font-weight-bold">
                            <p class="subheading">
                                I started Cleaning with Cooley in 2018. After keeping homes for over
                                15years, I found that a successful clean depended on attention to
                                detail, quality products and absolute integrity.
                            </p>

                            <p class="subheading">
                                I take pride in my work and believe in open, honest relationships
                                with my clients. Their trust is the highest compliment they can give
                                me.
                            </p>

                            <p class="subheading">
                                My mission is to give every customer a little time back each week by
                                keeping their home clean and beautiful so they can focus on their
                                goals.
                            </p>

                            <p class="subheading">
                                Outside of the business, I enjoy a good Netflix binge or just
                                enjoying the outdoors.
                            </p>

                            <p class="subheading mt-5 mb-0">
                                Tracy Cooley, Cleaning with Cooley,
                            </p>

                            <p class="subheading">
                                Founder and CEO
                            </p>

                            <p class="subheading">
                                Privately owned and operated company.
                            </p>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</template>

<script>
import MySpacer from '../components/MySpacer.vue'

export default {
    components: {
        MySpacer
    }
}
</script>

<style lang="scss" scoped>
.about-title {
    width: 100%;
    margin-top: 32px;
}
</style>

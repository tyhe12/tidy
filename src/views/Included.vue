<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12>
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img :src="livingroom" height="200px" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline my-headline">
                                    Bedrooms, Living Room &amp; Common Areas
                                </div>
                                <div class="subheading">
                                    Tidy up, make bed (change linen by request) surfaces dust,
                                    mirrors cleaned and general tidying up.
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img :src="bathroom" height="200px" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline my-headline">Bathroom</div>
                                <div class="subheading">
                                    Shower/bathtub and tile wall scrubbed clean and disinfected.
                                    Toilet scrubbed clean and disinfected including base and behind
                                    toilet. Vanity and sink scrubbed clean and disinfected, mirrors
                                    cleaned, fixtures cleaned and shined.
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img :src="kitchen" height="200px" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline my-headline">Kitchen</div>
                                <div class="subheading">
                                    Clean the stovetop and backsplash. Clean and sanitize interior
                                    and exterior of microwave. Clean the exterior of appliances,
                                    clean and disinfect the sink. Hand-wash and disinfect counters,
                                    wipe down table and chairs. Cabinets wiped down. Hand-wipe
                                    outside of the trash can. General tidying up.
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>

        <v-flex xs12>
            <v-card color="included-section">
                <v-layout align-center row wrap>
                    <v-flex xs12 sm5>
                        <v-img :src="everyroom" height="200px" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline my-headline">Every Room</div>
                                <div class="subheading">
                                    General tidying up, clean all floor surfaces, remove trash &amp;
                                    recycling.
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</template>

<script>
import MySpacer from '../components/MySpacer.vue'
import Livingroom from '../assets/img/blc.jpg'
import Kitchen from '../assets/img/kitchen.jpg'
import Everyroom from '../assets/img/everyroom.jpg'
import Bathroom from '../assets/img/bathroom.jpg'

export default {
    data: () => ({
        livingroom: Livingroom,
        kitchen: Kitchen,
        everyroom: Everyroom,
        bathroom: Bathroom
    }),
    components: {
        MySpacer
    }
}
</script>

<style lang="scss" scoped>
.included-title {
    margin-top: 32px;
}

.included-section {
    padding: 16px;
}
</style>

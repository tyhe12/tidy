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
                                <div class="headline my-headline">Living Room &amp; Bedrooms</div>
                                <div class="subheading">
                                    Tidy up, and make bed, change linen by request, surfaces dust,
                                    mirrors cleaned, general tidying up.
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
                        <v-img :src="bedroom" height="200px" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline my-headline">Every Room</div>
                                <div class="subheading">
                                    Remove trash, general tidying up and all floors will be vacuumed
                                    and mop
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
import Livingroom from '../assets/img/living_3.jpg'
import Kitchen from '../assets/img/kitchen_2.jpg'
import Bedroom from '../assets/img/bedroom_2.jpg'
import Bathroom from '../assets/img/bathroom_1.jpg'

export default {
    data: () => ({
        livingroom: Livingroom,
        kitchen: Kitchen,
        bedroom: Bedroom,
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

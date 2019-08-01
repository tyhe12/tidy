<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <my-spacer />
        </v-flex>

        <v-flex xs12>
            <faq-item title="Are you insured?">
                Yes, Cleaning with Cooley is fully Bonded &amp; Insured to protect your home and
                give you a peace of mind.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="How do I pay?">
                We accept Cash payments, Checks, Credit Cards, Zelle, Cash App, Venmo, PayPal and
                Apple Pay.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="What’s all included in your cleaning services?">
                <div class="subheading font-weight-bold">
                    Bathroom
                </div>
                Shower/bathtub and tile wall scrubbed clean and disinfected. Toilet scrubbed clean
                and disinfected including base and behind toilet. Vanity and sink scrubbed clean and
                disinfected, mirrors cleaned, fixtures cleaned and shined.
                <div class="subheading font-weight-bold">
                    Kitchen
                </div>
                Clean the stovetop and backsplash. Clean and sanitize interior and exterior of
                microwave. Clean the exterior of appliances, clean and disinfect the sink. Hand-wash
                and disinfect counters, wipe down table and chairs. Cabinets wiped down. Hand-wipe
                outside of the trash can. General tidying up.
                <div class="subheading font-weight-bold">
                    Bedrooms, Living Room &amp; Common Areas
                </div>
                Tidy up, make bed (change linen by request),surfaces dust, mirrors cleaned and
                general tidying up.
                <div class="subheading font-weight-bold">
                    Every Room
                </div>
                General tidying up, clean all floor surfaces, remove all trash and recycling.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Is a long-term contract required for service?">
                Absolutely not. Our services are provided as needed to suit your busy lifestyle.
                There are no long-term contracts or obligations required.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="What time do you clean?">
                We’re able to clean day and night, depending on your preference.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="What towns do you service?">
                Chicago and the surrounding areas
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Do you furnish the cleaning supplies?">
                Yes. We furnish everything needed to clean your home. If you have any preference in
                regards to what cleaning products we use, feel free to let us know and we’ll do
                everything we can to work with your requests.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Do you offer Green or Eco-Friendly Cleaning?">
                Yes, we do offer Eco-friendly House cleaning products.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item
                title="Are you a pet friendly service and do your cleaning teams use non toxic products?"
            >
                We love animals as much as you do! Our teams are familiar with the proper treatment
                of dogs, cats and other pets. We also use non-toxic, eco-friendly products so your
                pets are safe on any surface we clean. Please make sure to request an eco-friendly
                cleaning if this applies to you.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="What should I expect on my first appointment?">
                We will arrive at your home we will be equipped with all cleaning supplies and
                equipment needed to thoroughly clean your home. Your first appointment generally
                takes the longest, as we need time to get acquainted with a new environment.
                Subsequent appointments will move along faster.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Do I need to be home the day of the cleaning?">
                This is up to you. Some customers prefer scheduling cleaning appointments while they
                are at work or away for the day, while others like to be at home during the process.
                Regardless of your schedule, you are certain to receive superior housekeeping and
                customer service!
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Can I skip or reschedule an appointment?">
                Ideally, we would like a minimum of 24 hours in advance. We’ll move your visit to
                another, more convenient time or if you wish, cancel it all together.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="How will you enter my home on my scheduled days of cleaning?">
                We leave this strictly up to you, whatever you feel most comfortable with.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="How many hours is a typical service?">
                There is no set amount of time - it all depends on the current condition of your
                home.
            </faq-item>
        </v-flex>

        <v-flex xs12>
            <faq-item title="Do you offer hourly service?">
                In some instances it may make sense to do an hourly service. We have a minimum fo 4
                hours when booking hourly services. This is generally reserved for very large homes.
            </faq-item>
        </v-flex>
    </v-layout>
</template>

<script>
import FaqItem from '../components/FaqItem.vue'
import MySpacer from '../components/MySpacer.vue'

export default {
    components: {
        FaqItem,
        MySpacer
    }
}
</script>

<style></style>

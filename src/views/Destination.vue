<template>
    <section>
        <h1>{{ destination.name }}</h1>
        <go-back />
        <div class="destination-details">
            <img
                :src="`/images/${destination.image}`"
                :alt="destination.name"
            />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experienen in {{ destination.name }}</h2>
        <div class="cards">
            <router-link
                v-for="experience in destination.experiences"
                :key="experience.slug"
                :to="{
                    name: 'experience',
                    params: { experienceSlug: experience.slug },
                }"
            >
                <ExperienceCard :experience="experience" />
            </router-link>
        </div>
    </section>

    <router-view></router-view>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from '@/components/GoBack.vue';
export default {
    components: { ExperienceCard, GoBack },
    props: {
        id: { type: Number, required: true },
        routeName: { type: String },
    },
    computed: {
        destinationId() {
            return parseInt(this.id);
        },

        destination() {
            return sourceData.destinations.find(
                (destination) => destination.id === this.destinationId
            );
        },
    },
};
</script>
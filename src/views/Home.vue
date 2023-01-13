<template>
    <div class="home">
        <h1>Home Page</h1>

        <div class="destinations">
            <router-link
                :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
                v-for="destination in destinations"
                :key="destination.id"
            >
                <h1>{{ destination.name }}</h1>
                <img
                    :src="`/images/${destination.image}`"
                    :alt="destination.name"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
    data() {
        return {
            destinations: sourceData.destinations,
        };
    },
};
</script>
<template>
    <div id="nav">
        <AppLink to="/" id="logo">Vue School Travel App</AppLink>
        <AppLink :to="{name: 'protected'}">Protected Route</AppLink>
        <AppLink :to="{name: 'invoices'}">Invoices</AppLink>
        <AppLink
            :to="{
                name: 'destination',
                params: { id: destination.id, slug: destination.slug },
            }"
            v-for="destination in destinations"
            :key="destination.id"
        >
            {{ destination.name }}
        </AppLink>

        <!-- <router-view v-slot="{ Component }">
            <transition>
                <component :is="Component" />
            </transition>
        </router-view> -->
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

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
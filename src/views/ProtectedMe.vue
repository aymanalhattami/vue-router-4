<template>
    <div>
        <h1>Protected Me {{ username }}</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: window.username,
        };
    },
    methods: {
        logout() {
            window.username = null;
            this.$router.push({ name: 'home' });
        }
    }
};
</script>
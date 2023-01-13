<template>
    <div class="login">
        <form @submit.prevent="login" class="form">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input type="text" v-model="username" class="input" />
            <label for="username">password</label>
            <input type="password" v-model="password" class="input" />
            <button class="btn">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: null,
            password: null,
        };
    },

    methods: {
        login() {
            window.username = this.username; 
            const redirect = this.$route.query.redirect || 'protected';
            this.$router.push(redirect);
        }
    }
};
</script>
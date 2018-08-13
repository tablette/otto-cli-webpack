<template>
    <div class="sign-in">
        <h1>Sign In</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        <p>
            Username
            <input type="text" :value="username">
        </p>
        <p>
            Password
            <input type="text" :value="password">
        </p>
        <button type="submit">sign me in</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'SignIn',
    components: {
        Navbar
    },
    data(){
        return{
            username: 'Username',
            password: 'Password',
        }
    }
}
</script>

<style>

</style>
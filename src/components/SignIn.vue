<template>
    <div class="sign-in">
        <Navbar />
        <div class="content">
            <h1>Sign In</h1>
            <p>
                Username
                <input type="text" :value="username">
                Password
                <input type="text" :value="password">
                <button type="submit">Sign In</button>
            </p>
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'SignIn',
    components: {
        Navbar, Footer
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
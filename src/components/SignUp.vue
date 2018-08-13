<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <Navbar />
        <!-- <p class="spacer-gentop"></p> -->
        <!-- <p>{{ greet() }}</p> -->
        <p class="spacer-gentop"></p>
        <p>
            First name
            <input type="text" v-model="nameF">
        </p>
        <p>
            Last name
            <input type="text" v-model="nameL">
        </p>
            
        <!-- <p>
            Username
            <input type="text" v-model="username">
        </p> -->
        <button type="submit">sign me up</button>
        <p>Hi, {{ nameF }}! We're glad you're here.</p>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'SignUp',
    components: {
        Navbar
    },
    data(){
        return{

            nameF: 'First Name',
            nameL: 'Last Name',
        }
    }
}
</script>

<style>

</style>
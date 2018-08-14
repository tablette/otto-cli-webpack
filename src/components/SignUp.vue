<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <Navbar />
        <!-- <p class="spacer-gentop"></p> -->
        <p class="spacer-gentop"></p>
        <p>
            First name
            <input type="text" v-model="nameF">
        </p>
        <p>
            Last name
            <input type="text" v-model="nameL">
        </p>
        <!-- user auth: auto-assign username? -->
        <button type="submit">sign me up</button>
        <!-- <p>{{ greet() }}</p> --><!-- make america greet again -->
        <p>Hi, {{ nameF }}! We're glad you're here.</p><!-- ideally, show this only when the user signs up -->
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
    },
    methods: {
        // greet(){
        //     let date = new Date();
        //     let hour = date.getHours();
        //     if (hour < 12) {
        //         tod = 'morning';
        //     } else if (hour < 18) {
        //         tod = 'afternoon';
        //     } else {
        //         tod = 'evening';
        //     }
        //     return `Good ${tod}!`
        // }
    }
}
</script>

<style>

</style>
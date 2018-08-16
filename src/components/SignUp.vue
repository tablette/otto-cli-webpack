<template>
    <div class="sign-up">
        <Navbar />
        <div class="content">
            <h1>Sign Up</h1>
            <p>
                First name
                <input type="text" v-model="nameF">
                Last name
                <input type="text" v-model="nameL">
                <button type="submit">Sign Up</button>
            </p>
            <!-- <p>{{ greet() }}</p> --><!-- make america greet again -->
                <p>Hi, {{ nameF }}! We're glad you're here.</p><!-- ideally, show this only when the user signs up -->    
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'SignUp',
    components: {
        Navbar, Footer
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
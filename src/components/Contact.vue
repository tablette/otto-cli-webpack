<template>
    <div class="contact">
        <Navbar />
        <div class="content">
            <h1>Contact</h1>
            <p>If you would like to learn more about OTTO, you are most welcome to contact OTTO project lead Melissa Knudtson at <a href="melissa.erin.knudtson@gmail.com">melissa.erin.knudtson@gmail.com</a>.</p>
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'Contact',
    components: {
        Navbar, Footer
    },
    data(){
        return{
            // 
        }
    }
}
</script>

<style>

</style>
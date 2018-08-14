<template>
    <div class="about">
        <h1>About</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        <p>OTTO is a tool to help an organization develop a taxonomy to apply to the information architecture of its website, ultimately enhancing the browse navigation experience of the website for the end user.</p>
        <p class="spacer-gentop"></p>
        <p>In short, it is a tool to make finding website content easy.</p>
        <p class="spacer-gentop"></p>
        <p>OTTO got going in June 2018. The OTTO team consists of Melissa Knudtson (project lead and front-end developer), Abhishek Agarwal (front-end developer), Robin Melanson (web scraper in chief) and Firebase (“back-end developer”).</p>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'About',
    components: {
        Navbar
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
<template>
    <div class="about">
        <Navbar />
        <div class="content">
            <h1>About OTTO</h1>
            <p>OTTO is a tool to help an organization develop a taxonomy to apply to the information architecture of its mulitilingual website so as to enhance the browse navigation experience in the languages in which the website is available.</p> 
            <p>In short, it is a tool to make finding website content easy for end users who are native speakers of different languages.</p>
            <p>Project lead Melissa Knudtson got the idea for OTTO in summer 2018 when she systematically compared the multilingual capabilities of more than half a dozen of the major controlled vocabulary software solutions. She found that all of them left something to be desired, as their user interface design was lacking, their multilingual capabilities were not integrated or intuitive, or both.</p>
            <p>For the moment, OTTO is a monolingual tool only, but multilingual functionality is coming soon.</p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'About',
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
<template>
    <div class="blog">
        
        <Navbar />
        <div class="content">
            <h1>Blog</h1>
            <p>Follow OTTO's progress <a href="https://medium.com/tablette">here</a>.</p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'Blog',
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
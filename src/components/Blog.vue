<template>
    <div class="blog">
        <h1>Blog</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        <p>Follow OTTO's progress <a href="https://medium.com/tablette">here</a>.</p>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'Blog',
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
<template>
    <div>
        <Navbar />
        <div class="content">
            <h1>Update Existing</h1>
        
            <p>Sorry, we haven't learned that trick yet.</p><!-- ideally, pass down apology -->
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'Update',
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

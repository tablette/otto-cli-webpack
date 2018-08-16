<template>
    <div class="quick-start">
        <Navbar />
        <div class="content">
            <h1>Quick Start</h1>
            
            <p>Let's go!</p>
            <ul>
                <li><router-link to="/create">Create a new taxonomy</router-link></li>
                <li><router-link to="/update">Update an existing taxonomy</router-link></li>                <!-- this makes no sense as a quickstart option except to experiment with localstorage -->
            </ul>
            <!-- at least +1 option - else the user should be taken straight to Create -->
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'QuickStart',
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
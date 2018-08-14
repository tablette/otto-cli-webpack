<template>
    <div class="quick-start">
        <h1>Quick Start</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        <p>What would you like to do?</p>
        <router-link to="/create">Create a new taxonomy</router-link>  
        <router-link to="/update">Update an existing taxonomy</router-link>  
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'QuickStart',
    components: {
        Navbar
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
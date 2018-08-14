<template>
    <div>
        <h1>Create a New Taxonomy</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        <router-link to="/typein">Type in OTTO directly</router-link>  
        <router-link to="/scrape">Scrape from a site</router-link>  
        <router-link to="/import">Import from a file</router-link>  
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'Create',
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

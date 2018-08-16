<template>
    <div>
        <Navbar />
        <div class="content">
            <h1>Create New</h1>
            <ul>
                <li><router-link to="/typein">Type in OTTO directly</router-link></li>
                <li><router-link to="/scrape">Scrape from a site</router-link></li>
                <li><router-link to="/import">Import from a file</router-link></li>
            </ul>
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'Create',
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

<template>
  <div class="home">
    <h1>Home</h1>
    
    <!-- top nav -->
    <div id="header">
        <Navbar /> 
    </div>

    <!-- hero -->
    <div class="hero">
        <h2>{{ tagline }}</h2>
    </div>

    <!-- top nav, but btm (below hero image) -->
    <div class="topnav" id="btmnav">
        <router-link to="/quickstart">Quick Start</router-link>
    </div>

    <!-- blurb -->
    <h3>{{ blurb }}</h3>
    
    <!-- reviews - dummy data - ideally component - <Reviews /> -->
    <div class="reviews">
        <h2>What people are saying about OTTO:</h2>
        <input type="text" v-model="searchTerm">
        <p> search reviews </p>
        <div v-for="rvw in filteredRvws" :key="rvw.id">
            <h3 class="rvw-title chip cat">{{ rvw.title }}</h3>
            <h3 class="rvw-body chip lab">{{ `${rvw.body} ${rvw.body} ${rvw.body}` | snippet }}</h3>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'

export default {
    name: 'Home',
    components: {
        Navbar
    },
    data () {
        return {
        tagline: "make finding content easy",
        blurb: "OTTO is a tool to help you develop a taxonomy to apply to the information architecture of your website to enhance the browse navigation experience of the website for the end user.",
        rvws: [],
        searchTerm: '',
        }
    },
    methods: {
        // logEvent(e){ // e = optional parameter: event object - call whatever you want e.g. e OR evt OR event
        //     console.log(e);
        // }
    },
    computed: {
        filteredRvws(){
            return this.rvws.filter(rvw => {
                return rvw.body.match(this.searchTerm) || rvw.title.match(this.searchTerm) // where match is built in method
            })
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/') // returns a promise
        .then(response => {
            console.log(response)
            this.rvws = response.data
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>

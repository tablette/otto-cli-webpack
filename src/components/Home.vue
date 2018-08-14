<template>
  <div class="home">
    <h1>Home</h1>

  <!-- copied home code below! -->
    
    <div id="header">
        <!-- nav bar goes here - should be component <Navbar /> -->
        <Navbar /> 
    </div>

    <!-- hero -->
    <div class="hero">
        <h2>{{ tagline }}</h2>
    </div>

    <div class="topnav" id="btm">
        <!-- <a href="#getting-started">Quick Start</a> -->
        <router-link to="/quickstart">Quick Start</router-link>
    </div>

    <!-- blurb -->
    <h3>{{ blurb }}</h3>
    
    <!-- reviews - dummy data - ideally, should be component, <Reviews /> -->
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
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      // title: "otto",
      tagline: "make finding content easy",
      blurb: "OTTO is a tool to help you develop a taxonomy to apply to the information architecture of your website to enhance the browse navigation experience of the website for the end user.",
      // apology: `Sorry, we haven't learned that trick yet.`, // add html elements - include link to top
      // username: 'Username',
      // password: 'Password',
      // nameF: 'First Name',
      // nameL: 'Last Name',
      // top: '#app',
      // backToGettingStarted: '#getting-started',
      // backToCreate: '#create',
      // categories: [],
      // labels: [],
      // includesCategories: false,
      // doesNotIncludeCategories: true,
      rvws: [],
      searchTerm: '',
      // searchTermCat: '',
      // searchTermLab: ''
    }
  },
  // <<< existing otto code data
  // existing otto code methods >>>
  methods: {
    // // for greeting on landing
    // greet(){
    //     let date = new Date();
    //     let hour = date.getHours();
    //     if (hour < 12) {
    //         tod = 'morning';
    //     } else if (hour < 18) {
    //         tod = 'afternoon';
    //     } else {
    //         tod = 'evening';
    //     }
    //     return `Good ${tod}! Let's go.`
    // },
    // // just for quick access to ready-made event properties
    // logEvent(e){ // e = optional parameter: event object - call whatever you want e.g. e OR evt OR event
    //     console.log(e);
    // },
    // // for typein - toggling - could be useful for preventing duplicate categories and labels
    // toggleY(){
    //     this.includesCategories = true
    // },
    // toggleN(){
    //     this.includesCategories = false
    // },
    // // for typein - from an input element, add a CATEGORY
    // addCategory(event){
    //     this.categories.push(event.target.value) // push to categories array
    //     event.target.value = '' // clear input
    // },
    // // // for typein - from an input element, add a label 
    // addLabel(event){
    //     this.labels.push(event.target.value) // push to labels array
    //     event.target.value = '' // clear input
    //     // console.log("at least enter works") // test
    // },
    // editItem(){
    //     // attempt 1 - use a simple prompt
    //     let editedText = prompt("Change to:");
    //     return editedText;
    //     // attempt 2 - add input field, and on click capture input, remove input field and return input
    //     // ...
    // },
    // showNumber(payload){
    //     // need to pass back to DOM in AllCategories.vue
    //     console.log(payload + 1)
    // }
  },
  // <<< existing otto code methods
    computed: {
        filteredRvws(){
            return this.rvws.filter(rvw => {
                return rvw.body.match(this.searchTerm) || rvw.title.match(this.searchTerm)
                // where match is built in method
            })
        } // ,
        // filteredCats(){
        //     console.log(this.categories)
        //     return this.categories.filter(categ => {
        //         return categ.match(this.searchTermCat)
        //     })
        // },
        // filteredLabs(){
        //     console.log(this.labels)
        //     return this.labels.filter(label => {
        //         return label.match(this.searchTermLab)
        //     })
        // }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

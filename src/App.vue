<template>
  <div id="app">
    <!-- when we request a certain page this is where that component is loaded in -->
    <router-view/>
    <!-- routes are set up in index.js in router folder -->

    <!-- existing otto code >>> -->
    <!-- header -->
    <!-- <div id="header">
        <div class="topnav">
            <nav class="main-nav">
                <a class="active" href="#home">otto</a>  
                <a href="#signin">Sign In</a>
                <a href="#signup">Sign Up</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
                <a href="#about">About</a>
            </nav>
        </div>

    </div> -->

    <!-- hero -->
    <!-- <div class="hero">
        <h2>{{ tagline }}</h2>
    </div>

    <div class="topnav" id="btm">
        <a href="#getting-started">Quick Start</a>
    </div> -->

    <!-- blurb -->
    <!-- <h3>{{ description }}</h3> -->
    
    <!-- reviews - dummy data - should be component <Reviews /> -->
    <!-- <div class="reviews">
        <h2>What people are saying about OTTO:</h2>
        <input type="text" v-model="searchTerm">
        <p> search reviews </p>
        <div v-for="rvw in filteredRvws" :key="rvw.id">
            <h3 class="rvw-title chip cat">{{ rvw.title }}</h3>
            <h3 class="rvw-body chip lab">{{ `${rvw.body} ${rvw.body} ${rvw.body}` | snippet }}</h3>
        </div>
    </div> -->
    
    

    <div id="getting-started" class="content-block">
        <p>What would you like to do?</p>
        <a href="#create"><button>Create a new taxonomy</button></a>
        <a href="#edit"><button>Edit an existing taxonomy</button></a>
        <p><a :href="top">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>

    <!-- Create a new taxonomy -->
    <div id="create" class="content-block">
        <h2>Create a new taxonomy</h2>            
        <p>OK! How?</p>
        <ul>
            <li><a href="#typein">Type in OTTO directly</a></li>
            <li><a href="#import">Import from a file</a></li>
            <li><a href="#scrape">Scrape from a site</a></li>
        </ul>
        <p><a :href="backToGettingStarted">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>

    <!-- Create a new taxonomy - typein -->
    <div id="typein" class="content-block">
        <h2>Type in OTTO directly</h2>
        <input class="typein-input" v-on:keyup.enter="addCategory">add <div class="chip cat mock-chip">category</div>
        <input class="typein-input" v-on:keyup.enter="addLabel">add <div class="chip lab mock-chip">label</div>
                
        <p class="spacer-gentop"></p>
        
        <!-- attempt #1 at cRud: render directly in App -->
        <!-- <h2>Your categories:</h2>
        <ul class="typein-list">
            <li class="chip cat" v-for="(category, index) in categories" :key="index">{{ category }} 
                <span class="editbtn" v-on:click="categories.splice(index, 1, editItem())">&#10000;</span>
                <span class="closebtn" v-on:click="categories.splice(index, 1)">&times;</span>
            </li>
        </ul>
        <p class="spacer-gentop"></p>
        
        <h2>Your labels:</h2>
        <ul class="typein-list">
            <li class="chip lab" v-for="(label, index) in labels" :key="index">{{ label }}
            <span class="editbtn" v-on:click="labels.splice(index, 1, editItem())">&#10000;</span>
            <span class="closebtn" v-on:click="labels.splice(index, 1)">&times;</span></li>
        </ul>
        <p class="spacer-gentop"></p> -->

        <!-- attempt #2 at cRud: render in App from what should be components AllCategories and AllLabels -->
        <!-- all categories -->
        <div :categories="categories" :editItem="editItem" @nbr="showNumber">
            <!--  -->
               <div id="all-categories">
                <h2>All Categories</h2>
                <!-- cycle through cateogries -->
                <span><input type="text" v-model="searchTermCat"> filter </span>
                <div v-for="(cat, index) in filteredCats" :key="index">
                    <!-- and render to browser -->
                    <span class="chip cat">
                        <!-- show number (for now just prints an asterism to the DOM and the number to the console) -->
                        <span @click="number(index)">&#8258;</span>
                        <!-- display -->
                        {{ cat }}
                        <!-- edit -->
                        <span class="editbtn" v-on:click="categories.splice(index, 1, editItem())">&#10000;</span>
                        <!-- delete -->
                        <span class="closebtn" v-on:click="categories.splice(index, 1)">&times;</span>
                    </span>
                </div>
                <p class="spacer-gentop"></p>
            </div>
        </div>
        <!-- all labels -->
        <div :labels="labels" :editItem="editItem" @nbr="showNumber">
            <div id="all-labels">
                <h2>All Labels</h2>
                <!-- cycle through labels -->
                <span><input type="text" v-model="searchTermLab"> filter </span>
                <div v-for="(lab, index) in filteredLabs" :key="index">
                    <!-- and render to browser -->
                    <span class="chip lab">
                        <!-- show number (for now just prints a flower to the DOM and the number to the console) -->
                        <span @click="number(index)">&#8277;</span>
                        <!-- display -->
                        {{ lab }}
                        <!-- edit -->
                        <span class="editbtn" v-on:click="labels.splice(index, 1, editItem())">&#10000;</span>
                        <!-- delete -->
                        <span class="closebtn" v-on:click="labels.splice(index, 1)">&times;</span>
                    </span>
                </div>
                <p class="spacer-gentop"></p>    
            </div>
        </div>
        
        <p class="spacer-bottom"></p>
        
        <p><a :href="backToCreate">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>

    <div id="import" class="content-block">
        <h2>Import from a file</h2>            
        <p>{{ apology }}</p>
        <p><a :href="backToCreate">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>

    <div id="scrape" class="content-block">
        <h2>Scrape from a site</h2>            
        <p>{{ apology }}</p>
        <p><a :href="backToCreate">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>

    <div id="edit" class="content-block">
        <h2>Edit an existing taxonomy</h2>            
        <p>{{ apology }}</p>
        <p><a :href="backToGettingStarted">Go back</a></p>
        <p><a :href="top">Top</a></p>
    </div>
            
    <p><a :href="top">Top</a></p>
    <!-- <<< existing otto code -->



  </div>
</template>

<script>
// existing otto code imports >>>
// restore // import Navbar from './Navbar'
// restore // import Reviews from './Reviews'
// restore // import AllCategories from './AllCategories'
// restore // import AllLabels from './AllLabels'
// <<< existing otto code imports
import axios from 'axios'

export default {
  name: 'App',
  // existing otto code components >>>
  components: {
    // restore // Navbar,
    // restore // Reviews,
    // restore // AllCategories,
    // restore // AllLabels,
  },
  // <<< existing otto code components
  // existing otto code data >>>
  data () {
    return {
      // title: "otto",
      tagline: "make finding content easy",
      description: "OTTO is a tool to help you develop a taxonomy to apply to the information architecture of your website to enhance the browse navigation experience of the website for the end user.",
      apology: `Sorry, we haven't learned that trick yet.`, // add html elements - include link to top
      top: '#app',
      backToGettingStarted: '#getting-started',
      backToCreate: '#create',
      categories: [],
      labels: [],
      // includesCategories: false,
      // doesNotIncludeCategories: true,
      rvws: [],
      searchTerm: '',
      searchTermCat: '',
      searchTermLab: ''
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
    addCategory(event){
        this.categories.push(event.target.value) // push to categories array
        event.target.value = '' // clear input
    },
    // // for typein - from an input element, add a label 
    addLabel(event){
        this.labels.push(event.target.value) // push to labels array
        event.target.value = '' // clear input
        // console.log("at least enter works") // test
    },
    editItem(){
        // attempt 1 - use a simple prompt
        let editedText = prompt("Change to:");
        return editedText;
        // attempt 2 - add input field, and on click capture input, remove input field and return input
        // ...
    },
    showNumber(payload){
        // need to pass back to DOM in AllCategories.vue
        console.log(payload + 1)
    }
  },
  // <<< existing otto code methods
    computed: {
        filteredRvws(){
            return this.rvws.filter(rvw => {
                return rvw.body.match(this.searchTerm) || rvw.title.match(this.searchTerm)
                // where match is built in method
            })
        },
        filteredCats(){
            console.log(this.categories)
            return this.categories.filter(categ => {
                return categ.match(this.searchTermCat)
            })
        },
        filteredLabs(){
            console.log(this.labels)
            return this.labels.filter(label => {
                return label.match(this.searchTermLab)
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
/* CSS RESET */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*  */
/*  */
/*  */

/* VUE JS CTRL DIV */

/* #app { */
    /* margin: 0 auto; */
    /* text-align: center; */
/* } */

/* GENERAL QUICK AND DIRTY STYLING */

body {
    font-family: sans-serif;
    font-size: 1em;
    line-height: 2em;
    margin: 1%;
}

h1 {
    font-size: 2em;
    line-height: 2em;
    color: #ff4c4c; 
    padding: 0; 
    /* text-align: center; */
    vertical-align: middle;
    width: 100%;
    width: 40%;
}

h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    color: #333;
}

h3 {
    text-align: left;
    margin: 3% 0;
}

ul {
    list-style-type: square;
    list-style-position: inside;
    text-align: left;
    /* width: 50%; */
}

.inline-block h2 {
    display: inline;
}

.spacer-gentop {
    margin-top: 3em;
}
.spacer-bottom {
    margin-bottom: 3em;
}

/* GLOBAL NAV */

.topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a,
  .topnav ul li {
    float: right;
    color: #0EBFE9;
    /* text-align: center; */
    padding: 1% 3%;
    text-decoration: none;
    font-size: 1em;
  }
  
  .topnav a:hover,
  .topnav ul li:hover {
    background-color: #ff4c4c;
    color: white;
  }
  
  .topnav a.active,
  .topnav ul li.active {
    background-color: #ff4c4c;
    color: white;
    font-size: 1.9em;
    float: left;
  }

  #btm a,
  #btm ul li {
    display: inline-block;
    float: none;
    text-align: center;
    width: 100%;
  }

/* HERO IMG */

.hero { /* not working */
    position: relative;
    background-color: #0EBFE9;
    padding-bottom: 33%;
    /* margin: 0 auto; */
    /* width: 100%;
    height: 75%;
    color: white;
    background-color: blue;
    position: relative;
    left: 10%;
    top: 60%; */
    /* background: url("dog.jpg") no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: lighten; */
}

.hero h2 {
    padding: 1%;
    font-size: 1.5em;
    text-align: center;
    /* top: 5%;
    left: 5%;
    transform: translateX(-5%);
    transform: translateY(-5%); */
    /* width: 60%; */
    color: white;
}

.content-block input {
    display: block;
    width: 33%;
    /* margin: 1% auto; */
}

/* DEMO */
button {
    background-color: #333;
    border: none;
    color: white;
    /* padding: 0.4em 0.5em; */
    padding: 5px 10px; /* make responsive */
    /* text-align: center; */
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    /* margin: 0.5em 0.4em; */
    margin: 10px 5px; /* make responsive */
    cursor: pointer;
}

/* CREATE A NEW TAXONOMY */
.content-block { /* not sure why but vue does not seem to like this cls */
    width: 90%;
    /* height: 100%; *//* seems to just fix the width and make it inflexible */
    margin: 100% 0;
    padding: 1%;
    background-color: #C0C0C0;
}

.content-block p {
    text-align: left;
}

.typein-input {
    margin-left: 0;
    margin-top: 3%;
    display: block;
}

.typein-list {
    list-style-type: none;
}

.chip {
    display: block;
    width: fit-content; /* cool! */
    padding: 0 1em;
    margin: 0.1em 0;
    height: 1.5em;
    height: 100%;
    font-size: 1em;
    line-height: 1.5em;
    border-radius: 25px;
    background-color: #f1f1f1;
}

.mock-chip {
    display: inline-block;    
}

.cat {
    background-color: #ff4c4c;
    font-weight: 600;
}

.lab {
    background-color: #0EBFE9;
    color: white;
}

.editbtn {
    padding-left: 10px;
    /* font-weight: bold; */
    font-size: 1em;
    cursor: pointer;
}

.editbtn:hover {
    color: #000;
}

.closebtn {
    padding-left: 10px;
    /* font-weight: bold; */
    float: right;
    font-size: 1em;
    cursor: pointer;
}

.closebtn:hover {
    color: #000;
}

/* SUNDRY */

.canvas {
    width: 300px;
    height: 300px;
    /* margin: 1% auto; */
    background-color: #0EBFE9;
}

.one {
    color: #0EBFE9;
}

.two {
    text-decoration: line-through;
}

/* tips */
    /* softish red // hex code - #ff4c4c */
    /* bright blue // hex code - #0EBFE9 / rgb code - (14, 191, 233) */
    /* to center */
        /* left: 50%; */
        /* transform: translateX(-50%); */
</style>

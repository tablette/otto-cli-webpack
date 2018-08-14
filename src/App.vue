<template>
  <div id="app">
    <!-- when we request a certain page this is where that component is loaded in --><!-- routes are set up in index.js in router folder -->
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
      //
  },
  data () {
    return {
      /* use */ apology: `Sorry, we haven't learned that trick yet.`
    }
  },
  methods: {
    // // just for quick access to ready-made event properties
    // logEvent(e){ // e = optional parameter: event object - call whatever you want e.g. e OR evt OR event
    //     console.log(e);
    // }
  },
    computed: {
        filteredRvws(){ // for rvws
            return this.rvws.filter(rvw => {
                return rvw.body.match(this.searchTerm) || rvw.title.match(this.searchTerm)
                // where match is built in method
            })
        }
    },
    created(){ // for rvws
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

/*
  ========================================
  Notes
  ========================================
*/

/* You can add "scoped" attribute to opening style tag in any component to limit CSS to that component. However, Please use classes rather than scoped style wherever possible. */

/*
  ========================================
  ========================================
  ========================================
  CSS Reset
  ========================================
  ========================================
  ========================================
*/

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

/*
  ========================================
  ========================================
  ========================================
  OTTO Styles
  ========================================
  ========================================
  ========================================
*/

/*
  ========================================
  General
  ========================================
*/

#app {
    font-family: sans-serif;
    font-size: 1em;
    line-height: 2em;
    margin: 1%;
}

h1 {
    font-size: 2em;
    line-height: 2em;
    color: #05B2DC; 
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
    /* text-align: left; */
}

button {
    background-color: #333;
    border: none;
    color: white;
    padding: 0.5em 1em;
    text-decoration: none;
    font-size: 1em;
    margin: 1% 0;
    cursor: pointer;
}

.spacer-gentop { /* do not keep these */
    margin-top: 3%;
}
.spacer-bottom { /* do not keep these */
    margin-bottom: 3%;
}

/*
  ========================================
  Chips
  ========================================
*/

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

/*
  ========================================
  Global Navigation
  ========================================
*/

.topnav {
    overflow: hidden;
    background-color: #031a6b;
  }
  
  .topnav a, /* router-link interpreted as a */
  .topnav ul li {
    float: right;
    color: #05B2DC;
    padding: 1% 3%;
    text-decoration: none;
  }
  
  .topnav a:hover,
  .topnav ul li:hover {
    background-color: #05B2DC;
    color: white;
  }
  
  .topnav a.active,
  .topnav ul li.active {
    background-color: #05B2DC;
    color: white;
    font-size: 2em;
    float: left;
  }

  #btmnav a,
  #btmnav ul li {
    display: inline-block;
    float: none;
    text-align: center;
    width: 100%;
  }

/*
  ========================================
  Hero Image
  ========================================
*/

.hero {
    background-color: #333;
    padding-bottom: 33%; /* temp to enlarge area */
    /* add img */
    background-size: cover;
}

.hero h2 {
    padding: 1%;
    text-align: center;
    color: white;
}

/*
  ========================================
  Create a New Taxonomy / Update an Existing Taxonomy
  ========================================
*/

/* resume CSS cleanup here */

.typein-input {
    margin-left: 0;
    margin-top: 3%;
    display: block;
}

.typein-list {
    list-style-type: none;
}

.cat {
    background-color: #031a6b;
    color: white;
    font-weight: 600;
}

.lab {
    background-color: #05B2DC;
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
    background-color: #05B2DC;
}

.one {
    color: #05B2DC;
}

.two {
    text-decoration: line-through;
}

/* see palette */
/* to center:
    left: 50%;
    transform: translateX(-50%); */
</style>

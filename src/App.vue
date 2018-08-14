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

/* NOTE: You can add "scoped" attribute to opening style tag limit CSS to this component only */

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

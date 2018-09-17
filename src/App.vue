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

body,
#app {
    font-family: 'Arvo', sans-serif;
    font-size: 1em;
    line-height: 2em;
    /* margin: 1%; */
    height: 100%;
}
.about {
    height: 100%;
}

.content {
    margin: 3% 1%;
    margin-bottom: 3em;
    height: 100%;
}

.content p {
    margin-top: 1%;
    margin-bottom: 1%;
}

.content li {
    list-style-type: none;
}

h1 {
    font-size: 2em;
    line-height: 2em;
    color: #05B2DC;
    text-align: center; 
}

h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    color: #333;
    margin-top: 3%;
}

h3 {
    text-align: left;
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
    /* padding: 0.5em 1em; */
    text-decoration: none;
    font-size: 1em;
    /* margin: 1% 0; */
    cursor: pointer;
}

button, input {
    height: 2em;
    margin: 1%;
    vertical-align: middle;
}

.spacer-gentop { /* do not keep these */
    margin-top: 3%;
    padding-top: 3%;
}
.spacer-bottom { /* do not keep these */
    margin-bottom: 6%;
    padding-bottom: 6%;
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
  Header / Global Navigation
  ========================================
*/

.topnav {
    overflow: hidden;
    background-color: #031a6b;
  }
  
  .topnav a, /* router-link interpreted as a */
  .topnav ul li {
    font-size: 1em; /* why not otherwise inherited? */
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
  
  .footer-l > a {
      color: red;
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

a.router-link-exact-active {
    background-color: white;
}

/*
  ========================================
  Footer - Contact / Copyright
  ========================================
*/

#footer {
    background-color: #031a6b;
    /* overflow: hidden; */
    position: fixed;
    /* top: 0; */
    bottom: 0;
    right: 0;
    left: 0;
    padding: 1% 3%;
    margin-top: 50px;
}

#footer a {
    text-decoration: none;
    color: #05b2dc;
}

#footer p {
    color: white;
}

.footer-l {
    float: left;
    margin-left: 1%;
    color: white;
}



.footer-r {
    float: right;
    margin-right: 1%;
}

/*
  ========================================
  Hero Image
  ========================================
*/

.hero {
    width: 100%;
    /* height: 25%; */
    /* padding-bottom: 50%; */
    height: 50vh;
    background-repeat: no-repeat, repeat;
    background-image: url("assets/desk.jpg");
    background-color: rgba(0, 0, 0, .3);
    background-size: cover;
}

.hero h1 {
    padding: 1%;
    text-align: center;
    color: #031a6b;
    height: 100%;
}

/*
  ========================================
  Create a New Taxonomy / Update an Existing Taxonomy
  ========================================
*/

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
    font-weight: 300;
}

.editbtn {
    padding-left: 10px;
    cursor: pointer;
}

.cat .editbtn:hover {
    color: #05b2dc;
}

.lab .editbtn:hover {
    color: #031a6b;
}

.closebtn {
    padding-left: 10px;
    float: right;
    font-size: 1em;
    cursor: pointer;
}

.cat .closebtn:hover {
    color: #05b2dc;
}

.lab .closebtn:hover {
    color: #031a6b;
}

/*
  ========================================
  Dragula
  ========================================
*/
/* .container {
    background-color: black;
} */

/* .wrapper {
    color: white;
} */

/* .container {
    background-color: yellow;
} */

/* see palette */
/* to center:
    left: 50%;
    transform: translateX(-50%); */


</style>

// import infrastructure stuff below
import Vue from 'vue'
// existing otto code import >>>
// import App from './App.vue' // not working, may not be nec
// <<< existing otto code import
import Router from 'vue-router'

// import components you need
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import QuickStart from '@/components/QuickStart'

// existing otto code filter >>> 
// create global filter
Vue.filter('snippet', value => { // snippet being post.title
  if(!value || typeof(value) != 'string') return ''
  // we need a val - 1st tests whether there is any value at all
  // we need a str - 2nd tests whether it is a string value
  // if either of these unwanted cases, return empty str + break
  // otherwise... // slice out the first X chars and add a ...
  if (value[300] === ' ') {
    value = `${value.slice(0,299)}...`
  } else {
    value = `${value.slice(0,300)}...`
  } // prob not the most efficient way to do this
  return value // and pass them back
  // some are shorter because they're shorter than 20 chars.
})
// <<< existing otto code filter

// existing otto code for new vue >>>
// new Vue({ // seems to be handled differently now
//   el: '#app',
//   render: h => h(App)
// })
// <<< existing otto code for new vue



// NEW ROUTING MAGIC BELOW

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // i.e. home otherwise forward slash whatever ('/About', etc.)
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/quickstart',
      name: 'QuickStart',
      component: QuickStart
    },
  ]
})

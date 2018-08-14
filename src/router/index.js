// **** IMPORT **** //
// infrastructure
import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import QuickStart from '@/components/QuickStart'
import Create from '@/components/Create'
import Update from '@/components/Update'
import TypeIn from '@/components/TypeIn'
import Scrape from '@/components/Scrape'
import Import from '@/components/Import'

// global filter (is used on rvws)
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

// **** ROUTING **** //
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
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/typein',
      name: 'TypeIn',
      component: TypeIn
    },
    {
      path: '/scrape',
      name: 'Scrape',
      component: Scrape
    },
    {
      path: '/import',
      name: 'Import',
      component: Import
    }
  ]
})

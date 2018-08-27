<template>
    <div class="topnav">
        <div class="main-nav"> <!-- "scoping" using regular css -->
            <router-link class="active" to="/">{{ title }}</router-link>  
            <router-link to="/signin">Sign In</router-link>
            <router-link to="/signup">Sign Up</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    // props: ['title'],
    data(){
        return {
            title: 'otto'
        }
    } // , methods: ...
}
</script>

<style>

</style>
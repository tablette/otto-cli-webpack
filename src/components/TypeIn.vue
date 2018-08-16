<template>
    <div>
        <Navbar />
        <div class="content">
        
            <h1>Type in OTTO Directly</h1>
            <p>Type in your website's existing categories and labels.<button v-on:click="toggle">{{ toggleButton }}</button></p>
            <p class="chip lab">{{ more }}</p>
            
            
            <div id="typein">
                
                <div>
                    <input v-on:keyup.enter="addCategory">add <div class="chip cat mock-chip">category</div>
                </div>
                <div>
                    <input v-on:keyup.enter="addLabel">add <div class="chip lab mock-chip">label</div>
                </div>
                
                <!-- all categories -->
                <div :categories="categories" :editItem="editItem"> <!-- borken >>> @nbr="showNumber" -->
                    <div id="all-categories">
                        <h2>All Categories</h2>
                        <!-- cycle through cateogries -->
                        <span><input type="text" v-model="searchTermCat"> filter </span>
                        <div v-for="(cat, index) in filteredCats" :key="index">
                            <!-- and render to browser -->
                            <span class="chip cat">
                                <!-- show number (is borken)-->
                                <!-- <span @click="number(index)">&#8258;</span> -->
                                <!-- display -->
                                {{ cat }}
                                <!-- edit -->
                                <span class="editbtn" v-on:click="categories.splice(index, 1, editItem())">&#10000;</span>
                                <!-- delete -->
                                <span class="closebtn" v-on:click="categories.splice(index, 1)">&times;</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- all labels -->
                <div :labels="labels" :editItem="editItem"><!-- borken >>> @nbr="showNumber" -->
                    <div id="all-labels">
                        <h2>All Labels</h2>
                        <!-- cycle through labels -->
                        <span><input type="text" v-model="searchTermLab"> filter </span>
                        <div v-for="(lab, index) in filteredLabs" :key="index">
                            <!-- and render to browser -->
                            <span class="chip lab">
                                <!-- show number (is borken) -->
                                <!-- <span @click="number(index)">&#8277;</span> -->
                                <!-- display -->
                                {{ lab }}
                                <!-- edit -->
                                <span class="editbtn" v-on:click="labels.splice(index, 1, editItem())">&#10000;</span>
                                <!-- delete -->
                                <span class="closebtn" v-on:click="labels.splice(index, 1)">&times;</span>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    
    <!-- test dragula --><!-- this works, so don't touch it and revert to this plus data "colOne: ['Dooney', 'Mokie']" prn -->
        <!-- <div class="wrapper"> -->
        <!-- <div class="container" v-dragula="colOne" bag="first-bag"> -->
            <!-- with click -->
            <!-- <div v-for="text in colOne" @click="onClick" :key="text">{{text}} [click me]</div> -->
        <!-- </div> -->
        <!-- <div class="container" v-dragula="colTwo" bag="first-bag"> -->
            <!-- <div v-for="text in colTwo" :key="text">{{text}}</div> -->
        <!-- </div> -->
        <!-- </div> -->
    <!-- test dragula -->

    <!-- real dragula -->
        <p>Card 1</p>
        <div class="wrapper">
            <div class="container" v-dragula="colOne" bag="first-bag">
            <!-- with click -->
                <div v-for="text in colOne" @click="onClick" :key="text">{{text}} [click me]</div>
            </div>
            <div class="container" v-dragula="colTwo" bag="first-bag">
                <div v-for="text in colTwo" :key="text">{{text}}</div>
            </div>
        </div>

        <p>Card 2</p>
        <div class="wrapper">
            <div class="container" v-dragula="colOne" bag="first-bag">
            <!-- with click -->
                <div v-for="text in colOne" @click="onClick" :key="text">{{text}} [click me]</div>
            </div>
            <div class="container" v-dragula="colTwo" bag="first-bag">
                <div v-for="text in colTwo" :key="text">{{text}}</div>
            </div>
        </div>

        <p>Card 3</p>
        <div class="wrapper">
            <div class="container" v-dragula="colOne" bag="first-bag">
            <!-- with click -->
                <div v-for="text in colOne" @click="onClick" :key="text">{{text}} [click me]</div>
            </div>
            <div class="container" v-dragula="colTwo" bag="first-bag">
                <div v-for="text in colTwo" :key="text">{{text}}</div>
            </div>
        </div>
    <!-- real dragula -->

    <p class="spacer-bottom"></p>
    
    <Footer />
    </div>
</template>

<script>
// need to import axios to get showing numbers to work
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'TypeIn',
    components: {
        Navbar, Footer
    },
    data(){
        return {
            categories: [],
            labels: [],
            searchTermCat: '',
            searchTermLab: '',
            toggleButton: 'More',
            more: ``, 
            colOne: ['Dooney', 'Mokie'],
            colTwo: ['Tiny', 'Bubba']
            // includesCategories: false,
            // doesNotIncludeCategories: true,
        }
    }, // end data
    methods: {
        // toggling - could be useful for preventing duplicate categories and labels
        // toggleY(){
        //     this.includesCategories = true
        // },
        // toggleN(){
        //     this.includesCategories = false
        // },
        // adding - from an input element, add a CATEGORY
        addCategory(event){
            this.categories.push(event.target.value) // push to categories array
            event.target.value = '' // clear input
            // console.log("at least enter works") // test
        },
        // adding - from an input element, add a label 
        addLabel(event){
            this.labels.push(event.target.value) // push to labels array
            event.target.value = '' // clear input
            // console.log("at least enter works") // test
        },
        editItem(){ // to edit a category or label // ideally, should be more sophisticated
            let editedText = prompt("Change to:");
            return editedText;
        },
        toggle(event){
           if (this.more === ``) {
               this.more = `Categories are global navigation items. These are present on every page of your site. Labels are local navigation items. These are visible only on the page of their corresponding global navigation item. If you are not sure whether you want an item to be a category or a label, make it a label. If you are not sure whether you want any of the items to be categories or labels, make them all labels.`
               this.toggleButton = "Hide"
            } else {
                this.more = ``
                this.toggleButton = "More"
            }
        }
        // showNumber(payload){ // for ordered lists // is borken
        //     console.log(payload + 1)
        // }
    }, // end methods
    computed: {
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
    }
}
</script>

<style>

</style>

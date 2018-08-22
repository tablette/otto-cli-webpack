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
    
    <!-- test draggable -->
        
        <!-- draggable categories - this is not needed for now ; assume categories are fixed -->
        <!-- <draggable class="drag-area drag-area-cats" v-model="categories" :options="{group:'people'}" @start="drag=true" @end="drag=false">
            <div class="chip cat array1" v-for="(element, index) in categories" :key="index">{{element}}</div>
        </draggable> -->
        
        <!-- dump labels to sort -->
        <draggable class="drag-area drag-area-labs" v-model="labels" :options="{group:'people'}" @start="drag=true" @end="drag=false">
            <div class="chip lab array2" v-for="(element, index) in labels" :key="index">{{element}}</div>
        </draggable>

        <!-- create empty draggable components, each headed with a fixed category -->
        <div v-for="(element, index) in categories" :key="index">
            <h3>{{element}}</h3>
            <draggable class="drag-area drag-area-empt" v-model="dummyLoop" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                <!-- dummy looping ??? i just want a series of empty components -->
                <div v-for="(element) in dummyLoop" :key="element">{{element}}</div>
                <!-- works fine, but get the contents of the dummyLoop array to go away once the first label is moved into the card-->
            </draggable>
        </div>
    <p class="spacer-bottom"></p>
    
    <Footer />
    </div>
</template>

<script>
// need to import axios to get showing numbers to work
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import draggable from 'vuedraggable'

export default {
    name: 'TypeIn',
    components: {
        Navbar, Footer, draggable
    },
    data(){
        return {
            categories: [],
            labels: [],
            searchTermCat: '',
            searchTermLab: '',
            toggleButton: 'More',
            more: ``, 
            myArray1: [
                {
                    id: 1,
                    name: 'Dooney'
                 },
                 {  id: 2,
                    name: 'Mokie'
                 }
            ],
            myArray2: [
                {
                    id: 3,
                    name: 'Linda'
                 },
                 {  id: 4,
                    name: 'Melissa'
                 }
            ],
            dummyLoop: ['move labels here']
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
            // console.log(categories) // test
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
        },
        onClick(){
            console.log("dog")
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
/* .array1 {
    background: yellow;
}
.array2 {
    background: green;
} */
.drag-area {
    display: block;
    min-height: 10px;
}
.drag-area-cats {
    min-height: 10px;
    background: yellow;
}
.drag-area-labs {    
    min-height: 10px;
    background: green;
}
.drag-area-empt {
    background: orange;
}
</style>

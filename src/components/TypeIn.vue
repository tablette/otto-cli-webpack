<template>
    <div>
        <h1>Type in OTTO Directly</h1>
        <Navbar />
        <p class="spacer-gentop"></p>
        
        <div id="typein">
            <h2>Type in OTTO directly</h2>
            <input class="typein-input" v-on:keyup.enter="addCategory">add <div class="chip cat mock-chip">category</div>
            <input class="typein-input" v-on:keyup.enter="addLabel">add <div class="chip lab mock-chip">label</div>
                    
            <p class="spacer-gentop"></p>
            
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
                    <p class="spacer-gentop"></p>
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
                    <p class="spacer-gentop"></p>    
                </div>
            </div>
            
            <p class="spacer-bottom"></p>
        </div>

    </div>
</template>

<script>
// need to import axios to get showing numbers to work
import Navbar from '@/components/Navbar'

export default {
    name: 'TypeIn',
    components: {
        Navbar
    },
    data(){
        return {
            categories: [],
            labels: [],
            searchTermCat: '',
            searchTermLab: '',
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

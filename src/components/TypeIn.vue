<template>
    <div>
        <Navbar />
        <div class="content">
        
            <h1>Type in OTTO Directly</h1>
            <p>Type in your website's existing categories and labels.<button v-on:click="toggle">{{ toggleButton }}</button></p>
            <p class="chip lab">{{ more }}</p>
            
            
            <div id="typein">
                
                <!-- consider single input box, since the whole purpose is to sort the navigation items -->
                <div class="input-field">
                    <input v-on:keyup.enter="addCategory">add <div class="chip cat mock-chip">category</div>
                </div>
                <div class="input-field">
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
        
        <div class="card-container">
            <!-- dumped categories -->
            <div class="card-item">
                <h1>Categories</h1>
                <draggable class="drag-area drag-area-cats card" v-model="categories" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <div class="chip cat array1" v-for="(element, index) in categories" :key="index">{{element}}</div>
                </draggable>
            </div>

            <!-- dumped labels -->
            <div class="card-item">
                <h1>Labels</h1>
                <draggable class="drag-area drag-area-labs card" v-model="labels" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <div class="chip lab array2" v-for="(element, index) in labels" :key="index">{{element}}</div>
                </draggable>
            </div>
            <h1>Cards</h1>
        </div>
        
        <!-- need to create cards programmatically based on number of categories or user crud ; just mocking up three for now -->
        <!-- need to capture final card sort data in suitable data structures -->
        <!-- need to push final card sort data to back end -->
        <!-- need to style -->
        <!-- need to show elements only when the user needs to see them -->
        <!-- need to make at least bilingual probably changing data structure of cats/labs to objects -->
        <!-- need to enable web-scraping -->
        <!-- need to enable file import using lorilla tutorial -->
        <div class="card-container">
            
            <!-- empty card 1 -->
            <div class="card-item">
                <h1>Empty Card 1</h1>
                <draggable class="drag-area card" v-model="emptyCard1" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <div class="chip array1" v-for="(element, index) in emptyCard1" :key="index">{{element}}</div>
                </draggable>
            </div>

            <!-- empty card 2 -->
            <div class="card-item">
                <h1>Empty Card 2</h1>
                <draggable class="drag-area card" v-model="emptyCard2" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <div class="chip array1" v-for="(element, index) in emptyCard2" :key="index">{{element}}</div>
                </draggable>
            </div>

            <!-- empty card 3 -->
            <div class="card-item">
                <h1>Empty Card 3</h1>
                <draggable class="drag-area card" v-model="emptyCard3" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                    <div class="chip array1" v-for="(element, index) in emptyCard3" :key="index">{{element}}</div>
                </draggable>
            </div>

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
            cardLoop: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            cardFillerLoop: ['', '', '', '', '', '', '', '', ''],
            cards: [],
            emptyCard1: [],
            emptyCard2: [],
            emptyCard3: [],
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
            this.createCard() // run this function
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
        },
        createCard(){
            console.log("you've called the function. now what?")
            let newCard = 'newcard'
            this.cards.push(newCard)
            console.log(this.cards)
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
.cards {
    background: yellow;
}
.cardcat {
    min-height: 10px;
    background: goldenrod;
}
.cardlab {
    min-height: 10px;
    background: fuschia;
}
.testing {
    min-height: 10px;
    background: aquamarine;
}
.drag-area:first-line { /* styles as category */
    color: red;
}
.card {
    min-height: 200px;
    margin-left: 50px; 
    margin-right: 50px;
}
.card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

/* green line goes away! */
input:not([type]):focus:not([readonly]), input[type="text"]:not(.browser-default):focus:not([readonly]), input[type="password"]:not(.browser-default):focus:not([readonly]), input[type="email"]:not(.browser-default):focus:not([readonly]), input[type="url"]:not(.browser-default):focus:not([readonly]), input[type="time"]:not(.browser-default):focus:not([readonly]), input[type="date"]:not(.browser-default):focus:not([readonly]), input[type="datetime"]:not(.browser-default):focus:not([readonly]), input[type="datetime-local"]:not(.browser-default):focus:not([readonly]), input[type="tel"]:not(.browser-default):focus:not([readonly]), input[type="number"]:not(.browser-default):focus:not([readonly]), input[type="search"]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid black;
    -webkit-box-shadow: 0 1px 0 0 black;
    box-shadow: 0 1px 0 0 black;
}

</style>

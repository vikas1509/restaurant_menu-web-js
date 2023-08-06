const data =[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": true,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];


let  filters = {
    type:"all",
    rating:''
}
// const ratingFilter=document.getElementById("rating-filter");
// let ratingRadioSelectors = ratingFilter.getElementByTagName("input");

function filterResults(){
    let {type, rating} =filters ;
   return  data.filter((recipe)=>{
       let isThisFiltered = true;
       isThisFiltered &&= type =="all" || (type===recipe.type);
       isThisFiltered &&=rating==="" || (rating==="4+" ? recipe.rating >4 : recipe.rating<4)
       return isThisFiltered;
    })
}
function cleanContainer(){
    cardsContainer.innerHTML="";
}


function changeFilterObject(newFilter){
    filters={...filters, ...newFilter}
    let filteredResults=filterResults();
    cleanContainer();
    addRecipesOntoContainer(filteredResults)
}
 
function onChangeRatingFilter(input) {
    const selectedValue = input.value;
    changeFilterObject({ rating: selectedValue });
  }

function filterByType(filterType){
     
    changeFilterObject({type:filterType})
}
const cardsContainer= document.getElementById("cards-container");
/* <div class="card">
<img src="./rounded.jpg" alt="">
<span class="tag" >veg</span>

<div  class="name-container">
    <p>Russian Salad</p>
    <div class="rating-container">
        <span class="material-symbols-rounded">star</span>
    <span class="rating-text">4.5 </span>
    
    </div>

</div>

<div class="buttom-container">
    <p class="time">40min</p>
    <div>
        <span class="material-symbols-rounded">favorite</span>
        <span class="material-symbols-rounded">comment</span>
    </div>
</div>
</div> */

function addRecipesOntoContainer(list){
 
    list.forEach((recipe) => {

        const card = document.createElement("div");
        card.className="card";
        card.innerHTML=`
        <img src="${recipe.imageSrc}" alt="">
        <span class="tag" >${recipe.type}</span>
        
        <div  class="name-container">
            <p>${recipe.name}</p>
            <div class="rating-container">
                <span class="material-symbols-rounded">star</span>
            <span class="rating-text">${recipe.rating}</span>
            
            </div>
        
        </div>
        
        <div class="buttom-container">
            <p class="time">${recipe.time}</p>
            <div class="action-container"> 
            <span class="material-symbols-rounded ${recipe.isLiked? "liked":""}">favorite</span>
            <span class="material-symbols-rounded">comment</span>
        </div>
        </div>`
        
cardsContainer.appendChild(card);


    })
}

addRecipesOntoContainer(data);



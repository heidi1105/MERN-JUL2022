// Javascript -- web vs node



// ECMA


// ------------- Hoisting -------------
console.log(cat)
var cat ="pepper"
console.log(cat)
// step 1: define cat as undefined
// step 2: define cat as Pepper


//  ------------- const & let ------------
let food = "duck"

for(let i=0; i<10; i++){
    console.log(i)
}

const skills = ["debugging", "sleeping", "brewing coffee"] //  array is memory address
skills.push("Tetris")
skills[0] = "fixing bugs"
console.log(skills)

// skills = "debugging" // reassign skills to another memory address for another array

// const : variables that will not get reassigned
// let: variables that can get reassigned



// ------------- scope ------------
let myName = "Heidi"
function changeName(){ 
    let myName = "Pepper"
    myName = "Chen"  // search for the variables inside local scope, then the global one
    console.log(myName)
}
console.log(myName) // Heidi
changeName() // Chen
console.log(myName) // Heidi

// ------------- destructuring ------------
const post = {
    title: "First day in MERN",
    viewers: 1000,
    likes: 500,
    description: "An awesome day with MERN. It works",
    hashtags: ["excellent", "great", "fun"]
}
console.log(post)

const {title : newTitle, viewers, description, createdAt} = post
// create  -- const newTitle
// find post.title
// assign  post.title into newTitle



// const title = post.title
// const viewers = post.viewers
// const likes = post.likes
console.log(newTitle)
console.log(viewers)
console.log(description)
console.log(createdAt)

const trips = ["Japan", "Spain", "France", "Norway"] // memory location
console.log(trips)

const [firstCountry, , thirdCountry] = trips
console.log(firstCountry)
console.log(thirdCountry)

// ------------- spread/rest ------------
// const tripsCopy = trips; // create tripsCopy referring to the same array
const tripsCopy = [...trips] // create a new array, put all elements in trips into this array
tripsCopy.push("Seoul")
trips.push("Canada")
console.log(tripsCopy)
console.log(trips)

const tripsWithThailand = [ ...trips, "Thailand"]
console.log(tripsWithThailand)

const postCopy = { ...post } // create a new object, put all key/value pair of post into it
postCopy.title= "new title"
console.log(postCopy)
console.log(post)

const newTitlePost = {  viewers: 10, ...post, title: "new Title" } 
// viewers will be overridden , 
// but new title will override the post title
/* 
newTitlePost:{
    viewers: 1000,
    title: "new Title",
    .....,
}
*/
console.log(newTitlePost)


// ------------- arrow function ------------
// normal function
function printHello(){
    console.log("Hello, Winter")
}  // (){} --> () => 

// arrow function
const printHello2 = () =>{
    console.log("Hi, Winter")
}

// normal
function changePrice(price, discount){
    return price * discount
}

// arrow - longhanded ( curly + "return")
const changePrice2 = (price, discount) =>{
    return price * discount
}

// arrow - shorthanded ( NO CURLY!!!!!!!)
const changePrice3 = (price, discount) => price*discount

const changePrice4 = (price, discount) => (
    price*discount
)


console.log(changePrice(100, 0.9))
console.log(changePrice2(100, 0.8))
console.log(changePrice3(100, 0.7))
console.log(changePrice4(100, 0.6))

// ------------- ternary operator ------------
// If...else
let rating = 8
if(rating>7){ // condition
    console.log("This is a good movie") // yes-statement
}else{
    console.log("This is a terrible movie") // no-statement
}

// (condition)? yes-statement : no-statement

(rating>7)?
    console.log("This is a good movie2"):
    console.log("This is a terrible movie2")


// IF..... short-circuited logical operator &&
rating>7&&console.log("This is great")
const likes = 100

rating>7 && likes>10 && console.log("This is awesome")

if(rating >7){
    console.log("rating over 7")
}else if(rating > 5){
    console.log("medium rating")
}else{
    console.log("terrible rating")
}

rating = 6;

(rating>7)?
    console.log("rating over 7"):
    (rating>5)?
    console.log("medium rating"):
    console.log("terrible rating")
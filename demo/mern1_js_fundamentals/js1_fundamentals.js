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

const {title, viewers, description, createdAt} = post
// const title = post.title
// const viewers = post.viewers
// const likes = post.likes
console.log(title)
console.log(viewers)
console.log(description)
console.log(createdAt)

const trips = ["Japan", "Spain", "France", "Norway"] // memory location
console.log(trips)

const [firstCountry, , thirdCountry] = trips
console.log(firstCountry)
console.log(thirdCountry)

// ------------- spread/rest ------------


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

// arrow - longhanded
const changePrice2 = (price, discount) =>{
    return price * discount
}

// arrow - shorthanded
const changePrice3 = (price, discount) => price*discount

const changePrice4 = (price, discount) => (
    price*discount
)


console.log(changePrice(100, 0.9))
console.log(changePrice2(100, 0.8))
console.log(changePrice3(100, 0.7))
console.log(changePrice4(100, 0.6))

// ------------- ternary operator ------------




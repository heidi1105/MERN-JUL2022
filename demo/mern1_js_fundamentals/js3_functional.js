// ------ callback functions -------
const makingPurchase = (person, price) =>{ 
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

const parentFunction = (callback, person, price) =>{
    // callback: function
    console.log("Welcome to the store")
    callback(person, price)
}

parentFunction(makingPurchase, "Christian", 1000)
parentFunction(returningItem, "Max", 40)

const parentCurrying = (callback)=>{
    console.log("Welcome to the currying store")
    return (person, price) =>{
        callback(person, price)
    }
}

parentCurrying(makingPurchase)("Heidi", 10)


// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    {id: 3, itemName: "wetfood", price: 1.29, shops: ["petco", "Trader Joes"]}, 
    {id: 5, itemName: "red gamer chair", price: 300, shops: ["amazon", "Best Buy"]},
    {id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"]},
    {id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"]}, 
    {id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"]}     
])



// ------ .map & .filter -------
// .map()
// DEMO: return an array of prices
const prices = shoppingList.map((item)=>{
    return item.price
})

const prices2 = shoppingList.map((item, i)=> `${i} : ${item.price}`)

// NOT RECOMMENDED FOR MAP
const prices3 = shoppingList.map(function(item){
    return item.price
})
// 1. loop through each element inside the array
// 2. grab the returned data (item.price )
// 3. Make an array using the above returned data


console.log(prices)
console.log(prices2)
console.log(prices3)

// TODO: return a list of item names (write your own code)
// demonstrated in AM session


// .filter()
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = shoppingList.filter((item)=>item.price<100)
console.log(cheapItems)
// 1. loop through each element inside the array
// 2. return that element if the condition is true
// 3. Make an array using the above returned data

// DEMO: return a list of cheap items with only the names
const cheapItemNames = shoppingList
    .filter((item)=>item.price<100)
    .map((item)=>item.itemName)


// TODO: given a deleteId, return a list of items without the item of that matching id 
// will be demonstrated in PM session (write your own code)
const deleteId = 2


// TODO: given an array index, return a list of items without the item of that index 
// will be demonstrated in PM session (write your own code)
const deletePos = 0


// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean 
// will be demonstrated in PM session (write your own code)



// concat ,  spread
const addTV = shoppingList.concat([{itemName: "TV", price: 1299, shop: ["BestBuy"]}])
console.log(addTV)

const addGame = [...shoppingList, {itemName: "tetris", price: 29, shop: ["BestBuy", "amazon"]}]
console.log(addGame)

// get the first 2 items
const firstTwoItems = [...shoppingList.slice(0, 2)]
console.log(firstTwoItems)

// TODO: use slice to exclude array position 3



// splice vs slice
const array=[1,2,3,4,5];
console.log(array.splice(1, 2)) // delete 2 elements from array[1]
console.log(array)

const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)


// -------sorting -----------
console.log(cheapItemNames)
const sortedItemNames = cheapItemNames.sort()
console.log(sortedItemNames)

console.log(prices)
const sortedPrices = prices.sort((a, b)=> a-b)
console.log(sortedPrices)

const sortedByName = [...shoppingList].sort((a, b)=> a.price > b.price? 1: -1)
console.log(sortedByName)



const express = require("express")
const app = express()


// temporary database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// express configure - allows POST 
app.use( express.json() );
// recognize JSON Object
app.use( express.urlencoded({ extended: true }) );
// to recognize the incoming Request Object as strings or arrays. 



// Read ALL --- GET ALL
// app.get --> takes 2 arguments: (path, function (request, response))
app.get("/api/users", (req, res)=>{
    // request: what is received from this call
    // response: what should be sent out
    res.json(users)
})

// READ ONE --- GET ONE ITEM
app.get("/api/users/:id", (req, res)=>{
    const idFromParams = req.params.id
    res.json(users[idFromParams])
})

// Create --- POST
app.post("/api/users", (req, res)=>{
    users.push(req.body)
    res.json(req.body)
})

// Update --- PUT ( read one + create)
// 1. get the specific with params 2. update the info with the req.body
app.put("/api/users/:id", (req, res)=>{
    const idFromParams = req.params.id
    users[idFromParams] = req.body
    res.json(users[idFromParams])
})

// Delete --- DELETE
app.delete("/api/users/:id", (req, res)=>{
    const idFromParams = req.params.id
    users.splice(idFromParams, 1)
    res.json(users)
})



app.listen(8000, ()=>console.log("Listening to port : 8000"))
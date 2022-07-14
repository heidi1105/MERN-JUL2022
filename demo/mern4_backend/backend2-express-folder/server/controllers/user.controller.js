// temporary database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// Read ALL --- GET ALL
module.exports.allUsers = (req, res)=>{
    res.json(users)
}

// READ ONE --- GET ONE ITEM
module.exports.oneUser = (req, res)=>{
    const idFromParams = req.params.id
    res.json(users[idFromParams])
}

// Create --- POST
module.exports.addUser =(req, res) =>{
    users.push(req.body)
    res.json(req.body)
}

// Update --- PUT ( read one + create)
module.exports.updateUser =(req, res) =>{
    const idFromParams = req.params.id
    users[idFromParams] = req.body
    res.json(users[idFromParams]) 
}

// Delete --- DELETE
module.exports.deleteUser =(req, res) =>{
    const idFromParams = req.params.id
    users.splice(idFromParams, 1)
    res.json(users)
}
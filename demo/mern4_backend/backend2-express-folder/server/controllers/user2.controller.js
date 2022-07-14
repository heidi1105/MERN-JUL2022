// temporary database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports ={
    allUsers : (req, res)=>{
        res.json(users)
    },
    oneUser: (req, res)=>{
        const idFromParams = req.params.id
        res.json(users[idFromParams])
    },

    addUser : (req, res) =>{
        users.push(req.body)
        res.json(req.body)
    },

    updateUser : (req, res) =>{
        const idFromParams = req.params.id
        users[idFromParams] = req.body
        res.json(users[idFromParams]) 
    },
    deleteUser : (req, res) =>{
        const idFromParams = req.params.id
        users.splice(idFromParams, 1)
        res.json(users)
    }
}
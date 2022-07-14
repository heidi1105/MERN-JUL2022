const express = require("express")
const app = express()

// express configure - allows POST 
app.use( express.json() );
// recognize JSON Object
app.use( express.urlencoded({ extended: true }) );
// to recognize the incoming Request Object as strings or arrays. 

const Routes = require('./routes/user.routes')
Routes(app)


app.listen(8000, ()=>console.log("Listening to port : 8000"))
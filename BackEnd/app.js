const express = require('express')
const mongoose = require('mongoose')
const {dbLink} = require('./database/DbLink')

const app = express()
app.listen(3000)



const router = express.Router();
const getuser = (req,res)=>{
   res.json({
    message:"user"
   })
}

router.
    route('/user')
    .get(getuser)

app.use(router)


mongoose.connect(dbLink)
.then((db)=>{
    console.log('dbConnected')
}).catch((error)=>{
    console.log({error})
})
import express from 'express'
const {dbConnect} = require('./src/database/Database')
const dotenv = require("dotenv");
const userModel = require('./src/models/User')
dotenv.config();
const PORT = process.env.PORT;
var cors = require("cors");

const app = express()

app.use(express.json())

app.use(cors());
dotenv.config();
const router = express.Router();

app.listen(PORT)

router.post('/signup',(req,res,next)=>{
  console.log(req.body)
  res.statusCode = 200
  res.send({
    status:"Good"
  })

})
app.use(router);
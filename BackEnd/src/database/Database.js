const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const dbLink = process.env.DB_LINK

const dbConnect =async () => {
 await  mongoose.connect(dbLink)
    .then(async() => {
      console.log("dbConnected");
    })
    .catch((error) => {
      console.log({ error });
    });
};
module.exports = { dbConnect };

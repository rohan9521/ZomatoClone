const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const dbLink = process.env.DB_LINK

const dbConnect = (sendData) => {
  console.log(dbLink)
  mongoose.connect(dbLink)
    .then(async() => {
      console.log("dbConnected");
      await sendData()
    })
    .catch((error) => {
      console.log({ error });
    });
};
module.exports = { dbConnect };

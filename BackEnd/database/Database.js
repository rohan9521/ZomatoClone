const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const dbLink = process.env.DB_LINK

const dbConnect = () => {
  console.log(dbLink)
  mongoose.connect(dbLink)
    .then((db) => {
      console.log("dbConnected");
    })
    .catch((error) => {
      console.log({ error });
    });
};
module.exports = { dbConnect };

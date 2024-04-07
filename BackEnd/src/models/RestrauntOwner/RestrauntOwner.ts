import { validate as emailValidator } from "email-validator";

const mongoose = require("mongoose");

const resstrauntOwnerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value: string) => {
      return emailValidator(value);
    },
    houseNumber: { type: String, required: true },
    area: { type: String, required: true },
    locality: String,
    landmark: String,
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  profilePic: String,
  orderIdList: [{ type: String }],
});

const resstrauntOwnerModel = mongoose.model(
  "resstrauntOwnerSchema",
  resstrauntOwnerSchema
);

export = resstrauntOwnerModel;

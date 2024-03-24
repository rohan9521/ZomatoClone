const { default: mongoose } = require("mongoose");

const deliveryPersonSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    houseNumber: { type: String, required: true },
    area: { type: String, required: true },
    locality: String,
    landmark: String,
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  mobileNumber: { type: String, required: true },
  profilePic: String,
  orderIdList: [{ type: String }],
});

const deliveryPersonModel = mongoose.model(
  "deliveryPersonModel",
  deliveryPersonSchema
);

module.exports = { deliveryPersonModel };

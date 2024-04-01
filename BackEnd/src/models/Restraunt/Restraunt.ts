const { default: mongoose } = require("mongoose");

const restrauntSchema = mongoose.Schema({
  name: { type: String, required: true },
  ownerId: { type: String, required: true, unique: true },
  address: {
    houseNumber: { type: String, required: true },
    area: { type: String, required: true },
    locality: String,
    landmark: String,
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  mobileNumber: { type: String, required: true, unique: true },
  restrauntPic: String,
  orderIdList: [{ type: String }],
});

const restrauntModel = mongoose.model("restrauntModel", restrauntSchema);

export = { restrauntModel };

const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
  endUserId: { type: String, required: true },
  deliveryPersonId: { type: String, required: true },
  price: { type: String, required: true },
  foodItemIdList: [{ type: String, required: true }],
  paymentType: { type: String, required: true },
  paymentStatus: { type: String, required: true},
});

const foodItemModel = mongoose.model("foodItemModel", userSchema);

module.exports = { foodItemModel };

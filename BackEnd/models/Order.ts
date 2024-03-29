const mongoose  = require("mongoose");

const orderSchema = mongoose.Schema({
  endUserId: { type: String, required: true},
  deliveryPersonId: { type: String, required: true },
  price: { type: String, required: true },
  foodItemIdList: [{ type: String, required: true }],
  paymentType: { type: PaymentType, required: true },
  paymentStatus: { type: PaymentStatus, required: true },
});

const foodItemModel = mongoose.model("foodItemModel", orderSchema);

export =  foodItemModel 

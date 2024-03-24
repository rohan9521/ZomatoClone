const { default: mongoose } = require("mongoose");

const foodItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  price: { type: String, required: true },
  restrauntId: { type: String, required: true },
  foodPicId: { type: String, required: true },
  catregory: FoodCategory,
});

const foodItemModel = mongoose.model("foodItemModel", userSchema);

module.exports = { foodItemModel };

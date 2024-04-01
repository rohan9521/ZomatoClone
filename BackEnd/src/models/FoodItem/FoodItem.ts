const mongoose = require("mongoose");

const foodItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  restrauntId: { type: String, required: true},
  foodImageUrl: { type: String, required: true },
  catregory: FoodCategory,
});

const foodItemModel = mongoose.model("foodItemModel", foodItemSchema);

export = foodItemModel

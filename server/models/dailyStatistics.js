const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const dailyStatisticsSchema = new Schema(
  {
    products: [{ code: String, quantity: Number, cost: Decimal128 }],
    profit: { type: Number, required: true },
    productionCost: { type: Decimal128, required: true },
    earned: { type: Number, required: true },
  },
  { timestamps: true }
);

const DailyStatistics = mongoose.model(
  "Daily Statistics",
  dailyStatisticsSchema
);

module.exports = DailyStatistics;
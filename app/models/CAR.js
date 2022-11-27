const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CAR = new Schema(
  {
    uid: {
      type: String,
      require: true,
    },
    // status:String,
    slot: {
      type: String,
      require: true,
    },
    // start:Date,
    // end:Date,
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: false,
    },
  }
);
module.exports = mongoose.model('CAR', CAR);

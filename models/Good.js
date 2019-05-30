const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Schema
const GoodSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  invoicenumber: {
    type: String,
    required: true
  },
  trucknumber: {
    type: String,
    required: true
  },
  cartoncontentqty: {
    type: String,
    required: false
  },
  cartonnumber: {
    type: String,
    required: true
  },
  cartonuom: {
    type: String,
    required: true
  },
  cartonlength: {
    type: String,
    required: true
  },
  cartonwidth: {
    type: String,
    required: true
  },
  cartonheight: {
    type: String,
    required: true
  },
  cartonopenstatus: {
    type: Boolean,
    required: false
  },
  cartondamagestatus: {
    type: Boolean,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Good = mongoose.model("goods", GoodSchema);

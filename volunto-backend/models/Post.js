const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postschema = mongoose.Schema({
  etitle: {
    type: String,
    required: true,
  },
  edescription: {
    type: String,
    required: true,
  },
  edate: {
    type: String,
    required: true,
  },
  etime: {
    type: String,
    required: true,
  },
  elocation: {
    type: String,
    default: "kathmandu",
  },
  ejoins: [{
    type: ObjectId,
    ref: "Users",
  }],
})

mongoose.model("Posts", postschema);

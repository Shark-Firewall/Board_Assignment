const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  creator: {
    type: String,
  },
  duration: {
    type: Number,
  },
  createdAt: {
    type: Date,
    expires: `{this.duration}m`,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);

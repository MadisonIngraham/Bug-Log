import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    reportedBy: { type: String, required: true }, //The provided name for who reported the bug
    closed: { type: Boolean, required: true, default: false },
    closedDate: { type: Date }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

export default Bug;

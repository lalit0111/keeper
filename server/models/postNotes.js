import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  key: Number,
  title: String,
  content: String
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
});

const PostNote = mongoose.model("PostNote", noteSchema);

export default PostNote;

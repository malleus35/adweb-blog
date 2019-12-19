const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    articlename: {
      type: String,
      required: true,
      unique: true
    },
    author: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String
    },
    contents: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

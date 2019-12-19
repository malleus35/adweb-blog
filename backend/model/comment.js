const CommentSchema = require("../schemaModels/comment.model");
const statusCode = require("../utils/statusCode");
const responseForm = require("../utils/responseForm");

module.exports = {
  readAll: async articleId => {
    const result = await CommentSchema.find({ articleId: articleId });

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  read: async commentId => {
    const result = await CommentSchema.findById(commentId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  create: async (articleId, { author, contents }) => {
    const newComment = new CommentSchema({
      articleId,
      author,
      contents
    });

    const result = await newComment.save();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  delete: async commentId => {
    const result = await CommentSchema.findByIdAndDelete(commentId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  update: async (commentId, { contents }) => {
    const result = await CommentSchema.findByIdAndUpdate(
      commentId,
      {
        contents
      },
      { omitUndefined: true }
    );

    return new Promise(async (resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else {
        resolve(responseForm.successTrue(statusCode.OK));
      }
    });
  }
};

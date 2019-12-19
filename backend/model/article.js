const ArticleSchema = require("../schemaModels/article.model");
const statusCode = require("../utils/statusCode");
const responseForm = require("../utils/responseForm");

module.exports = {
  readAll: async categoryId => {
    const result = await ArticleSchema.find({ categoryId: categoryId });

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  read: async articleId => {
    const result = await ArticleSchema.findById(articleId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  create: async (categoryId, { articlename, author, thumbnail, contents }) => {
    const newArticle = new ArticleSchema({
      categoryId,
      articlename,
      author,
      thumbnail,
      contents
    });

    const result = await newArticle.save();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  delete: async articleId => {
    const result = await ArticleSchema.findByIdAndDelete(articleId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  update: async (articleId, { articlename, author, thumbnail, contents }) => {
    const result = await ArticleSchema.findByIdAndUpdate(
      articleId,
      {
        articlename,
        author,
        thumbnail,
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

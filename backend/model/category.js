const CategorySchema = require("../schemaModels/category.model");
const statusCode = require("../utils/statusCode");
const responseForm = require("../utils/responseForm");

module.exports = {
  readAll: async () => {
    const result = await CategorySchema.find();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  read: async categoryId => {
    const result = await CategorySchema.findById(categoryId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  create: async ({ categoryname }) => {
    const newCategory = new CategorySchema({
      categoryname
    });

    const result = await newCategory.save();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  delete: async categoryId => {
    const result = await CategorySchema.findByIdAndDelete(categoryId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  update: async (categoryId, { categoryname }) => {
    const result = await CategorySchema.findByIdAndUpdate(
      categoryId,
      {
        categoryname
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

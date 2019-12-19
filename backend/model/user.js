const UserSchema = require("../schemaModels/user.model");
const statusCode = require("../utils/statusCode");
const responseForm = require("../utils/responseForm");

module.exports = {
  readAll: async () => {
    const result = await UserSchema.find();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  read: async (userId, password) => {
    const result = await UserSchema.findOne({
      userId,
      password
    });

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else if (result.length === 0)
        reject(responseForm.successFalse(statusCode.NOT_FOUND));
      else resolve(responseForm.successTrue(statusCode.OK, result));
    });
  },
  create: async ({ userId, password }) => {
    const newUser = new UserSchema({
      userId,
      password
    });

    const result = await newUser.save();

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  delete: async userId => {
    const result = await UserSchema.findByIdAndDelete(userId);

    return new Promise((resolve, reject) => {
      if (!result)
        reject(responseForm.successFalse(statusCode.INTERNAL_SERVER_ERROR));
      else resolve(responseForm.successTrue(statusCode.OK));
    });
  },
  update: async (userId, { password }) => {
    const result = await UserSchema.findByIdAndUpdate(
      userId,
      {
        password
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

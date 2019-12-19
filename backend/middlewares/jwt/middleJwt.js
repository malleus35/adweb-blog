const jwtUser = require("../../utils/jwt/jwtUser");
const statusCode = require("../../utils/statusCode");
const responseForm = require("../../utils/responseForm");

const middleJwt = {
  publish: async (req, res, next) => {
    //jwt token 발행
    const { userId } = req.body;
    const token = jwtUser.sign({ userId });
    req.body.token = token;
    next();
  },
  verify: async (req, res, next) => {
    const token = req.headers.token;
    const result = jwtUser.verify(token);

    if (result === -3) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .send(responseForm.successFalse(statusCode.UNAUTHORIZED));
    } else if (result === -2) {
      return res
        .status(statusCode.FORBIDDEN)
        .send(responseForm.successFalse(statusCode.FORBIDDEN));
    }
    console.log(result);

    if (!result) {
      return res
        .status(statusCode.NO_CONTENT)
        .send(responseForm.successFalse(statusCode.NO_CONTENT));
    }
    req.decoded = result;
    next();
  }
};

module.exports = middleJwt;

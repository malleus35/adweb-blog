const express = require("express");
const router = express.Router({ mergeParams: true });
const Article = require("../../../model/article");
const commentRouter = require("./comments");
const statusCode = require("../../../utils/statusCode");
const responseForm = require("../../../utils/responseForm");

const upload = require("../../../config/multer");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const categoryId = req.params.categoryId;
  Article.readAll(categoryId)
    .then(result => res.status(result.status).json(result))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error: " + err);
    });
});

router.get("/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  Article.read(articleId)
    .then(result => {
      console.log(result);
      res.status(result.status).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error :" + err);
    });
});

router.post(
  "/add",
  upload.single("image"), //사진 업로드 multer
  (req, res, next) => {
    //라우팅 및 데이터 전송
    const categoryId = req.params.categoryId;
    const thumbnail = req.file.location;
    const { articlename, author, contents } = req.body;

    if (!articlename || !author || !contents) {
      res
        .status(statusCode.NO_CONTENT)
        .json(responseForm.successFalse(statusCode.NO_CONTENT));
    }

    Article.create(categoryId, { articlename, author, thumbnail, contents })
      .then(result => {
        result.data = req.body.token;
        res.status(result.status).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
      });
  }
);

router.delete("/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  Article.delete(articleId)
    .then(result => res.status(result.status).json("Article deleted"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error :" + err);
    });
});

router.put("/update/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  const { articlename, author, thumbnail, contents } = req.body;
  Article.update(articleId, { articlename, author, thumbnail, contents })
    .then(result => res.status(result.status).json("Article updated!"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.use("/:articleId/comments", commentRouter);
module.exports = router;

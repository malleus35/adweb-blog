const express = require("express");
const router = express.Router({ mergeParams: true });

const Comment = require("../../../../model/comment");

const statusCode = require("../../../../utils/statusCode");
const responseForm = require("../../../../utils/responseForm");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const articleId = req.params.articleId;
  Comment.readAll(articleId)
    .then(result => res.status(result.status).json(result))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.get("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  Comment.read(commentId)
    .then(result => res.status(result.status).json(result))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.post("/add", (req, res, next) => {
  const articleId = req.params.articleId;
  const { author, contents } = req.body;

  if (!author || !contents)
    res
      .status(statusCode.NO_CONTENT)
      .json(responseForm.successFalse(statusCode.NO_CONTENT));

  Comment.create(articleId, { author, contents })
    .then(result => res.status(result.status).json("Comment added!"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.delete("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  Comment.delete(commentId)
    .then(result => res.status(result.status).json("Comment deleted"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});
router.put("/update/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  const { contents } = req.body;
  Comment.update(commentId, { contents })
    .then(result => res.status(result.status).json("Comment updated!"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

module.exports = router;

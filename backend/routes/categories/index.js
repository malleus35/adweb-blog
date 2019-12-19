const express = require("express");
const router = express.Router({ mergeParams: true });
const articleRouter = require("./articles");

const Category = require("../../model/category");

const statusCode = require("../../utils/statusCode");
const responseForm = require("../../utils/responseForm");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Category.readAll()
    .then(Categories => res.json(Categories))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.get("/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  Category.read(categoryId)
    .then(Category => res.json(Category))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.post("/add", (req, res, next) => {
  const { categoryname } = req.body;

  if (!categoryname) {
    res
      .status(statusCode.NO_CONTENT)
      .json("Error: " + responseForm.successFalse(statusCode.NO_CONTENT));
  }

  Category.create({ categoryname })
    .then(result => res.status(result.status).json("Category added!"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});

router.delete("/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  Category.delete(categoryId)
    .then(result => res.status(result.status).json("Category deleted"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});
router.put("/update/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const { categoryname } = req.body;
  Category.update(categoryId, { categoryname })
    .then(result => res.status(result.status).json("Category updated!"))
    .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).json("Error : " + err);
    });
});
router.use("/:categoryId/articles", articleRouter);
module.exports = router;

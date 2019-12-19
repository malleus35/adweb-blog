import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
//eslint-disable-next-line
const url = "http://localhost:5000/users";

const useStyles = makeStyles(theme => ({
  test: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%"
  },
  title: {
    flexGrow: 1
  },
  loginCard: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    boxShadow: "0 3px 6px rgba(0,0,0,0.19), 0 10px 15px rgba(0,0,0,0.23)",
    minWidth: "300px",
    margin: "10px auto",
    padding: "8%",
    zIndex: 1
  },
  textField: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
    "& label.Mui-focused": {
      color: "#57575F"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#57575F"
    },
    flexGrow: 1
  },
  otherButton: {
    margin: "10px auto",
    display: "inline-block",
    width: "180px",
    height: "50px",
    borderRadius: "30px",
    flexGrow: 1
  }
}));
function Show() {
  const [contents, setContents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { articleId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const getData = async articleId => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setContents(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `/categories/5de6490186bfe46f94f28c75/articles/${articleId}`
        );
        setContents({ ...response.data.data }); // 데이터는 response.data 안에 들어있습니다.
        console.log(response.data.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getData(articleId);
  }, []);

  if (loading)
    return (
      <Typography style={{ margin: "24px" }} variant="subtitle1">
        로딩중..
      </Typography>
    );
  if (!contents)
    return (
      <Typography style={{ margin: "24px" }} variant="h1">
        항목이 아직 없습니다.
      </Typography>
    );
  if (error) return <div>{error}</div>;

  const categorynames = {
    "5de6490186bfe46f94f28c75": "develop",
    "5de74344846bd575a6213dfe": "Daily"
  };

  return (
    <div className={classes.test}>
      <Card className={classes.loginCard}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h3"
            color="textPrimary"
          >
            {contents.articlename}
          </Typography>
          <Typography
            variant="button"
            style={{ margin: "10px", marginLeft: 0, display: "block" }}
          >
            Category: {categorynames[contents.categoryId]}
          </Typography>
          <Typography
            className={classes.textField}
            variant="body1"
            label="Post"
          >
            {contents.contents}
          </Typography>
          {/* <Button className={classes.otherButton}>Prev Article</Button>
          <Button className={classes.otherButton}>Next Article</Button> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Show;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "../components/CustomCard";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  link: { textDecoration: "none", color: "inherit" }
}));

function Daily() {
  const [contents, setContents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    const fetchContents = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setContents(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5000/categories/5de74344846bd575a6213dfe/articles/"
        );
        if (!response) setContents([]);
        else {
          setContents([...response.data.data]); // 데이터는 response.data 안에 들어있습니다.
          console.log(response.data.data);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchContents();
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
  // const contentLen = contents.length;

  return (
    <Grid container>
      {contents.map((content, index) => (
        <Link
          to={{
            pathname: `/show/${content._id}`
          }}
          key={index}
          className={classes.link}
        >
          <CustomCard
            xs={12}
            contentId={content._id}
            thumbnail={content.thumbnail}
            articlename={content.articlename}
            contents={content.contents}
            createdAt={content.createdAt.substring(0, 10)}
            width="1000px"
          ></CustomCard>
        </Link>
      ))}
    </Grid>
  );
}

export default Daily;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  // Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Typography
  // Button
} from "@material-ui/core";
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
    flexGrow: 1,
    marginBottom: "20px"
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
  cardContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
  list: { marginTop: "20px" },
  listItem: {}
}));
function Get() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Card className={classes.loginCard}>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            variant="h3"
            color="textPrimary"
          >
            Admin Page
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              style={{ margin: "20px 0px 0px 0px" }}
            >
              <MenuItem value={20}>Develop</MenuItem>
              <MenuItem value={30}>Daily</MenuItem>
            </Select>
            <FormHelperText>Select Category</FormHelperText>
          </FormControl>
          {/* <Button style={{ margin: "20px 0px" }}>Delete Items</Button> */}
          <List className={classes.list} component="nav">
            <ListItem button>
              {/* <Checkbox>Check</Checkbox> */}
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              {/* <Checkbox>Check</Checkbox> */}
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default Get;

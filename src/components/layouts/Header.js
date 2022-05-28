import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { headerDetails } from "./config";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: "3rem",
  },
  appBar: {
    height: "3rem",
  },
  title: {
    marginRight: "1rem",
  },
}));

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const classes = useStyles();

  const onLinkClick = (event, item) => {
    event.preventDefault();
    navigate(item.path);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            Hierarchy UI
          </Typography>

          {headerDetails.map((item) => {
            return (
              <button
                key={item.key}
                className="header-btn"
                onClick={(event) => onLinkClick(event, item)}
                name={item.name}
              >
                {item.label}
              </button>
            );
          })}
        </Toolbar>
      </AppBar>
    </>
  );
}

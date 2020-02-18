import React from "react";
import { Link, AppBar } from "@material-ui/core";

import logo from "../cook.svg";

const style = {
  width: "100px",
  height: "100px",
  margin: "30px"
};

function Nav() {
  return (
    <AppBar position="static">
      <Link to="/">
        <img src={logo} alt="logo" style={style} />
      </Link>
    </AppBar>
  );
}

export default Nav;

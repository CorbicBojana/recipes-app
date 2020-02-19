import React from "react";
import { Link, AppBar, Container } from "@material-ui/core";

import logo from "../cook.svg";

const style = {
  width: "100px",
  height: "100px",
  margin: "30px 0"
};

function Nav() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Link to="/">
          <img src={logo} alt="logo" style={style} />
        </Link>
      </Container>
    </AppBar>
  );
}

export default Nav;

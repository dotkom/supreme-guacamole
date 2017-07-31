import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    backgroundColor: "white",
    height: "3.5rem",
    width: "100%",
    maxWidth: "64rem",
    minWidth: "20rem",
    color: "0060A3",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
    align: "center"
  }
};

function NavigationButton({ children, link }) {
  return(
    <div as={Link} to={link} style={style.container}>
      { children }
    </div>
  )
}

export default NavigationButton;
import React from "react";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className="navbar navbar-dark bg-light">
      <div className="scoreDiv">
        {props.children}
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

const styles = {
  nav: {
    color: "white",
    fontSize: "50px"
  }
};

function Navbar() {
  return (
    <div class="navbar navbar-dark bg-dark" style={styles.nav}>
      <div class="scoreDiv">
        Score: {} | Top Score: {}
      </div>
    </div>
  );
}

export default Navbar;

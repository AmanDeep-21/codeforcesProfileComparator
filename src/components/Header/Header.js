import React from "react";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <div>
            Welcome to{" "}
            <img alt="code forces" src="/images/CodeForcesImage.png" /> Profile
            Comparator
          </div>
        </h1>
      </header>
    );
  }
}

export default Header;

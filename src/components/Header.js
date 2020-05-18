import React, { Component} from "react";
import "../style.css";

class Header extends React.Component{
    render(){
        return (
            <h1><center>Welcome to <img src = "/images/CodeForcesImage.png" /> Profile Comparator</center></h1>
        )
    }
}

export default Header;
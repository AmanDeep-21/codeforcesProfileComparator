import React, { Component } from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            position : this.props.position
        }
    }

    render(){
        let myFooterStyle = {
            position : this.state.position,
            bottom : 0,
            width : 1500
        }

        return(
            <div style = {myFooterStyle}>
                <hr />
                <center>
                    <p>Copyright &copy; 2020</p>
                    <p>Created by Aman Deep</p>
                    <p>StopStalk Profile : <a href = "https://www.stopstalk.com/user/profile/aman_deep21" target = "_blank" id = "createrLink">aman_deep21</a></p>
                </center>
            </div>
        )
    }
}

export default Footer;
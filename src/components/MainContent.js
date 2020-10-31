import React from "react";
import UserRating from "./UserRating";
import Footer from "./Footer";

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user1 : "",
            user2 : "",
            flag : false,
            error : false
        }
    }

    setUser1 = (e) => {
        this.setState({
            user1 : e.target.value
        })
    }

    setUser2 = (e) => {
        this.setState({
            user2 : e.target.value
        })
    }

    checkInput = () => {
        if(this.state.user1 === "" && this.state.user2 === ""){
            this.setState({
                flag : false
            })
            alert('Please enter both user handles');
        }
        else if(this.state.user1 === ""){
            this.setState({
                flag : false
            })
            alert('Please enter first user handle');
        }
        else if(this.state.user2 === ""){
            this.setState({
                flag : false
            })
            alert('Please enter second user handle');
        }
        else if(this.state.user1 === this.state.user2){
            this.setState({
                flag : false
            })
            alert('Both users should be different');
        }
        else{
            this.setState({
                flag : true
            })
            return true;
        }
    }

    resetUsersData = () => {
        this.setState({
            flag : false,
            user1 : "",
            user2 : "",
        })
    }

    render(){
        let element = null;
        if(this.state.flag){
            element = 
            <div>
                <UserRating user = {this.state.user1} />
                <UserRating user = {this.state.user2} />
                <Footer position = 'relative'/>
            </div>
        }
        else{
            element = <Footer position = 'fixed'/>
        }

        return(
            <div>
                <center>
                <h1>MainContent</h1>
                <input type = "text" onChange = {this.setUser1} value = {this.state.user1} placeholder = "Please enter user handle"  required />
                <input type = "text" onChange = {this.setUser2} value = {this.state.user2} placeholder = "Please enter user handle"  required />
                <br /> <br />
                <button onClick = {this.checkInput}> Compare </button>
                <button onClick = {this.resetUsersData}> Reset </button>
                {element}
                </center>
            </div>
        )
    }
}

export default MainContent;
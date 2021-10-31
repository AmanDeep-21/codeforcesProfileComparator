import React from "react";
import UserRating from "./UserRating";
import Footer from "./Footer";
import './MainContent.css';

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

    checkInput = (event) => {
        event.preventDefault();
        console.log("Received call to checkInput");

        let userId1FromForm = event.target.userId1.value;
        let userId2FromForm = event.target.userId2.value;

        if(userId1FromForm === "" && userId2FromForm === ""){
            this.setState({
                flag : false
            })
            alert('Please enter both user handles');
        }
        else if(userId1FromForm === ""){
            this.setState({
                flag : false
            })
            alert('Please enter first user handle');
        }
        else if(userId2FromForm === ""){
            this.setState({
                flag : false
            })
            alert('Please enter second user handle');
        }
        else if(userId1FromForm === userId2FromForm){
            this.setState({
                flag : false
            })
            alert('Both users should be different');
        }
        else{
            this.setState({
                flag : true,
                user1 : userId1FromForm,
                user2 : userId2FromForm,
            })
            return true;
        }
    }

    resetFormValues = () => {
        this.refs.userId1.value=""
        this.refs.userId2.value=""
    }

    resetUsersData = () => {
        console.log("Resetting user data")
        this.setState({
            flag : false,
            user1 : "",
            user2 : "",
        })
        this.resetFormValues()
    }

    render(){
        let element = null;
        if(this.state.flag){
            element = 
            <div>
                <div className="userResultRow">
                    <UserRating user = {this.state.user1} />
                    <UserRating user = {this.state.user2} />
                </div>
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
                <form onSubmit={this.checkInput}>
                    <input type = "text" name="userId1" ref="userId1" placeholder = "Please enter user handle"  required />
                    <input type = "text" name="userId2" ref="userId2" placeholder = "Please enter user handle"  required />
                    <br /> <br />
                    <button type="button" onClick = {this.resetUsersData}> Reset </button>
                    <button type="submit"> Compare </button>
                </form>
                {element}
                </center>
            </div>
        )
    }
}

export default MainContent;
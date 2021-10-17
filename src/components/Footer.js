import React from "react";

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

        let socialMediaLinksStyle = {
            marginRight: '8px',
        }

        return(
            <div style = {myFooterStyle}>
                <hr />
                <center>
                    <p>Copyright &copy; {(new Date().getFullYear())}</p>
                    <p>Created by Aman Deep</p>
                    <p>Follow me on: 
                        <span style={socialMediaLinksStyle}><a href = "https://www.stopstalk.com/user/profile/aman_deep21" target = "_blank" rel="noopener noreferrer">StopStalk</a></span>
                        <span style={socialMediaLinksStyle}><a href = "https://www.linkedin.com/in/amandeep21" target = "_blank" rel="noopener noreferrer">LinkedIn</a></span>
                        <span style={socialMediaLinksStyle}><a href = "https://github.com/AmanDeep-21" target = "_blank" rel="noopener noreferrer">GitHub</a></span>
                    </p>
                </center>
            </div>
        )
    }
}

export default Footer;
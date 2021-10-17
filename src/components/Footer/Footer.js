import React from "react";
import "./footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.props.position,
    };
  }

  render() {
    return (
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p>Created by Aman Deep</p>
        <p>
          StopStalk Profile :{" "}
          <a
            href="https://www.stopstalk.com/user/profile/aman_deep21"
            target="_blank"
            rel="noopener noreferrer"
            id="stopstalkLink"
          >
            aman_deep21
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;

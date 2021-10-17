import React from "react";
import UserRating from "../UserRating/UserRating";
import "./main-content.css";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: "",
      user2: "",
      flag: false,
      error: false,
    };
  }

  checkInput = (event) => {
    let result = false;
    event.preventDefault();
    console.log("Received call to checkInput");

    let userId1FromForm = event.target.userId1.value;
    let userId2FromForm = event.target.userId2.value;

    if (!userId1FromForm || !userId2FromForm) {
      this.setState({ flag: false });
      alert("Please enter both users");
      return result;
    }
    if (userId1FromForm === userId2FromForm) {
      this.setState({ flag: result });
      alert("Please enter different users");
      return result;
    }

    result = true;
    this.setState({
      flag: result,
      user1: userId1FromForm,
      user2: userId2FromForm,
    });
    return result;
  };

  resetFormValues = () => {
    this.refs.userId1.value = "";
    this.refs.userId2.value = "";
  };

  resetUsersData = () => {
    console.log("Resetting user data");
    this.setState({
      flag: false,
      user1: "",
      user2: "",
    });
    this.resetFormValues();
  };

  render() {
    let element = null;
    if (this.state.flag) {
      element = (
        <div className={"user-rating-container"}>
          <UserRating user={this.state.user1} />
          <UserRating user={this.state.user2} />
        </div>
      );
    }

    return (
      <main>
        <div className={"form-container"}>
          <h1>MainContent</h1>
          <form onSubmit={this.checkInput}>
            <input
              type="text"
              name="userId1"
              ref="userId1"
              placeholder="Please enter user handle"
              required
            />
            <input
              type="text"
              name="userId2"
              ref="userId2"
              placeholder="Please enter user handle"
              required
            />
            <button type="button" onClick={this.resetUsersData}>
              {" "}
              Reset{" "}
            </button>
            <button type="submit"> Compare </button>
          </form>
        </div>

        {element}
      </main>
    );
  }
}

export default MainContent;

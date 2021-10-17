import React from "react";
import "./user-rating.css";

class UserRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      contests: undefined,
      minRating: 100000,
      maxRating: -100000,
      currRating: 0,
      bestRank: 100000,
      worstRank: 0,
      totalContests: 0,
      error: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      user: props.user,
    });
  }

  getData = async () => {
    const response = await fetch(
      "https://codeforces.com/api/user.rating?handle=" + this.state.user
    );

    return await response.json();
  };

  componentDidMount() {
    this.getData()
      .then((result) => {
        this.setState({
          contests: result,
          currRating: this.getCurrRating(result, this.state.currRating),
          minRating: this.getMinRating(result, this.state.minRating),
          maxRating: this.getMaxRating(result, this.state.maxRating),
          totalContests: this.getTotalContests(result, this.totalContests),
          bestRank: this.getBestRank(result, this.state.bestRank),
          worstRank: this.getWorstRank(result, this.state.worstRank),
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true,
        });
      });
  }

  getCurrRating(result, currRating) {
    result.result.map((item) => (currRating = item.newRating));

    return currRating;
  }

  getMaxRating(result, maxRating) {
    result.result.map(
      (item) => (maxRating = Math.max(maxRating, item.newRating))
    );
    maxRating = maxRating === -100000 ? 0 : maxRating;
    return maxRating;
  }

  getMinRating(result, minRating) {
    result.result.map(
      (item) => (minRating = Math.min(minRating, item.newRating))
    );
    minRating = minRating === 100000 ? 0 : minRating;
    return minRating;
  }

  getTotalContests(result, totalContests) {
    totalContests = result.result.length;
    return totalContests;
  }

  getBestRank(result, bestRank) {
    result.result.map((item) => (bestRank = Math.min(bestRank, item.rank)));
    bestRank = bestRank === 100000 ? 0 : bestRank;
    return bestRank;
  }

  getWorstRank(result, worstRank) {
    result.result.map((item) => (worstRank = Math.max(worstRank, item.rank)));

    return worstRank;
  }

  render() {
    let element;
    if (!this.state.error) {
      element = (
        <div className={"user-rating"}>
          <h1>{this.state.user}</h1>
          <p>Current Rating : {this.state.currRating} </p>
          <p>Maximum Rating : {this.state.maxRating}</p>
          <p>Minimum Rating : {this.state.minRating}</p>
          <p>Total Contests : {this.state.totalContests}</p>
          <p>Best Rank : {this.state.bestRank}</p>
          <p>Worst Rank : {this.state.worstRank}</p>
        </div>
      );
    } else {
      element = (
        <div>
          <h1>
            Sorry, looks like some error happened with data of {this.state.user}
          </h1>
        </div>
      );
    }

    return element;
  }
}

export default UserRating;

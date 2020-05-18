import React, { Component } from "react";

class UserRating extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key : "1d48e2086048e2631fbf0e7136ee9aa195fdb9bb",
            secret : "ff962682aba07fc22511003aedfbcd6eb9a41c4d",
            currTime : Date.now() / 1000,
            user : this.props.user,
            contests : undefined,
            minRating : 100000,
            maxRating : -100000,
            currRating : 0,
            bestRank : 100000,
            worstRank : 0,
            totalContests : 0,
            error : false
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            user : props.user
        })
    }

    getData = async() => {
        const response = await fetch('https://codeforces.com/api/user.rating?handle=' + this.state.user + '&apikey=' + this.state.key + '&time=' + this.state.currTime + '&apiSig=' +
        'sha512Hex(210799/user.rating?apiKey=' + this.state.key + '&handle=' + this.state.user + '&time=' + this.state.currTime + '#' + this.state.secret);

        const result = await response.json();
        return result;
    }
    
    componentDidMount(){
        this.getData()
        .then(result => {
            this.setState({
                contests : result,
                currRating : this.getCurrRating(result,this.state.currRating),
                minRating : this.getMinRating(result,this.state.minRating),
                maxRating : this.getMaxRating(result,this.state.maxRating),
                totalContests : this.getTotalContests(result,this.totalContests),
                bestRank : this.getBestRank(result,this.state.bestRank),
                worstRank : this.getWorstRank(result,this.state.worstRank)
            })
        })
        .catch(err => { 
            this.setState({
                error : true
            })
        });
    }

    getCurrRating(result,currRating){
        const temp = result;
        temp.result.map((item) => 
            currRating = item.newRating
        )

        return currRating;
    }

    getMaxRating(result,maxRating){
        const temp = result;
        temp.result.map((item) => 
            maxRating = Math.max(maxRating,item.newRating)
        )
        maxRating = maxRating === -100000 ? 0 : maxRating;
        return maxRating;
    }

    getMinRating(result,minRating){
        const temp = result;
        temp.result.map((item) => 
            minRating = Math.min(minRating,item.newRating)
        )
        minRating = minRating === 100000 ? 0 : minRating;
        return minRating;
    }

    getTotalContests(result,totalContests){
        const temp = result;
        totalContests = temp.result.length;
        return totalContests;
    }

    getBestRank(result,bestRank){
        const temp = result;
        temp.result.map((item) => 
            bestRank = Math.min(bestRank,item.rank)
        )
        bestRank = bestRank === 100000 ? 0 : bestRank;
        return bestRank;
    }

    getWorstRank(result,worstRank){
        const temp = result;
        temp.result.map((item) => 
            worstRank = Math.max(worstRank,item.rank)
        )

        return worstRank;
    }

    render(){
        let element = null;
        if(!this.state.error){
            element = 
            <div>
                <h1>{this.state.user}</h1>
                <p>Current Rating : {this.state.currRating} </p>
                <p>Maximum Rating : {this.state.maxRating}</p>
                <p>Minimum Rating : {this.state.minRating}</p>
                <p>Total Contests : {this.state.totalContests}</p>
                <p>Best Rank : {this.state.bestRank}</p>
                <p>Worst Rank : {this.state.worstRank}</p>
            </div>
        }
        else{
            element = 
            <h1>Sorry, looks like some error happened with data of {this.state.user}</h1>
        }

        return(
            <div>
              {element}  
            </div>
        )
    }
}

export default UserRating;
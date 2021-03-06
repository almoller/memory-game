import React, { Component } from "react";
import '../App.css';
import Header from "./Header";
import ScoreBar from "./ScoreBar";
import ImgWrapper from "./ImgWrapper";
import ClickImages from "./ClickImages";
import pics from "../pics.json";


  
class GameContainer extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    pics
  };


  shuffle = array => {

    var m = array.length, t, i;

    while (m) {                              // While there remain elements to shuffle…
        i = Math.floor(Math.random() * m--); // Pick a remaining element…    
        t = array[m];                        // And swap it with the current element.
        array[m] = array[i];
        array[i] = t;
    }
    return array;
  };


  handleImgClick = (id, clicked) => {

    const picOrder = this.state.pics; 

    if (clicked) {
      picOrder.forEach((image, index) => {
        picOrder[index].clicked = false;
      });
      return this.setState({
        pics: this.shuffle(pics),
        message: "Whoops! You clicked an image twice!",
        score: 0
      })
    } 
    else {
      picOrder.forEach((image, index) => {
        if (id === image.id) {
          picOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const updatedScore = score + 1;
      const newTopScore = updatedScore > topScore ? updatedScore : topScore;

      return this.setState({
        pics: this.shuffle(pics),
        message: "Well done, keep it up!",
        score: updatedScore,
        topScore: newTopScore
      })
    }
  };



  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <ScoreBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <ImgWrapper>
          {this.state.pics.map(pic => (
            <ClickImages
              id={pic.id}
              key={pic.id}
              name={pic.name}
              clicked={pic.clicked}
              image={pic.image}
              imgClick={this.handleImgClick}              
            />
          ))}
        </ImgWrapper>
        </div>
      </div>
    );
  }
};

export default GameContainer;

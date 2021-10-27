import { Component } from "react";
import DogList from "./img/DogList";
import { Switch, Route } from "react-router-dom";
import whiskey from "./img/dog1.jpg";
import tubby from "./img/dog2.jpg";
import hazel from "./img/dog3.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        <Route path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
      </div>
    );
  }
}
export default App;

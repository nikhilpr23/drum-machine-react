import React, { Component } from "react";
import "./App.css";

class DrumKeys extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  handleClick = () => {
    this.audioRef.current.play();
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="drum-pad"
        id={this.props.button.id}
      >
        {this.props.button.name}
        <audio
          src={this.props.button.url1}
          ref={this.audioRef}
          id={this.props.button.name}
          className="clip"
        />
      </button>
    );
  }
}

function DrumPad() {
  return buttons.map(button => <DrumKeys key={button.name} button={button} />);
}

function Display(props) {
  return <div id="display">Hi</div>;
}

class DrumMachine extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <DrumPad />
        <Display />
      </div>
    );
  }
}

const buttons = [
  {
    keyCode: 81,
    name: "Q",
    id: "Heater-1",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    name: "W",
    id: "Heater-2",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    name: "E",
    id: "Heater-3",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord-3.mp3"
  },
  {
    keyCode: 65,
    name: "A",
    id: "Heater-4",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    name: "S",
    id: "Clap",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    name: "D",
    id: "Open-HH",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    name: "Z",
    id: "Kick-n'-Hat",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    name: "X",
    id: "Kick",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    name: "C",
    id: "Closed-HH",
    url1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

export default DrumMachine;

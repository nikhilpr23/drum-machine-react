import React, { Component } from "react";
import "./DrumMachine.css";

class DrumKey extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidUpdate() {
    const {
      wasKeyPressed,
      pressedKey,
      button,
      setPressedKeyFalse
    } = this.props;
    // Check if a keydown event happened
    if (wasKeyPressed) {
      // If so, check if the keycode matches the current button's
      if (pressedKey === button.keyCode) {
        this.playSound();
        setPressedKeyFalse();
      }
    }
  }

  playSound = () => {
    const keyAudio = this.audioRef.current;
    keyAudio.play();
    this.props.handleSound(keyAudio.parentNode.id);
  };

  render() {
    const { button } = this.props;

    return (
      <button
        onClick={this.playSound}
        className="drum-pad"
        id={button.keyTitle}
      >
        {button.keyName}
        <audio
          src={button.bankOffUrl}
          ref={this.audioRef}
          id={button.keyName}
          className="clip"
        />
      </button>
    );
  }
}

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeyCode: "",
      wasKeyPressed: false
    };
  }

  // Parent 'DrumPad' component to listen for all keydown events
  // Instead of all 9 child 'DrumKey' components listening for it
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = event => {
    const pressedKey = buttons.find(button => button.keyCode === event.keyCode);
    if (pressedKey) {
      const pressedKeyCode = pressedKey.keyCode;
      this.setState({
        pressedKeyCode,
        wasKeyPressed: true
      });
    }
  };

  setPressedKeyFalse = () => {
    this.setState({ wasKeyPressed: false });
  };

  render() {
    return buttons.map(button => (
      <DrumKey
        pressedKey={this.state.pressedKeyCode}
        wasKeyPressed={this.state.wasKeyPressed}
        setPressedKeyFalse={this.setPressedKeyFalse}
        key={button.keyName}
        handleSound={this.props.handleSound}
        button={button}
      />
    ));
  }
}

function Display(props) {
  return <div id="display">{props.keyName}</div>;
}

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click A Key!"
    };
  }

  handleSound = keyName => {
    this.setState({
      display: keyName
    });
  };

  render() {
    const { display } = this.state;
    return (
      <div id="drum-machine" className="App">
        <DrumPad handleSound={this.handleSound} />
        <Display keyName={display} />
      </div>
    );
  }
}

const buttons = [
  {
    keyCode: 81,
    keyName: "Q",
    keyTitle: "Heater-1",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyName: "W",
    keyTitle: "Heater-2",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyName: "E",
    keyTitle: "Heater-3",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord-3.mp3"
  },
  {
    keyCode: 65,
    keyName: "A",
    keyTitle: "Heater-4",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyName: "S",
    keyTitle: "Clap",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyName: "D",
    keyTitle: "Open-HH",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyName: "Z",
    keyTitle: "Kick-n'-Hat",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyName: "X",
    keyTitle: "Kick",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyName: "C",
    keyTitle: "Closed-HH",
    bankOffUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    bankOnUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

export default DrumMachine;

import React from 'react';

const drumData = {
    q: {
      name: "Open Hihat",
      id: "Q",
      src: "https://www.dowling.ca/sounds/openhat.wav"
    },
    w: {
      name: "Tink",
      id: "W",
      src: 'https://www.dowling.ca/sounds/tink.wav'
    },
    e: {
      name: "Ride Cymbal",
      id: "E",
      src: "https://www.dowling.ca/sounds/ride.wav"
    },
    a: {
      name: "Closed Hihat",
      id: "A",
      src: "https://www.dowling.ca/sounds/hihat.wav"
    },
    s: {
      name: "Snare",
      id: "S",
      src: "https://www.dowling.ca/sounds/snare.wav"
    },
    d: {
      name: "Kick",
      id: "D",
      src: "https://www.dowling.ca/sounds/kick.wav"
    },
    z: {
      name: "Boom",
      id: "Z",
      src: "https://www.dowling.ca/sounds/boom.wav"
    },
    x: {
      name: "Clap",
      id: "X",
      src: "https://www.dowling.ca/sounds/clap.wav"
    },
    c: {
      name: "Tom",
      id: "C",
      src: "https://www.dowling.ca/sounds/tom.wav"
    }
}

class ButtonDr extends React.Component {
  render() {
  return (
    <button className="drum-pad" id={this.props.drum} onClick={this.props.onClick}>
      {this.props.audioId}
      <audio className='clip' id={this.props.audioId} src={this.props.drumSrc} type='audio/wav'></audio>     
    </button>
  );
}
}
class DrumMachine extends React.Component
{
constructor(props) {
  super(props);
  this.state = {
    displayText: "placeholder"
  }
  this.handleClick = this.handleClick.bind(this);
  this.setTheText = this.setTheText.bind(this);
  this.handleKeydown = this.handleKeydown.bind(this);
  }
renderButton(d) {
  return(<ButtonDr 
  drum = {d} 
  audioId = {drumData[d].id}
  drumSrc = {drumData[d].src}
  onClick={() => this.handleClick(d)}
  />
  );
}
handleClick(d) {
  let audio = drumData[d].id
  audio = document.getElementById(audio)
  audio.play()
  this.setTheText(d)
}
componentDidMount() {  
  document.addEventListener("keydown", this.handleKeydown); 
  }

handleKeydown(e) {
  let drumId = String.fromCharCode(e.which)
  let drumSrc = document.getElementById(drumId)
  if (drumSrc) drumSrc.play()
  drumId = drumId.toLowerCase()
  if (drumSrc) this.setTheText(drumId)
}
setTheText(d) {
  this.setState({
    displayText: drumData[d].name
  })
}
render() {
  let displayDrumName = this.state.displayText
 return (
   <div id="drum-machine">
        <div id="drum-rows">
            <div id="a-row" className="row" >
                {this.renderButton("q")}
                {this.renderButton("w")}
                {this.renderButton("e")}
            </div>
            <div id="b-row" className="row">
                {this.renderButton("a")}
                {this.renderButton("s")}
                {this.renderButton("d")}
            </div>
            <div id="c-row" className="row">
                {this.renderButton("z")}
                {this.renderButton("x")}
                {this.renderButton("c")}
            </div>
        </div>
        <div className="card">
<div id="display" className="card-body">{displayDrumName}</div>
        </div>
    </div>
 );
}
}

export default DrumMachine;

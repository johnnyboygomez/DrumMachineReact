import React from 'react';
import ReactFCCtest from 'react-fcctest';

const drumData = {
    openhat: {
      name: "Open Hihat",
      id: "Q",
      src: "sounds/openhat.wav"
    },
    tink: {
      name: "Tink",
      id: "W",
      src: 'http://www.electrongate.com/dmxfiles/drumtraks/SCI_RIM.wav'
    },
    ride: {
      name: "Ride Cymbal",
      id: "E",
      src: "sounds/ride.wav"
    },
    hihat: {
      name: "Closed Hihat",
      id: "A",
      src: "sounds/hihat.wav"
    },
    snare: {
      name: "Snare",
      id: "S",
      src: "sounds/snare.wav"
    },
    kick: {
      name: "Kick",
      id: "D",
      src: "sounds/kick.wav"
    },
    boom: {
      name: "Boom",
      id: "Z",
      src: "sounds/boom.wav"
    },
    clap: {
      name: "Clap",
      id: "X",
      src: "sounds/clap.wav"
    },
    tom: {
      name: "Tom",
      id: "C",
      src: "sounds/tom.wav"
    }
}

class ButtonDr extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <button className="drum-pad" id={this.props.drum} onClick={this.props.onClick}>
      {this.props.callIt}
      <audio className='clip' id={this.props.callIt} scr={this.props.drumSrc} type='audio/wav'></audio>     
    </button>
  );
}
}
class App extends React.Component
{
constructor(props) {
  super(props);
this.handleClick = this.handleClick.bind(this);
  }
renderButton(d) {
  return(<ButtonDr 
  drum = {d} 
  callIt = {drumData[d].id}
  drumSrc = {drumData[d].src}
  onClick={() => this.handleClick(d)}
  />
  );
}
handleClick(d) {
  let audio = drumData[d].id
  audio = document.getElementById(audio)
  //audio.currentTime = 0
  audio.play()
  console.log(audio)
}

render() {
 return (
   <div id="drum-machine">
        <div id="drum-rows">
            <div id="a-row" className="row" >
                {this.renderButton("openhat")}
                {this.renderButton("tink")}
                {this.renderButton("ride")}
            </div>
            <div id="b-row" className="row">
                {this.renderButton("hihat")}
                {this.renderButton("snare")}
                {this.renderButton("kick")}
            </div>
            <div id="c-row" className="row">
                {this.renderButton("boom")}
                {this.renderButton("clap")}
                {this.renderButton("tom")}
            </div>
        </div>
        <div className="card">
<div id="display" className="card-body">This will be display</div>
        </div>
    </div>
 );
}
}

export default App;

/*class Display extends React.Component
  {
    constructor(props) {
      super(props);
      }
    componentDidMount() {
      //const xdrumId = this.props.drumType;
      console.log("Whoa!")
    }

render() {
  return (
    <p></p>
  )}
}
*/
/*componentDidMount() {   
window.onkeydown = function(event) {
    let k = event.key;
    k = k.toUpperCase();
    //alert(k);
    let drumClk = document.getElementById("W");
    if(drumClk) drumClk.play();
    }
}
*/
/*componentDidMount() {   
  window.onkeydown = function(event) {
      let k = event.key;
      k = k.toUpperCase();
      let audio = drumData[d].id;
      audio = document.getElementById(audio);
      let drumClk = document.getElementById(audio);
      console.log(audio)
      //if(drumClk) drumClk.play();
      }
  }
  */
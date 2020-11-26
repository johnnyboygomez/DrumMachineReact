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
      src: "sounds/tink.wav"
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
class ButtonDr extends React.Component
{
constructor(props) {
  super(props);
  this.state = {
    drumName: '',
       };
  this.bang = this.bang.bind(this);
  }
  bang() {
    this.setState({
      drumName:  this.props.typeDrum
      });
    const audio = new Audio(this.props.src);
    audio.play();
    var xt = this.props.typeDrum
    console.log(drumData.kick.src)
  }
  
  render() {
    return (
    <button className={"drum-pad"} id={"xxs"} onMouseDown={this.bang}>
        {this.props.id}
        <audio className='clip' preload='auto' id={this.props.id} scr={this.props.src} type='audio/wav'></audio>
      </button>
    );

  }
}
class App extends React.Component
{
constructor(props) {
  super(props);
	}
/*    
displayDrum(drumInput){
  console.log(drumInput)
}
*/
componentDidMount() {   
window.onkeydown = function(event) {
    let k = event.key;
    k = k.toUpperCase();
    alert(k);
    let drumClk = document.getElementById("Q");
    if(drumClk) drumClk.play();
    }
}

 
render() {
 return (
   <div id="drum-machine">
        <div id="drum-rows">
            <div id="a-row" className="row" >
                <ButtonDr typeDrum={"openhat"}onClick={this.bang} />
                <ButtonDr typeDrum={"tink"} id={"W"} src={"sounds/tink.wav"} onClick={this.bang} />
                <ButtonDr typeDrum={"ride"} id={"E"} src={"sounds/ride.wav"} onClick={this.bang} />
            </div>
            <div id="b-row" className="row">
               <ButtonDr typeDrum={"hihat"} id={"A"} src={"sounds/hihat.wav"} onClick={this.bang} />
               <ButtonDr typeDrum={"snare"} id={"S"} src={"sounds/snare.wav"} onClick={this.bang} />
               <ButtonDr typeDrum={"kick"} id={"D"} src={"sounds/kick.wav"} onClick={this.bang} />
            </div>
            <div id="c-row" className="row">
              <ButtonDr typeDrum={"boom"} id={"Z"} src={"sounds/boom.wav"} onClick={this.bang} />
              <ButtonDr typeDrum={"clap"} id={"X"} src={"sounds/clap.wav"} onClick={this.bang} />
              <ButtonDr typeDrum={"tom"} id={"X"} src={"sounds/tom.wav"} onClick={this.bang} />
            </div>
        </div>
        <div className="card">
<div id="display" className="card-body">{/*this.state.drumName*/}</div>
        </div>
    </div>
 );
}
}

export default App;

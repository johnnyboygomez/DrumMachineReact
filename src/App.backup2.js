import React from 'react';
import $ from "jquery";
import ReactFCCtest from 'react-fcctest';

const drumNames = {
    openhat: "Open Hihat",
    tink: "Tink",
    ride: "Ride Cymbal",
    hihat: "Closed Hihat",
    snare: "Snare",
    kick: "Kick",
    boom: "Boom",
    clap: "Clap",
    tom: "Tom"
}

class App extends React.Component
{
constructor(props) {
  super(props);
  this.state = {
    drumName: 'John',
       };
     this.bang = this.bang.bind(this);
     this.displayDrum = this.displayDrum(this)
	}

 bang(){
    let drumBtn = document.getElementById(drumx);
	  drumBtn.play();
    //$("button").click(function() {
    let drumId = "Q";
    this.setState({
      drumName: drumId
    //});	
         });
    }
    
displayDrum(drumInput){
  console.log(drumInput)
}
componentDidMount() {   
window.onkeydown = function(event) {
    let k = event.key;
    k = k.toUpperCase();
    let drumClk = document.getElementById(k);
    if(drumClk) drumClk.play();
    }
}
 /*    let drumId = "W"//$(drumClk).parent().attr('id');
    this.setState({
      drumName: "drumId"
    //});	
    */   
render() {
 return (
   <div id="drum-machine">
        <div id="drum-rows">
            <div id="a-row" className="row" >
                <button className="drum-pad" id="openhat" onMouseDown={this.bang}>
                    Q
                    <audio  preload="auto" className="clip" id="Q" src="sounds/openhat.wav" type="audio/wav">
                      </audio>
                </button>
                <button className="drum-pad" id="tink"  onMouseDown={() => this.bang('W')}>W
                    <audio className="clip"  preload="auto" id="W" src="sounds/tink.wav" type="audio/wav">
                      </audio>                    
                </button>
                <button className="drum-pad" id="ride" onMouseDown={() => this.bang('E')}>E
                    <audio className="clip" id="E" src="sounds/ride.wav" type="audio/wav">
                      </audio>  
                </button>
            </div>
            <div id="b-row" className="row">
                <button className="drum-pad" id="hihat" onMouseDown={() => this.bang('A')}>A
                    <audio className="clip" id="A" src="sounds/hihat.wav" type="audio/wav">
                      </audio>  
                </button>
                <button className="drum-pad" id="snare" onMouseDown={() => this.bang('S')}>S
                    <audio className="clip" id="S" src="sounds/snare.wav" type="audio/wav">
                      </audio>  
                </button>
                <button className="drum-pad" id="kick" onMouseDown={() => this.bang('D')}>D
                    <audio className="clip" id="D" src="sounds/kick.wav" type="audio/wav">
                      </audio> 
                 </button>
            </div>
            <div id="c-row" className="row">
                <button className="drum-pad" id="boom" onMouseDown={() => this.bang('Z')}>Z
                    <audio className="clip" id="Z" src="sounds/boom.wav" type="audio/wav">
                      </audio> 
                </button>
                <button className="drum-pad" id="clap" onMouseDown={() => this.bang('X')}>X
                    <audio className="clip" id="X" src="sounds/clap.wav" type="audio/wav">
                      </audio> 
                </button>
                <button className="drum-pad btn" id="tom" onMouseDown={() => this.bang('C')}>C
                    <audio className="clip" id="C" src="sounds/tom.wav" type="audio/wav">
                      </audio> 
                </button>
            </div>
        </div>
        <div className="card">
        <div id="display" className="card-body">{this.state.drumName}</div>
        </div>
    </div>
 );
}
}

export default App;

import React from 'react'
import './App.css'


import s1 from './sounds/Heater-1.mp3'
import s2 from './sounds/Heater-2.mp3'
import s3 from './sounds/Heater-3.mp3'
import s4 from './sounds/Heater-4.mp3'
import s5 from './sounds/Clap.mp3'
import s6 from './sounds/Open HH.mp3'
import s7 from './sounds/Kick_n_Hat.mp3'
import s8 from './sounds/Kick.mp3'
import s9 from './sounds/Closed HH.mp3'

const App = () => {

    const style = {
        backgroundColor: "#1AACAC",
        height : "450px",
        width : "800px",
        border : "10px solid blue",
        position : "relative",
        top : "125px",
        left : "350px"
    }

    const hstyle = {
        textAlign : "center",
        margin : "0",
        textShadow : "2px 1px 4px black",
        color:"yellow"
    }

    const keyPadStyle = {
        display : "inline-grid",
        gridTemplateColumns: "auto auto auto",
        rowGap:"10px",
        columnGap:"10px",
        position: "relative",
        left : "70px",
        top : "50px",
        border: "3px solid blue",
        padding: "10px",
        borderRadius : "15px",
        backgroundColor : "yellow"
    }
    const dstyle = {
        height : "40px",
        width : "200px",

        position : "absolute",
        left : "500px",
        top : "180px",

        padding : "20px 0px 20px 0px",
        border : "10px dashed yellow",
        borderRadius : "5px",

        textAlign : "center"
    }

    const bstyle = {
        width : "80px",
        height : "80px",
        backgroundColor : "cyan",
        fontSize : "35px",
        border : "3px solid blue",
        borderRadius : "15px",
        tabIndex : "0"
    }
    var [soundName,setSoundName] = React.useState('');
    
    const handlePress = (e) => {
        if(e.key === 'q') {
            setSoundName('Heater 1');
            let audio = new Audio(s1);
            audio.play();
        }
        else if(e.key === 'w') {
            setSoundName('Heater 2');
            let audio = new Audio(s2);
            audio.play();
        }
        else if(e.key === 'e') {
            setSoundName('Heater 3');
            let audio = new Audio(s3);
            audio.play();
        }
        else if(e.key === 'a') {
            setSoundName('Heater 4');
            let audio = new Audio(s4);
            audio.play();
        }
        else if(e.key === 's') {
            setSoundName('Clap');
            let audio = new Audio(s5);
            audio.play();
        }
        else if(e.key === 'd') {
            setSoundName('Open HH');
            let audio = new Audio(s6);
            audio.play();
        }
        else if(e.key === 'z') {
            setSoundName("Kick n'Hat");
            let audio = new Audio(s7);
            audio.play();
        }
        else if(e.key === 'x') {
            setSoundName('Kick');
            let audio = new Audio(s8);
            audio.play();
        }
        else if(e.key === 'c') {
            setSoundName('Closed HH');
            let audio = new Audio(s9);
            audio.play();
        }
        else
        {
            setSoundName('')
        }
    }

    return(
        <div style = {style} id = "drum-machine">
            <h1 style = {hstyle}>Drum Machine</h1>
            <h2 style = {hstyle}>Press Tab to start</h2>
            <div id = "key-pad" style = {keyPadStyle} tabIndex={0} onKeyDown={handlePress}>
            <button style = {bstyle} onClick = {()=>
                {setSoundName('Heater 1');
                let audio = new Audio(s1);
                audio.play();}}>Q</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Heater 2');
                let audio = new Audio(s2);
                audio.play();}}>W</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Heater 3');
                let audio = new Audio(s3);
                audio.play();}}>E</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Heater 4');
                let audio = new Audio(s4);
                audio.play();}}>A</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Clap');
                let audio = new Audio(s5);
                audio.play();}}>S</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Open HH');
                let audio = new Audio(s6);
                audio.play();}}>D</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName("Kick n'Hat");
                let audio = new Audio(s7);
                audio.play();}}>Z</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Kick');
                let audio = new Audio(s8);
                audio.play();}}>X</button>

                <button style = {bstyle} onClick = {()=>
                {setSoundName('Closed HH');
                let audio = new Audio(s9);
                audio.play();}}>C</button>
            </div>
            <h1 id="display" style={dstyle}>{soundName}</h1>
            
        </div>
    );
}

export default App;
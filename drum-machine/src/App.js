import React from 'react'
import './App.css'
import Key from './Key.js'
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
    return(
        <div style = {style} id = "drum-machine">
            <h1 style = {hstyle}>Drum Machine</h1>
            <div id = "key-pad" style = {keyPadStyle}>
                <Key id = 'Q'/>
                <Key id = 'W'/>
                <Key id = 'E'/>
                <Key id = 'A'/>
                <Key id = 'S'/>
                <Key id = 'D'/>
                <Key id = 'Z'/>
                <Key id = 'X'/>
                <Key id = 'C'/>
            </div>
            
        </div>
    );
}

export default App;
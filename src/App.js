import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Fade from '@material-ui/core/Fade';
// import Backdrop from '@material-ui/core/Backdrop';
// import Dialog from '@material-ui/core/Dialog';
import { useState } from "react";
import Records from "./records.json";

class Relation extends React.Component {
  
  state = {
    color: 'lightblue'
  }

  changeColor = () => {
    console.log('Color Change with', 'green');
    this.setState(prevState => {
      return { color: prevState.color === 'lightblue'?'green':'lightblue'
      }
    })
    // setColor('green');
}


  render ()
{
  const tokens_to_render = [];
  const input_tokens = Records;
  
  var cntr = 0;

  input_tokens.forEach(tk => {

    tokens_to_render.push(
      <button key={cntr} 
        index={tk['tkid']} style={{backgroundColor: this.state.color}} onMouseEnter={this.changeColor} onMouseLeave={ this.changeColor}
      //   onSelected={(ix,value) => this.addToBundle(ix, value)}
      > 
          {tk['token_text']} 
        </button>
    )
    cntr = cntr + 1;
  });
  
  return(
        <div className="control-box">
          {tokens_to_render}
        </div>
  )

  }
}

export default Relation;
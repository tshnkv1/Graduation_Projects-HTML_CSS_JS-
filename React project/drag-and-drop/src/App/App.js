import React from 'react';

import CanvasComponent from '../Canvas/Canvas';

import './App.css';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.square = React.createRef();
      this.save = React.createRef();
      this.circle = React.createRef();
  }

  handleDrag = (event) => {
    console.log(event);
  }
  render () {
  return (
      <div className="App">
        <div className="head-left">Figures</div>
        <div className="head-right">Canvas</div>
        <div id="form">
          <div id="it" className="square" draggable={true} data-item={1}></div>
          {/*<div id="it" className="square2" draggable={true} data-item={2}></div> */}
        </div>
        <div id="cnv">
          <CanvasComponent />
        </div>
      </div>
  );
  }
}

export default App;

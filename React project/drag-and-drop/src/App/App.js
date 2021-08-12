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
        <div className="first">Figures</div>
        <div className="second">Canvas</div>
        <div id="third" className="third">
          <div id="square" className="square" draggable={true} data-item={1}></div>
          <div id="circle" className="circle" draggable={true} data-item={2}></div>
        </div>
        <div className="fourth">
          <CanvasComponent />
        </div>
      </div>
  );
  }
}

export default App;

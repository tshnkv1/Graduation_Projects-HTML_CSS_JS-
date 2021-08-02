import React from 'react';

import './App.scss';

import Navigation from '../Navigation/Navigation';
import Courses from '../Courses/Courses';

class App extends React.PureComponent {

  state = {
    show: false,
  };

  showCourses = (selectLi) => {
    console.log(selectLi);
    this.setState( { show: selectLi})
  }
  
  render() {

    return (
      <div className='container'>
        <div className="title">Find Your Course</div>
        <div className="main">
          <Navigation cbshowCourse={this.showCourses}/>
          <Courses show={this.state.show}/>
        </div>
      </div>
    );
  }
}

export default App;

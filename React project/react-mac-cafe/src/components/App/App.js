import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import isoFetch from 'isomorphic-fetch';
 //import PropTypes from 'prop-types';

import './App.scss';

import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import ProductChosen from '../ProductChosen/ProductChosen';
import Quality from '../Quality/Quality';

import facebook from '../../images/facebook.svg';
import vk from '../../images/vk.svg';

class App extends React.PureComponent {
  
  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  state = {
    dataReady: false,
    name: "???",
    product: [],
  };

  constructor(props) {
    super(props);
  }

  /*componentDidMount() {
    this.loadData();
  }

  fetchError = (errorMessage) => {
    console.error("showStr");
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      product: loadedData,
    });
  };

  loadData = () => {

    isoFetch("http://webapp.armadealo.com/home.json", {
        method: 'post',
        headers: {
            "Accept": "application/json",
        },
    })
        .then( response => { // response - HTTP-ответ
            if (!response.ok)
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;

  };
  */

  render() {

    return (
      <BrowserRouter>
    <div className="project">
      <div className="container">
        <Navigation />
        <Route path="/menu" component={Main} />
        <Route path="/menu" component={ProductChosen} />
        <Route path="/quality" component={Quality} />
      </div>
      <footer className="footer">
        <div>Правовая информация</div>
        <div>Другие сайты Макдональдс</div>
        <div className="socialNetworks">
          <span>Оставайтесь с нами в соцсетях:</span>
          <img src={facebook} />
          <img src={vk} />
        </div>
        <div>© McDonald's Corporation</div>
      </footer>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;

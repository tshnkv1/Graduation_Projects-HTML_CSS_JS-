import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Main2 from '../Main/Main2';
import ProductChosen from '../ProductChosen/ProductChosen';
import Quality from '../Quality/Quality';

import facebook from '../../images/facebook.svg';
import vk from '../../images/vk.svg';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    catalog:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        dzh: PropTypes.number.isRequired,
        cal: PropTypes.number.isRequired,
        squirrels: PropTypes.number.isRequired,
        fats: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
      })
),
  };

  state = {
    all: this.props.catalog,
    product: [],
    
  }

  addToBasket = (iD) => {
    //console.log('addToBasket '+iD);
    let productWhenSelected = [...this.state.product];
    if(productWhenSelected.length === 0) {
      console.log("0");
      let item = this.state.all.filter( prod => prod.id == iD);
      productWhenSelected = [...productWhenSelected, item[0]];
      console.log(productWhenSelected);
    }
    else {
      let item = this.state.all.filter( prod => prod.id == iD);
      console.log(item);
      for ( let a = 0; a<productWhenSelected.length; a++) {
        console.log(productWhenSelected);
        console.log(productWhenSelected[a].id == item.id)
      }




     /* for ( let a = 0; a<productWhenSelected.length; a++) {
        console.log(productWhenSelected[a]);
        console.log(productWhenSelected);
        if(productWhenSelected[a].id !== iD) {
            console.log('тогда')
            let item = this.state.all.filter( prod => prod.id == iD);
            console.log(item);
            productWhenSelected = [...productWhenSelected, item[0]];
            console.log(productWhenSelected);
          }
          console.log('ок');*/
      
      
        /*else {
          console.log('добавляем');
          let item = this.state.all.filter( prod => prod.id == iD);
          productWhenSelected = [...productWhenSelected, item[0]];
          console.log(productWhenSelected);
        }*/
    }
    //if(change){
    this.setState( {product: productWhenSelected})
   // }
  }

  render() {

    return (
      <Router>
    <div className="project">
    {/*<Route path='/' exact component={Home}/>*/}
      <div className="container">
        <Navigation />
        {/*<Route path='/menu' component={Main}/>
        <Route path='/menu' component={ProductChosen}/>
        <Route path='/quality' component={Quality}/> */}
        <Main2 catalogProduct={this.props.catalog} cbAddProduct={this.addToBasket}/>
        <ProductChosen choseProduct={this.state.product}/>
        {/*<Quality /> */}
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
    </Router>
    );
  }
}

export default App;

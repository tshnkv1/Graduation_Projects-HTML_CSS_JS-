import React from 'react';
//import PropTypes from 'prop-types';

import './Main.scss';

import Product from '../Product/Product';

import mainBanner from '../../images/main-banner.jpeg';

var json=require('./product.json');

class Main extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    const prod = json;

    const newProduct = prod.map( v => 
      <Product key={v.id}
      id={v.id}
      name={v.name}
      price={v.price}
      url={v.url}
      dzh={v.dzh}
      cal={v.cal}
      squirrels={v.squirrels}
      fats={v.fats}
      Carbohydrates={v.Carbohydrates}

      />);

    return (
      <div className="main-container">
        <div className="mainHeader">
        <h1 className="mc-products-header">Меню</h1>
        </div>
        <div className="main">
          <img className="mainbanner" src={mainBanner}/>
        </div>
        <div className="main-contant">
        {newProduct }
        </div>
      </div>
    )
    ;

  }

}

export default Main;

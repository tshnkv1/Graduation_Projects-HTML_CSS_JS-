import React from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

class Product extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      dzh: PropTypes.number.isRequired,
      cal: PropTypes.number.isRequired,
      squirrels: PropTypes.number.isRequired,
      fats: PropTypes.number.isRequired,
      Carbohydrates: PropTypes.number.isRequired,
  };

  render() {

    const url = this.props.url;

    return (
      <div className="product">
          <div className="picture">
              <img src={url}/>
              <div className="product-price">{this.props.price}</div>
          </div>
          <div className="product-info">
                <div className="product-name">{this.props.name}</div>
                <div className="product-select">
                    <button>
                      +
                    </button>
                </div>
              </div>
      </div>
    )
    ;

  }

}

export default Product;

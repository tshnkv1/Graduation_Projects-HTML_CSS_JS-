import React from 'react';
//import PropTypes from 'prop-types';

import './ProductChosen.scss';

class ProductChosen extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="productChosen__container">
        <div className="title">Узнайте стоимость заказа и энергетическую ценность продуктов</div>
        <div className="selectedPrice">
          <div>Стоимость:</div>
          <div className="cost">0,00</div> руб.
        </div>
        <div className="selectedProduct">
          <span>Мой заказ</span>
          <div className="basket"></div>
        </div>
        <div className="energy">
          <div>кДж <span>0</span></div>
          <div>Энергетическая ценность, ккал <span>0</span></div>
          <div>Белки, г <span>0</span></div>
          <div>Жиры, г <span>0</span></div>
          <div>Углеводы, г <span>0</span></div>
        </div>
        <div className="norm">
          <div>Суточная норма калорий:</div>
          <div>- Мужчины: 2500, ккал</div>
          <div>- Женщины: 2000, ккал</div>
          <div>- Дети: 1600, ккал</div>
        </div>
      </div>
    )
    ;

  }

}

export default ProductChosen;

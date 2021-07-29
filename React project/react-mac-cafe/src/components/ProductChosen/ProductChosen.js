import React from 'react'
import './ProductChosen.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductChosen() {
  return (
      <div className='container'>
          <div className='mc-products-chosen-calculator-column'>
              <h1>Узнайте стоимость заказа и энергетическую ценность продуктов</h1>
              <div className='mc-products-chosen-salver-holder'>
                  <div>
                      <span className='mc-products-chosen-price-title'>Стоимость:</span>
                      <span className='mc-products-chosen-price'>0</span>руб.
                  </div>
              </div>
              <div className='mc-products-chosen-list-holder'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mc-chosenData-scroll-outerWrapper'>
                      <span className='center-block mc-products-chosenlist-title'>
                          Мой заказ
                      </span>
                  </div>
              </div>
              <div className='clearfix mc-separator-h'></div>
              <div className='row mc-products-chosen-calories-holder'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <ul className='list-unstyled mc-products-chosenlist-data'>
                          <li>
                            <span className='mc-products-product-chosen-name'>кДж</span>
                            <span className='mc-products-chosen-element-value' id='mc-elements-joule-count'>0</span>
                          </li>
                          <li>
                            <span className='mc-products-product-chosen-name'>Энергетическая ценность, ккал</span>
                            <span className='mc-products-chosen-element-value' id='mc-elements-calories-count'>0</span>
                          </li>
                          <li>
                            <span className='mc-products-product-chosen-name'>Белки, г</span>
                            <span className='mc-products-chosen-element-value' id='mc-elements-protein-count'>0</span>
                          </li>
                          <li>
                            <span className='mc-products-product-chosen-name'>Жиры, г</span>
                            <span className='mc-products-chosen-element-value' id='mc-elements-fat-count'>0</span>
                          </li>
                          <li>
                            <span className='mc-products-product-chosen-name'>Углеводы, г</span>
                            <span className='mc-products-chosen-element-value' id='mc-elements-carbohydrates-count'>0</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className='clearfix mc-separator-h'></div>
              <div className='row mc-products-chosen-calories-recommended'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    Суточная норма калорий
                    <ul className='list-unstyled mc-products-chosenlist-data'>
                        <li><span>- Мужчины: 2500, ккал</span></li>
                        <li><span>- Женщины: 2000, ккал</span></li>
                        <li><span>- Дети: 1600, ккал</span></li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ProductChosen;

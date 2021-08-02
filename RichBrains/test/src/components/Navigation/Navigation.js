import React, { useState } from 'react';
//import PropTypes from 'prop-types';

import './Navigation.scss';
import logo from '../../images/Vector.svg'
import navSCG from '../../images/NavSVG.svg'
import selectedNavSVG from '../../images/SelectedNavSVG.svg'


//navSCG - обычное меню, selectedNavSVG - выбран варинт меню
/* selectedli - выбран один из подпунктов */


function Navigation({ cbshowCourse }) {
    const [mobNav, setmobNav] = useState(false);
    const [navClick, setnavClick] = useState(false);
    const [selectLi, setselectLi] = useState(false);
    const selectedTegLi = "selectedli";

    function handleClickNav() {
        setnavClick(!navClick);
        setselectLi(false);
        cbshowCourse(false);
    }

    function handleClickli() {
        setselectLi(!selectLi);
        cbshowCourse(!selectLi);
        console.log(selectLi);
    }
  return (
    <div className="navigation">
        <div className="logoName">
            <img src={logo} className="logo"/>
            <div className="educationType">Careers</div>
        </div>
        <div className='separatorTop'></div>
        <div className='navList'>
            <ul>
                <li>
                    <span>Marketing & Communicationsli</span>
                    <img src={navSCG}/>
                </li>
                <li>
                    <span onClick={handleClickNav} className={(navClick)?"selectedNavList":""}>Psychology & Social Sciences</span>
                    <img onClick={handleClickNav} src={(navClick)?selectedNavSVG:navSCG}/>
                    <ul>
                        {
                            (navClick)&&
                            <li onClick={handleClickli} className={(selectLi)?selectedTegLi:""}>
                                <span>Behaviour Analyst</span>
                            </li>
                        }
                    </ul>
                </li>
            </ul>
        </div>
        <div className='separatorBottom'></div>
        <div className="moreProgrammes">
            <div className="button">Show all programmes</div>
        </div>
    </div>
  );
}

/*Navigation.PropTypes = {
    cbshowCourse: PropTypes.func,
}; */

export default Navigation;
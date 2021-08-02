import './Card.scss';
import logo from '../../images/Group.svg';
import icon1 from '../../images/cardImg1.svg';
import icon2 from '../../images/cardImg2.svg';


function Card() {
  return (
    <div className="card">
        <div className='card__Top'></div>
        <div className='card__Logo'><img src={logo} /></div>
        <div className='card__Title_1'>Business & Management</div>
        <div className='card__Title_2'>Master of Business Administration (CMI)</div>
        <div className='card__Info'>
            <img className="icon1" src={icon1} />
            <img className="icon2"  src={icon2} />
            <div className="graduate">Postgraduate</div>
            <div className="weeks">Every 12 weeks</div>
        </div>
        <div className='card__Button'><div className="card__Button__Text">More Info</div></div>
    </div>
  );
}

export default Card;

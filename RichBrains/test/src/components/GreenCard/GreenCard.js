import './GreenCard.scss';
import close from '../../images/close.svg';


function GreenCard() {
  return (
    <div className="greenCard">
        <img className="greenCard__close" src={close} />
        <div className="greenCard__title_1">MSc Data Analytics and Information<br />Systems Management</div>
        <div className="greenCard__title_2">
            <div className="duration">Duration:</div>
            <div className="months">Minimum: 18 months <br />Maximum: 36 months</div>
        </div>
        <div className="greenCard__title_3">
            <div>Start Dates:</div>
            <div>January, April, July, October</div>
        </div>
        <div className="cost">£8,500</div>
        <div className='greenCard__Button'><div className="greenCard__Button__Text">More Info</div></div>
    </div>
  );
}

export default GreenCard;

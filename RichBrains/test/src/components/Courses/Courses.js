import React from 'react';
import PropTypes from 'prop-types';

import './Courses.scss';

import Card from '../Card/Card';
import GreenCard from '../GreenCard/GreenCard';

class Courses extends React.PureComponent {

    static propTypes = {
        show: PropTypes.bool.isRequired,
      };
    
    render() {

        const card = <Card />;
        const greenCard = <GreenCard />;
    
        return (
            <div className="courses">
                {(this.props.show) && card}
                {(this.props.show) && greenCard}
                {(this.props.show) && card}
                {(this.props.show) && greenCard}
                {(this.props.show) && card}
                {(this.props.show) && card}
            </div>
        );
    }
}

export default Courses;
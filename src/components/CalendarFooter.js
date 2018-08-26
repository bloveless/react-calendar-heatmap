import React from 'react';
import PropTypes from 'prop-types';

const CalendarFooter = (props) => {
  const {
    minimumValue,
    maximumValue,
    minimumColor,
    maximumColor,
  } = props;

  return (
    <div className="calendarFooter">
      <span className="minimumValue">{minimumValue}</span>
      <div className="gradient" style={{ backgroundImage: `linear-gradient(to right, #${minimumColor}, #${maximumColor})` }} />
      <span className="maximumValue">{maximumValue}</span>
    </div>
  );
};

CalendarFooter.propTypes = {
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  minimumColor: PropTypes.string.isRequired,
  maximumColor: PropTypes.string.isRequired,
};

export default CalendarFooter;

import React from 'react';
import PropTypes from 'prop-types';

const CalendarFooter = (props) => {
  const { minimumValue, maximumValue } = props;

  return (
    <div className="calendarFooter">
      <span className="minimumValue">{minimumValue}</span>
      <div className="gradient" />
      <span className="maximumValue">{maximumValue}</span>
    </div>
  );
};

CalendarFooter.propTypes = {
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
};

export default CalendarFooter;

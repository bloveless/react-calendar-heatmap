import React from 'react';
import PropTypes from 'prop-types';

const CalendarFooter = (props) => {
  const { histogramData } = props;
  let minimumValue;
  let maximumValue;

  if (histogramData) {
    // Calculate the maximum and minimum values from the histogram data.
    histogramData.forEach((data) => {
      if (!minimumValue || minimumValue > data.value) {
        minimumValue = data.value;
      }

      if (!maximumValue || maximumValue < data.value) {
        maximumValue = data.value;
      }
    });
  }

  return (
    <div className="calendarFooter">
      <span className="minimumValue">{minimumValue}</span>
      <div className="gradient" />
      <span className="maximumValue">{maximumValue}</span>
    </div>
  );
};

CalendarFooter.propTypes = {
  histogramData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
};

export default CalendarFooter;

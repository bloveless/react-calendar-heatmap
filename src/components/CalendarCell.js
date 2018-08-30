import React from 'react';
import PropTypes from 'prop-types';

const CalendarCell = (props) => {
  const {
    day,
    month,
    activeMonth,
    textColor,
    backgroundColor,
    date,
    value,
  } = props;

  return (
    <div
      className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`}
      style={{ backgroundColor, color: (backgroundColor) ? `#${textColor}` : null }}
      title={value}
    >
      <div className="dayContent">
        {date}
      </div>
    </div>
  );
};

CalendarCell.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  activeMonth: PropTypes.number.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  date: PropTypes.number.isRequired,
  value: PropTypes.number,
};

CalendarCell.defaultProps = {
  backgroundColor: null,
  value: null,
};

export default CalendarCell;

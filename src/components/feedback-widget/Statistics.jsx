import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <p className="statistics__item">Good: {good}</p>
      <p className="statistics__item">Neutral: {neutral}</p>
      <p className="statistics__item">Bad: {bad}</p>
      <p className="statistics__item">Total: {total}</p>
      <p className="statistics__item">Positive Feedback: {positivePercentage} %</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

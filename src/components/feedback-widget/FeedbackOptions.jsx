import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';
import { FeedbackList } from './FeedbackList.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;

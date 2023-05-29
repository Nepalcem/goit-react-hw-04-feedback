import React ,{ useState } from 'react';
import Section from './SectionTitle';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const Feedbackwidget = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = type => {
    switch (type) {
      case 'good' : setGood((prev) => prev +1); break
      case 'neutral' : setNeutral((prev) => prev +1); break
      case 'bad' : setBad((prev) => prev +1); break
      default: break;
    }
  };

  let total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

    return (
      <div>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={incrementFeedback} />
        </Section>
        {total > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback yet'}></Notification>
        )}
      </div>
    );
  }

export default Feedbackwidget;

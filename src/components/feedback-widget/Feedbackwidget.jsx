import React, { Component } from 'react';
import Section from './SectionTitle';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class Feedbackwidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return (
      <div>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.incrementFeedback} />
        </Section>
        {total > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback yet'}></Notification>
        )}
      </div>
    );
  }
}

export default Feedbackwidget;

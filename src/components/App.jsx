import React from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const wichState = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [wichState]: (prevState[wichState] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, element) => (acc += element),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    return totalFeedbacks > 0
      ? Math.round((this.state.good / totalFeedbacks) * 100)
      : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            stats={this.state}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

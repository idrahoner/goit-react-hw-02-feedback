import React from 'react';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const wichState = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [wichState]: (prevState[wichState] += 1) }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedback();
    return totalFeedbacks > 0
      ? Math.round((this.state.good / totalFeedbacks) * 100)
      : this.state.good;
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleFeedback}>
            Good
          </button>
          <button type="button" onClick={this.handleFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.handleFeedback}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

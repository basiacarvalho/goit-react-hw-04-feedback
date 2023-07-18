import React, { Component } from 'react';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = statCategories => {
    this.setState(prevState => ({
      [statCategories]: prevState[statCategories] + 1,
    }));
  };

  countTotalFeedback = () => {
    let count = 0;
    for (const propertyName in this.state) {
      count += this.state[propertyName];
    }
    return count;
  };

  countPositiveFeedbackPercentage = () => {
    const totalCount = this.countTotalFeedback();
    if (totalCount === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalCount) * 100);
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

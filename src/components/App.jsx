import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();
    if (totalCount === 0) {
      return 0;
    }
    return Math.round((good / totalCount) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            { name: 'good', incrementFunction: incrementGood },
            { name: 'neutral', incrementFunction: incrementNeutral },
            { name: 'bad', incrementFunction: incrementBad },
          ]}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

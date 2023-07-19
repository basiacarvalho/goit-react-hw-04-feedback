import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.statistics}>
      <li className={css.statistic}>Good: {good}</li>
      <li className={css.statistic}>Neutral: {neutral}</li>
      <li className={css.statistic}>Bad: {bad} </li>
      <li className={css.statistic}>Total: {totalFeedback}</li>
      <li className={css.statistic}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};

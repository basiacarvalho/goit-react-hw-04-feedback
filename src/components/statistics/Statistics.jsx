import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
        <ul className={css.statistics}>
          <li className={css.statistic}>Good: {this.props.good}</li>
          <li className={css.statistic}>Neutral: {this.props.neutral}</li>
          <li className={css.statistic}>Bad: {this.props.bad} </li>
          <li className={css.statistic}>Total: {this.props.totalFeedback}</li>
          <li className={css.statistic}>
            Positive feedback: {this.props.positiveFeedbackPercentage}%
          </li>
        </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};

import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.feedback}>
        <div className={css.buttons}>
          {this.props.options.map(option => (
            <button
              onClick={() => this.props.onLeaveFeedback(option)}
              key={option}
              type="button"
              className={css.button}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

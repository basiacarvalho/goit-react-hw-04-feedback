import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options }) => {
  return (
    <div className={css.feedback}>
      <div className={css.buttons}>
        {options.map(option => (
          <button
            onClick={option.incrementFunction}
            key={option.name}
            type="button"
            className={css.button}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <div className={css.buttons}>
        {options.map(option => (
          <button
            onClick={() => onLeaveFeedback(option)}
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
};

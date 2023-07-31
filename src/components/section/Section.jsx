import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={css.title}>{title}</h3>
      {children}
    </>
  );
};

Section.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

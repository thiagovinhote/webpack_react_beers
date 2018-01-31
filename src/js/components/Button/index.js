import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = props => (
  <button
    style={styles.button}
    onClick={props.onClick}
  >
    { props.title }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;

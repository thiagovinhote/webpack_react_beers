import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styled';

const ButtonAction = props => (
  <Button
    onClick={props.onClick}
  >
    { props.title }
  </Button>
);

ButtonAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonAction;

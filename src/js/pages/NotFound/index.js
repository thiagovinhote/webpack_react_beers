import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Button from 'components/Button';

import styles from './styles';

class NotFound extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }
  redirect = () => {
    const { replace } = this.props.history;
    return replace('/');
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.message}> Page Not Found </h1>

        <Button
          onClick={this.redirect}
          title="Go to Home"
        />
      </div>
    );
  }
}

export default connect()(NotFound);

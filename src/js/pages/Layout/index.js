import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Layout = props => (
  <div style={styles.container}>
    <div style={styles.content}>
      <h1 style={styles.titleSection}> BEERS </h1>
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Layout;

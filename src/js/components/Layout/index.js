import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styled';

const Layout = props => (
  <Container>
    <Title> BEERS </Title>
    {props.children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Layout;

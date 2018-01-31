import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import BeerActions from 'store/ducks/beers';

import { BeatLoader } from 'react-spinners';
import Card from 'components/Card';

import styles from './styles';

class Home extends React.Component {
  static propTypes = {
    beersState: PropTypes.shape({
      beers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        tagline: PropTypes.string,
        image_url: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    beersRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { beersRequest } = this.props;
    return beersRequest();
  }

  render() {
    const { beers, loading } = this.props.beersState;
    return (
      <div style={styles.container}>
        <div style={styles.loading}>
          <BeatLoader
            color="#5ECCE3"
            loading={loading}
          />
        </div>

        { !loading &&
          beers.map(beer => (
            <Card key={beer.id} beer={beer} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beersState: state.beers,
});

const mapDispatchToProps = dispatch => ({
  beersRequest: () => dispatch(BeerActions.beersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

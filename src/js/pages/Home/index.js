import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import BeerActions from 'store/ducks/beers';

import { BeatLoader } from 'react-spinners';
import Card from 'components/Card';

import styles from './styles';

class Home extends React.Component {
  static propTypes = {
    beers: PropTypes.shape({
      data: PropTypes.arrayOf(Card.propTypes.beer),
      loading: PropTypes.bool,
    }).isRequired,
    beersRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { beersRequest } = this.props;
    return beersRequest();
  }

  renderList = () => {
    const { data } = this.props.beers;
    return data.map(beer => (
      <Card key={beer.id} beer={beer} />
    ));
  };

  renderEmptyList = () => (
    <h2 style={styles.empty}>Empty List</h2>
  );

  renderContent = () => (
    this.props.beers.data.length > 0
      ? this.renderList()
      : this.renderEmptyList()
  );

  render() {
    const { loading } = this.props.beers;
    return (
      <div style={styles.container}>
        <div style={styles.loading}>
          <BeatLoader
            color="#5ECCE3"
            loading={loading}
          />
        </div>

        { !loading &&
          this.renderContent()
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers,
});

const mapDispatchToProps = dispatch => ({
  beersRequest: () => dispatch(BeerActions.beersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

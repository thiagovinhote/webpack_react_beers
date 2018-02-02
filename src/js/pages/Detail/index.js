import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import BeerActions from 'store/ducks/beers';

import { Link } from 'react-router-dom';
import Card from 'components/Card';
import ButtonAction from 'components/ButtonAction';

class Detail extends React.Component {
  static propTypes = {
    beersState: PropTypes.shape({
      beerSelected: PropTypes.shape(),
    }),
    beerSelect: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  }

  static defaultProps = {
    beersState: {
      beerSelect: {},
    },
  }

  componentDidMount() {
    const { match: { params: { id } }, beerSelect } = this.props;
    return beerSelect(+id);
  }

  onBack = () => {
    const { goBack } = this.props.history;
    return goBack();
  }

  render() {
    return (
      <div>
        {
          this.props.beersState.beerSelected &&
          <Card complet beer={this.props.beersState.beerSelected} />
        }
        <ButtonAction
          onClick={this.onBack}
          title="Back"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beersState: state.beers,
});

const mapDispatchToProps = dispatch => ({
  beerSelect: id => dispatch(BeerActions.beerSelect(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

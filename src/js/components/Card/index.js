import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './styles';

const Card = ({ beer, complet }) => (
  <div style={styles.cardContainer}>
    { complet &&
      <div style={styles.containerImage}>
        <img style={styles.image} src={beer.image_url} alt="Beer" />
      </div>
    }
    <div style={styles.containerInfo}>
      { !complet
        ? (
          <Link to={`/detail/${beer.id}`}>
            <h3 style={styles.title}>
              { beer.name }
            </h3>
          </Link>
          )
        : (
          <h3 style={styles.title}>
            { beer.name }
          </h3>
        )
      }

      { complet &&
        <p style={styles.description}>
          { beer.description }
        </p>
      }

      <span style={styles.tagLine}>
        { beer.tagline }
      </span>
    </div>
  </div>
);

Card.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
  complet: PropTypes.bool,
};

Card.defaultProps = {
  complet: false,
};

export default Card;

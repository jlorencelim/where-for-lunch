import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import styles from './Place.css';
import Map from '../Map/Map';

const Place = ({ place, detailedData }) => {
  const {
    id,
    name = 'Where for lunch?',
    address,
    phone,
    categories,
    price,
    rating,
    reviewCount,
    photos = [],
    longitude = null,
    latitude = null,
  } = place;

  return (
    <div className={styles.root}>
      <div className={styles.name}>{ name }</div>
      <div className={styles.box}>
        {/* carousel images */}
        {
          (detailedData && photos.length > 0) &&
          <Carousel className={styles.carousel} initialSlideHeight={300}>
            { photos.map(photo => <img key={photo} src={photo} />) }
          </Carousel>
        }
        <div>{ address }</div>
        <div>{ phone }</div>
        <div>{ categories && categories.join(', ') }</div>
        <div>{ price }</div>
        { rating &&
        <div className={styles.rating}>
          <div className={styles.ratingScore}>{ reviewCount } reviews</div>
          <div className={styles.stars}>
            <div className={styles.emptyStars}></div>
            <div className={styles.fullStars} style={{ width: `${rating / 5 * 100}%` }}></div>
          </div>
        </div>
        }

        {/* Google Map */}
        { (detailedData && !_.isNull(longitude) && !_.isNull(latitude)) &&
        <div className={styles.map}>
          <Map longitude={longitude} latitude={latitude} />
        </div>
        }

        {/* show link only if showing simple data */}
        { (id && !detailedData) &&
        <div className={styles.linkContainer}>
          <Link to={`/place/${id}`} className={styles.link}>Details</Link>
        </div>
        }
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
  detailedData: PropTypes.bool,
};

export default Place;

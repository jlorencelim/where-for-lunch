import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = ({ longitude, latitude }) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: latitude, lng: longitude }}
  >
    <Marker position={{ lat: latitude, lng: longitude }} />
  </GoogleMap>
);

Map.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
};

export default compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(Map);

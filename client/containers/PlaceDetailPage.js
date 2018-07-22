import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from '../actions/placeActions';
import Place from '../components/Place/Place';


class PlaceDetailPage extends Component {
  static propTypes = {
    place: PropTypes.object,
    fetchPlaceDetail: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    const { fetchPlaceDetail, match: { params: { id } } } = this.props;

    fetchPlaceDetail(id);
  }

  render() {
    const { place } = this.props;

    return (
      <Place place={place} detailedData />
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlaceDetail: placeActions.fetchPlaceDetail,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetailPage);

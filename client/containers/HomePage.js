import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from '../actions/placeActions';
import conditionActions from '../actions/conditionActions';
import Button from '../components/Button/Button';
import Place from '../components/Place/Place';
import Condition from '../components/Condition/Condition';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  onRadiusConditionChanged = (value) => {
    this.props.setRadius(value);
  }

  onPriceConditionChanged = (value) => {
    this.props.setPrice(value);
  }

  render() {
    const { condition, place } = this.props;

    return (
      <div className="homePageWrapper">
        <Place place={place} detailedData={false} />
        <div className="searchWrapper">
          <Condition
            condition={condition}
            onRadiusConditionChanged={this.onRadiusConditionChanged}
            onPriceConditionChanged={this.onPriceConditionChanged}
          />
          <Button
            onClick={this.handleOnClick}
            theme="homepageClick"
            disabled={_.isNull(condition.longitude) || _.isNull(condition.latitude)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlaces: placeActions.fetchPlaces,
  setRadius: conditionActions.setRadius,
  setPrice: conditionActions.setPrice,
}, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPrice: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

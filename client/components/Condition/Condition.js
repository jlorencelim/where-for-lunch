import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Condition.css';

class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    onRadiusConditionChanged: PropTypes.func,
    onPriceConditionChanged: PropTypes.func,
    price: PropTypes.arrayOf(PropTypes.number),
  };

  handleOnBlurAction = (e) => {
    this.props.onRadiusConditionChanged(e.target.value);
  }

  onCheckboxValueChanged = (e) => {
    const { checked, value } = e.target;
    const { condition: { price } } = this.props;

    if (checked) {
      price.push(Number(value));
    } else {
      _.remove(price, element => element === Number(value));
    }

    this.props.onPriceConditionChanged(price);
  }

  renderPriceCheckboxes = () => (
    _.range(1, 5).map(checkbox => (
      <Checkbox
        key={checkbox}
        label={'$'.repeat(checkbox)}
        value={checkbox}
        onChange={this.onCheckboxValueChanged}
      />
    ))
  )

  render() {
    const { condition: { radius } } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.filter}>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction} />
          <span>meters</span>
        </div>
        <div className={styles.filter}>
          <span>price:</span>
          { this.renderPriceCheckboxes() }
        </div>
      </div>
    );
  }
}

export default Condition;

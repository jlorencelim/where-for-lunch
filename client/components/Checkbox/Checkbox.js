import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ label, value, onChange }) => (
  <div className={styles.root}>
    <input
      type="checkbox"
      value={value}
      onChange={onChange}
    />
    <label>{label}</label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class Field extends PureComponent {
  render() {
    return (
      <FormGroup>
        <ControlLabel>{this.props.title}</ControlLabel>
        <FormControl.Static>
          {this.props.value}
        </FormControl.Static>
      </FormGroup>
    );
  }
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;

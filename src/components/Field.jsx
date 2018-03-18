import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class Field extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={4} md={2}>
          {this.props.title}
        </Col>
        <Col>
          {this.props.value}
        </Col>
      </Row>
    );
  }
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;

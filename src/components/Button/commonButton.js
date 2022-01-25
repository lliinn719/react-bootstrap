/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';

export default class CommonButton extends Component {
  state = {};

  render() {
    return (
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          Button #1
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button as={Col} variant="success">
          Button #3
        </Button>
      </Row>
    );
  }
}

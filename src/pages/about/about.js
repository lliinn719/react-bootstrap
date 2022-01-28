/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './about.less';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const mapStateToProps = state => {
  return {
    foods: state.foods.foods || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_food(loading, callback) {
      dispatch({ type: 'foods/GET_food', loading, callback });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class About extends Component {
    state = {};
    componentDidMount = () => {
      const { GET_food } = this.props;
      GET_food();
    };

    render() {
      return (
        <Container
          fluid
          className="aboutPage d-flex justify-content-center align-items-center flex-column p-5"
        >
          <h3 className="my-5 aboutTitle text-center">
            客人總是在詢問
            <br /> 這麼好吃的秘訣是什麼
          </h3>
          <Row sm={1} lg={3} className="mb-5">
            <Col>
              <Card className="m-3 p-5">
                <Card.Img variant="top" src={require('../../assets/images/vegetables.jpg')} />
                <Card.Body>
                  <Card.Title className="text-center">台灣本土蔬菜</Card.Title>
                  <Card.Text className="text-center">
                    In hac habitasse platea dictumst. Vivamus adit Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="primary" className="d-block mx-auto w-100">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-3 p-5 ">
                <Card.Img variant="top" src={require('../../assets/images/chef.jpeg')} />
                <Card.Body>
                  <Card.Title className="text-center">專業米其林廚師</Card.Title>
                  <Card.Text className="text-center">
                    In hac habitasse platea dictumst. Vivamus adit Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="primary" className="d-block mx-auto w-100">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-3 p-5 ">
                <Card.Img variant="top" src={require('../../assets/images/Ingredients.jpeg')} />
                <Card.Body>
                  <Card.Title className="text-center">對於專業不能退讓</Card.Title>
                  <Card.Text className="text-center">
                    In hac habitasse platea dictumst. Vivamus adit Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="primary" className="d-block mx-auto w-100">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  },
);

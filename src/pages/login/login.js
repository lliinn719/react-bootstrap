/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import './login.less';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaHamburger } from 'react-icons/fa';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Login extends Component {
    state = {};

    handleSubmit = () => {
      router.push('/signup');
    };

    render() {
      return (
        <div>
          <Container
            fluid
            className="loginPage d-flex justify-content-center align-items-center p-5"
          >
            <Row>
              <Col>
                <Form className="loginForm p-5 text-center">
                  <FaHamburger className="hamburgerIcon" />
                  <h3 className="my-2">六角西餐廳</h3>
                  <Form.Group className="mt-4" controlId="formBasicAcconut">
                    <Form.Control type="acconut" placeholder="帳號" />
                  </Form.Group>
                  <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="密碼" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-3 w-100"
                    onClick={this.handleSubmit}
                  >
                    送出
                  </Button>
                  <p className="text-center mt-5 mb-0 signupText">
                    沒有帳號嗎?&nbsp;
                    <a href="/signup">立即註冊</a>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  },
);

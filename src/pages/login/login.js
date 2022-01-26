/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
// import router from 'umi/router';
import './login.less';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaHamburger } from 'react-icons/fa';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    POST_login(payload, loading, callback) {
      dispatch({ type: 'users/POST_login', payload, loading, callback });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Login extends Component {
    state = {
      email: '',
      password: '',
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state);
    };

    handleSubmit = e => {
      const { POST_login } = this.props;
      const { email, password } = this.state;
      e.preventDefault();
      const payload = {
        email: email,
        password: password,
      };
      POST_login(payload);
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
                <Form
                  className="loginForm p-5 text-center"
                  role="form"
                  onSubmit={this.handleSubmit}
                >
                  <FaHamburger className="hamburgerIcon" />
                  <h3 className="my-2">六角西餐廳</h3>
                  <Form.Group className="mt-4" controlId="formBasicAcconut">
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      placeholder="帳號"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      placeholder="密碼"
                      onChange={this.handleChange}
                    />
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

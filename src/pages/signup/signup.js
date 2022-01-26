/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
// import router from 'umi/router';
import './signup.less';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaHamburger } from 'react-icons/fa';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    POST_signUp(payload, loading, callback) {
      dispatch({ type: 'users/POST_signUp', payload, loading, callback });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Signup extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      validated: false,
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state);
    };

    handleSignUp = e => {
      const { POST_signUp } = this.props;
      const { name, email, password } = this.state;
      e.preventDefault();
      const payload = {
        name: name,
        email: email,
        password: password,
      };
      POST_signUp(payload);
      this.setState({ validated: true });
    };

    render() {
      const { validated } = this.state;
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
                  validated={validated}
                  onSubmit={this.handleSignUp}
                >
                  <FaHamburger className="hamburgerIcon" />
                  <h3 className="my-2">六角西餐廳</h3>
                  <Form.Group className="mt-4" controlId="formBasicName">
                    <Form.Control
                      required
                      name="name"
                      type="name"
                      placeholder="名稱"
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">請填寫暱稱</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      placeholder="信箱"
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
                  <Form.Group
                    className="my-3"
                    controlId="formBasicCheckPassword"
                    onChange={this.handleChange}
                  >
                    <Form.Control
                      required
                      name="checkpassword"
                      type="password"
                      placeholder="密碼"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3 w-100">
                    註冊
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

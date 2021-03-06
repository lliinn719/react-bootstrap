/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaUserAlt, FaHamburger } from 'react-icons/fa';
import './GlobalLayout.less';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(path, callback) {
      dispatch({ type: 'global/goToRoute', path, callback });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class GlobalLayout extends Component {
      state = {};

      componentDidMount = () => {};

      handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
      };

      render() {
        const { children } = this.props;
        return (
          <div className="wrapper">
            {localStorage.getItem('token') ? (
              <Container fluid className="px-0">
                <Navbar className="topNavbar" expand="lg">
                  <Container>
                    <Navbar.Brand href="/">
                      <FaHamburger className="mx-2" />
                      六角西餐廳
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav>
                        <Nav.Link href="/about">關於我們</Nav.Link>
                        <NavDropdown title="餐廳特色" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.2">地圖</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">訂購</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/food">餐點介紹</Nav.Link>
                        <NavDropdown
                          title={<FaUserAlt />}
                          id="basic-nav-userDropdown"
                          className="text-white userDropdown"
                        >
                          <NavDropdown.Item href="#action/3.2">帳戶資料</NavDropdown.Item>
                          <NavDropdown.Item onClick={this.handleLogout}>登出</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Container>
            ) : (
              <Container fluid className="px-0">
                <Navbar className="topNavbar" expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">六角西餐廳</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav>
                        <Nav.Link href="#home">關於我們</Nav.Link>
                        <NavDropdown title="餐廳特色" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">主廚</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">地圖</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">訂購</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/login">登入/註冊</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Container>
            )}
            <Container fluid className="px-0 ">
              <div className="layoutContainer">{children}</div>
            </Container>
            <Container fluid className="footer">
              <Row className="footer p-5">
                <Col sm="12" lg="4">
                  <h3>關於六角西餐廳</h3>
                  <p>
                    Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque
                    volutpat augue enim, pulvinar lobortis nibh lacinia at.
                  </p>
                </Col>
                <Col sm="12" lg={{ span: 5, offset: 1 }}>
                  <h3>聯絡方式</h3>
                  <p>
                    高雄市中正五路到底 <br />
                    +886 886 886 <br />
                    service@hexschool.com
                  </p>
                </Col>
                <Col sm="12" lg="2">
                  <h3>六角西餐廳</h3>
                  <div className="iconBlock">
                    <BsGoogle className="googleIcon" />
                    <BsFacebook className="facebookIcon" />
                    <BsTwitter className="twitterIcon" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
    },
  ),
);

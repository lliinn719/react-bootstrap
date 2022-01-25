/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './Index.less';
import CommonButton from '../../components/Button/commonButton';
import { Container, Alert, Row, Col, Figure, Image, Form, Button } from 'react-bootstrap';

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
  class Index extends Component {
    render() {
      return (
        <div>
          <Container fluid className="indexPage p-5">
            <Alert variant="light">
              <Alert.Heading>咬一口就無法忘懷的漢堡</Alert.Heading>
              <p>七夕絕對無法錯過的好滋味</p>
              <hr />
              <p className="mb-0">六角大漢堡</p>
            </Alert>
            {/* <CommonButton /> */}
          </Container>
          <Container fluid className="chefBlock p-5">
            <Row>
              <Col sm="12" md="6" className="d-flex justify-content-center">
                <Figure className="text-center">
                  <Figure.Image
                    width={470}
                    height={520}
                    alt="主廚照片"
                    src={require('../../assets/images/left.png')}
                    className="chefImage"
                  />
                </Figure>
              </Col>
              <Col sm="12" md="6" className="d-flex justify-content-center flex-column">
                <h3>今日主廚：帕金森、梅在帕</h3>
                <h4>Tody Chef: Plum in Shock</h4>
                <p className="my-5">
                  Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                  posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                  Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci
                  lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed
                  ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis
                  varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor
                  aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.
                </p>
              </Col>
            </Row>
          </Container>
          <Container fluid className="shareBlock">
            <Row>
              <Col className="text-center">
                <h4 className="mt-5 text-white font-weight-bold">聽聽別人的感想</h4>
              </Col>
            </Row>
            <Row className="p-5">
              <Col sm="12" md="4">
                <Row>
                  <Col>
                    <Image
                      shape="roundedCircle"
                      src={require('../../assets/images/people1.png')}
                      className="d-block mx-auto"
                    />
                    <p className="mt-3 text-center">高雄一口吃</p>
                  </Col>
                  <Col>
                    <p>
                      自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-end">-- 金身道士</Col>
                </Row>
              </Col>
              <Col sm="12" md="4">
                <Row>
                  <Col>
                    <Image
                      shape="roundedCircle"
                      src={require('../../assets/images/people2.png')}
                      className="d-block mx-auto"
                    />
                    <p className="mt-3 text-center">廟口小霸王</p>
                  </Col>
                  <Col>
                    <p>
                      自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-end">-- 產品經理</Col>
                </Row>
              </Col>
              <Col sm="12" md="4">
                <Row>
                  <Col>
                    <Image
                      shape="roundedCircle"
                      src={require('../../assets/images/people3.png')}
                      className="d-block mx-auto"
                    />
                    <p className="mt-3 text-center">春天也來了</p>
                  </Col>
                  <Col>
                    <p>
                      自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-end">-- 美麗萬分</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid className="orderBlock">
            <Row>
              <Col className="my-5">
                <h3 className="mt-2 text-center">我們的位置不太夠坐</h3>
                <h3 className="mt-2 text-center">要不要先訂位呢？</h3>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="6" className="p-5">
                <Image src={require('../../assets/images/map.png')} className="d-block mx-auto" />
              </Col>
              <Col md="12" lg="6" className="p-5">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control type="name" placeholder="請輸入姓名" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>電話</Form.Label>
                    <Form.Control type="phone" placeholder="請輸入電話" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>信箱</Form.Label>
                    <Form.Control type="phone" placeholder="請輸入信箱" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPeople">
                    <Form.Label>人數</Form.Label>
                    <Form.Control type="people" placeholder="請輸入人數" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRadioButton">
                    <Form.Label>是否需要素食</Form.Label> &nbsp;
                    <Form.Check type="radio" inline label="是" name="group1" id="one" />
                    <Form.Check type="radio" inline label="否" name="group1" id="two" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submitButton">
                    送出
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  },
);

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'dva';
import './food.less';
import { Container, Image } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';

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
  class Foods extends Component {
    state = {};
    componentDidMount = () => {
      const { GET_food } = this.props;
      GET_food();
    };

    renderList = () => {};

    render() {
      const { foods } = this.props;
      const columns = [
        {
          dataField: 'images',
          text: '餐點圖片',
          formatter: (cell, row, rowIndex, colIndex) => {
            return (
              <Image
                src={require(`../../assets/images/${row.name}.jpg`)}
                fluid
                className="foodImage"
              />
            );
          },
        },
        {
          dataField: 'name',
          text: '餐點名稱',
        },
        {
          dataField: 'price',
          text: '餐點價格',
        },

        {
          dataField: 'type',
          text: '餐點類型',
        },
        {
          dataField: 'description',
          text: '餐點敘述',
        },
      ];

      const food = [
        {
          images: (
            <Image src={require(`../../assets/images/銅鑼燒.jpg`)} fluid className="foodImage" />
          ),
          name: '銅鑼燒',
          price: 45,
          type: '甜點',
          description: '甜而不膩，越來越唰嘴!',
        },
        {
          images: (
            <Image src={require(`../../assets/images/牛排.jpg`)} fluid className="foodImage" />
          ),
          name: '牛排',
          price: 320,
          type: '排餐',
          description: '5分熟最剛好，多汁不柴',
        },
        {
          images: (
            <Image
              src={require(`../../assets/images/番茄肉醬義大利麵.jpg`)}
              fluid
              className="foodImage"
            />
          ),
          name: '番茄肉醬義大利麵',
          price: 240,
          type: '主食',
          description: '番茄味非常濃郁，肉醬也不會過於死鹹',
        },
        {
          images: (
            <Image
              src={require(`../../assets/images/莓果氣泡飲.jpg`)}
              fluid
              className="foodImage"
            />
          ),
          name: '莓果氣泡飲',
          price: 110,
          type: '飲料',
          description: '酸酸甜甜的滋味，如初戀一般',
        },
        {
          images: (
            <Image src={require(`../../assets/images/蘑菇濃湯.jpg`)} fluid className="foodImage" />
          ),
          name: '蘑菇濃湯',
          price: 60,
          type: '湯品',
          description: '湯頭新鮮，用料實在',
        },
      ];
      console.log('food', _.isEmpty(foods));
      return (
        <Container fluid className="foodPage d-flex justify-content-center align-items-center p-5">
          {_.isEmpty(foods) ? (
            <BootstrapTable className="foodTable" keyField="name" data={food} columns={columns} />
          ) : (
            <BootstrapTable className="foodTable" keyField="name" data={foods} columns={columns} />
          )}
        </Container>
      );
    }
  },
);

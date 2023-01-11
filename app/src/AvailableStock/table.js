import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

import IMAGES from '../utils/images';

import Global from '../../global';
import Font from '../../theme';
import DColor from '../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

const StockTable = () => {
  data = {
    tableHead: ['Model', 'Variant', 'SKU', 'Stock', 'Inventory Location'],
    tableData: [
      ['Total', '', '', '343', ''],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
      [
        'DESTINI 125',
        'HDESCDRLMFI',
        'HDESCDRLMFICBR',
        '1',
        '10800 DEALER\nSHOWROOM',
      ],
    ],
  };

  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: DColor.gray60}}>
            <Row
              data={data.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={data.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default StockTable;

const styles = StyleSheet.create({
  container: {margin: 8},
  head: {height: 40, backgroundColor: DColor.grey},
  text: {margin: 6, color: DColor.white},
});

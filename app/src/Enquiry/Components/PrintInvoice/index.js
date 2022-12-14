import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

const PrintInvoiceScreen = () => {
  const variants = [];
  const sku = [];

  const printPDF = async () => {
    // const htmlString = await buildDynamicHtml();
    const options = {
      html: '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
      fileName: 'test',
      directory: 'Documents',
    };
    const results = await RNHTMLtoPDF.convert(options);
    // alert(results.filePath);
    await RNPrint.print({filePath: results.filePath});
  };
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <Text style={Styles.text}>Variants:</Text>
        <SelectDropdown
          data={variants}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText="Select"
          buttonStyle={Styles.dropdown}
          buttonTextStyle={Styles.dropdownBtnTxtStyle}
          dropdownStyle={Styles.dropdownDropdownStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={10}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowStyle={Styles.dropdownRowStyle}
          rowTextStyle={Styles.dropdownRowTxtStyle}
        />

        <Text style={Styles.text}>SKU:</Text>
        <SelectDropdown
          data={sku}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText="Select"
          buttonStyle={Styles.dropdown}
          buttonTextStyle={Styles.dropdownBtnTxtStyle}
          dropdownStyle={Styles.dropdownDropdownStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={10}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowStyle={Styles.dropdownRowStyle}
          rowTextStyle={Styles.dropdownRowTxtStyle}
        />

        <View style={Styles.button}>
          <Button
            title="PRINT"
            onPress={() => printPDF()}
            color={DColor.appColor}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PrintInvoiceScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  text: {
    color: DColor.white,
  },
  button: {
    margin: 10,
    width: ActualWidth(330),
  },
  dropdown: {
    backgroundColor: DColor.white,
    width: ActualWidth(330),

    margin: 10,
    textAlign: 'left',
  },
  dropdownBtnTxtStyle: {color: 'black', textAlign: 'left', fontSize: 14},
  // dropdownDropdownStyle: {backgroundColor: 'black'},
  // dropdownRowStyle: {backgroundColor: 'black', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: 'black', textAlign: 'center', fontSize: 16},
});

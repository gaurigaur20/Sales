import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import DialogInput from 'react-native-dialog-input';

import Global from '../../../../global';
import Font from '../../../../theme';
import DColor from '../../../../theme/colors';
const {ActualHeight, ActualWidth} = Global;

import IMAGES from '../../../utils/images';

import promoteProspect from '../Promote';

const ProspectDetailsScreen = ({navigation}) => {
  const [feedbackDialogVisible, setFeedbackDialogVisible] = useState(false);
  const [feedbackComment, setFeedbackComment] = useState('');
  return (
    <ImageBackground source={IMAGES.BACKGROUND_IMAGE} style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <DialogInput
          isDialogVisible={feedbackDialogVisible}
          title={'Confirmation needed !!!'}
          message={
            'You are about to close this prospect. Are you sure, you want to continue?'
          }
          hintInput={'comment'}
          submitText={'YES'}
          submitInput={comment => {
            setFeedbackComment(comment);
            setFeedbackDialogVisible(false);
            console.log('comment is', comment);
          }}
          closeDialog={() => setFeedbackDialogVisible(false)}
          cancelText={'NO'}></DialogInput>
        <View style={Styles.header}>
          <Text style={{color: DColor.white}}>Prospect ID</Text>
          <Text
            style={{
              top: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              padding: 5,
              fontWeight: 'bold',
              color: DColor.white,
            }}>
            2-BB824TT
          </Text>
        </View>
        <View style={Styles.dynamicContainer}>
          <View style={Styles.leftContainer}>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Prospect ID</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                2-BB824TT
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Customer Name</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Gauri
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Model Interested</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                DESTINI 125
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Email Id</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Not Available
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Expected Purchase Date</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Date time
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Comment</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Testing
              </Text>
            </View>
          </View>
          <View style={Styles.rightContainer}>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Created Date</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Date Time
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Customer Mobile Number</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                9149185092
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Status</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Open
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Enquiry Source</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Camapaign
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Next Follow-up Date</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Date Time
              </Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={{fontSize: 12}}>Test Ride Opted</Text>
              <Text style={{fontWeight: 'bold', color: DColor.black}}>
                Yes/No
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{margin: 5}}>
            <Pressable
              onPress={() => promoteProspect()}
              style={Styles.pressable}>
              <Text style={Styles.pressableText}>Promote</Text>
            </Pressable>

            <Pressable
              onPress={() => console.log('Promoted')}
              style={Styles.pressable}>
              <Text style={Styles.pressableText}>Submit Feedback(TR)</Text>
            </Pressable>
            <Pressable
              onPress={() => setFeedbackDialogVisible(true)}
              style={Styles.pressable}>
              <Text style={Styles.pressableText}>
                Mark As Information Provided
              </Text>
            </Pressable>
          </View>
          <View style={Styles.rightContainer}>
            <Pressable
              onPress={() => navigation.navigate('Edit Prospect')}
              style={Styles.pressable}>
              <Text style={Styles.pressableText}>Edit</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setFeedbackDialogVisible(true);
              }}
              style={Styles.pressable}>
              <Text style={Styles.pressableText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProspectDetailsScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: DColor.greyishBrown,
    // height: ActualHeight(560),
    margin: 20,
    borderRadius: ActualHeight(12),
  },
  header: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    // backgroundColor: DColor.red,
  },
  dynamicContainer: {
    margin: 10,
    backgroundColor: DColor.white,
    borderRadius: ActualHeight(12),
  },
  leftContainer: {
    margin: 5,
  },
  rightContainer: {
    top: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    margin: 5,
  },
  btnContainer: {},
  pressable: {
    backgroundColor: DColor.appColor,
    width: ActualWidth(140),
    alignItems: 'center',
    margin: 10,
    borderRadius: ActualHeight(6),
    // height: ActualHeight(40),
  },
  pressableText: {
    color: DColor.white,
    margin: 10,
    fontSize: 12,
  },
});

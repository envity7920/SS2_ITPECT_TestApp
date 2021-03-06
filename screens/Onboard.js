import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {colors} from '../utils/colors';

const Onboard = ({navigation}) => {



const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
        <Text>Done</Text>
    </TouchableOpacity>
)

    return (
        <Onboarding
        onSkip = {()=>navigation.replace("Signin")}
        onDone = {()=>navigation.navigate("Signin")}
        DoneButtonComponent = {Done}
  pages={[
    {
      backgroundColor: '#4552CA',
      image: <Image style= {style.onboardScreen} source={require('../assets/images/on1.png')} />,
      title: <Text style={style.titleTxt}></Text>,
      subTitleStyles: style.title,
      subtitle: '',
    },
    {
        backgroundColor: '#C7ADFD',
        image: <Image style= {style.onboardScreen} source={require('../assets/images/on2.png')} />,
        title: "",
        subTitleStyles: style.title,
        subtitle: 'Just need a mobile phone, you can practice anytime, anywhere!',
      },
      {
        backgroundColor: colors.primary_blue,
        image: <Image style= {style.onboardScreen} source={require('../assets/images/on3.png')} />,
        title: "",
        subTitleStyles: style.title,
        subtitle: '20 questions each test. One wrong answer is one new knowledge',
      }
  ]}
/>
    )
}

export default Onboard;


const style = StyleSheet.create({

onboardScreen:{
  marginBottom: -260
},
  title: {
    fontFamily: 'Montserrat-Medium',
    paddingBottom: 90,
   
  
  }, 
 subtitle: {
   marginBottom: 90
 }
});
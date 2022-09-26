import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import Logo from '../../../assets/images/logo.png';
  import CustomInput from '../../components/CustomInput';
  import CustomButton from '../../components/CustomButton';
  import SocialSignInButtons from '../../components/SocialSignInButtons';
  
  const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
  
    const {height} = useWindowDimensions();
  
    const onConfirmPressed = () => {
      console.warn('confirm pressed');
    };
  
    const onSignInPress = () => {
      console.warn('Sign In page will appear');
    };
  
    const onResendPress = () => {
      console.warn('on terms of use pressed');
    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Confirm your email</Text>
          <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
          />
  
          <CustomButton
            text="Confirm"
            onPress={onConfirmPressed}
            type="PRIMARY"
          />
  
          <CustomButton
            text="Resend code"
            onPress={onResendPress}
            type="SECONDARY"
          />
  
          <CustomButton
            text="Back to Sign In"
            onPress={onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '70%',
      maxWidth: 300,
  
      maxHeight: 200,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    text: {
      color: 'gray',
      marginVertical: 10,
    },
    link: {
      color: '#FDB075',
    },
  });
  
  export default ConfirmEmailScreen;
  
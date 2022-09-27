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
  
  const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const {height} = useWindowDimensions();
  
    const onConfirmPressed = () => {
      console.warn('confirm pressed');
    };

    const onSubmitPressed = () => {
        console.warn('submit');
      };
  
    const onSignInPress = () => {
      console.warn('Sign In page will appear');
    };
  
   
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}
          />
          <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
          />
  
          <CustomButton
            text="Submit"
            onPress={onSubmitPressed}
            type="PRIMARY"
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
  
  export default NewPasswordScreen;
  
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
import { useNavigation } from '@react-navigation/native';
  
  const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
  
    const {height} = useWindowDimensions();

    const navigation = useNavigation();
  
  
  
    const onSignInPress = () => {
      navigation.navigate('SignIn');
    };
  
    const onSendPressed = () => {
      navigation.navigate('NewPassword');
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
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
  
          <CustomButton
            text="Send"
            onPress={onSendPressed}
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
  
  export default ForgotPasswordScreen;
  
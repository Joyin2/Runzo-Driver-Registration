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
import {useForm} from 'react-hook-form';

const SignUpScreen = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');

  // const [password, setPassword] = useState('');
  // const [passwordRepeat, setPasswordRepeat] = useState('');
  const {control, handleSubmit} = useForm();
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };


  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = ()=>{
    console.warn('on terms of use pressed');
  };
  const onPrivacyPressed = ()=>{
    console.warn('on Privacy pressed');
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Text style={styles.title}>Create an account </Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY"
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use{' '}</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>{' '}Privacy Policy</Text>
        </Text>
       <SocialSignInButtons/>
        <CustomButton
          text="Have an account? Sign In"
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
  text:{
    color: 'gray',
    marginVertical: 10,
  },
  link:{
    color:"#FDB075"
  }
});

export default SignUpScreen;

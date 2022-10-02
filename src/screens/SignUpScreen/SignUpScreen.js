import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignUpScreen = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');

  // const [password, setPassword] = useState('');
  // const [passwordRepeat, setPasswordRepeat] = useState('');
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onRegisterPressed = async(data) => {
    const {username, password, email, name} = data
    try {
      await Auth.signUp({ 
        username,
        password,
        attributes: {email, name, preferred_username: username},
      });
      navigation.navigate('ConfirmEmail', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }

    // navigation.navigate('ConfirmEmail');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn('on terms of use pressed');
  };
  const onPrivacyPressed = () => {
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
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'name is required',
            // minLength: {
            //   value: 1,
            //   message: 'name should be atleast 1 characters long',
            // },
            maxLength: {
              value: 80,
              message: 'name should be maximum 24 characters long',
            },
          }}
        />
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Username should be atleast 6 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be maximum 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          keyboardType="email-address"
          rules={{required: 'Email is required'}}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be atleast 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Confirm Password"
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || 'password do not match',
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY"
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{' '}
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;

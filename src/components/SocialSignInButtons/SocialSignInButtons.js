import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInWithFacebook = () => {
    console.warn('Sign in with facebook');
  };
  const onSignInWithGoogle = () => {
    console.warn('Sign in with google');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButtons;

import React from 'react';
import {Share} from 'react-native';
import colors from '../config/colors';
import PressIcon from './PressIcon';

const ShareContent = ({shareContent}) => {
  const onShare = async () => {
    try {
      await Share.share({
        message: shareContent,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <PressIcon
      name={'share'}
      color={colors.white}
      size={25}
      onPress={onShare}
    />
  );
};

export default ShareContent;

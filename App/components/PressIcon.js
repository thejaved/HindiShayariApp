import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const PressIcon = ({name, type, color, onPress, size, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} type={type} color={color} size={size} {...props} />
    </TouchableOpacity>
  );
};

export default PressIcon;

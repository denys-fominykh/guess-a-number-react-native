import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

import { BodyTextProps } from '../interfaces/IBodyText';

const BodyText: FC<BodyTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default BodyText;

import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { CardProps } from './CardInterfaces';

const Card: FC<CardProps> = ({ children, containerStyle }) => {
  return <View style={{ ...styles.card, ...containerStyle }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;

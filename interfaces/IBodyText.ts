import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface BodyTextProps {
  children: React.ReactNode;
  style?: ViewStyle | TextStyle;
}

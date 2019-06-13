import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Label extends Component {
  render() {
    const {
      bold,
      small,
      large,
      xLarge,
      children,
      style,
      colorDark,
      colorNormal,
      colorLight
    } = this.props;

    return (
      <Text
        style={[
          styles.default,
          bold && styles.bold,
          small && styles.small,
          large && styles.large,
          xLarge && styles.xLarge,
          colorDark && styles.colorDark,
          colorNormal && styles.colorNormal,
          colorLight && styles.colorLight,
          style && style
        ]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    fontFamily: 'Montserrat'
  },
  bold: {
    fontWeight: 'bold'
  },
  small: {
    fontSize: 12
  },
  large: {
    fontSize: 24
  },
  xLarge: {
    fontSize: 48
  },
  colorDark: {
    color: '#3D3D3D'
  },
  colorNormal: {
    color: '#979797'
  },
  colorLight: {
    color: '#D2D2D2'
  },
});

export default Label;

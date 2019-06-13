import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Stack extends Component {
  render() {
    const {
      horizontal,
      absolute,
      left,
      right,
      top,
      bottom,
      centerItems,
      hCenterItems,
      vCenterItems,
      fill,
      children,
      flex,
      style,
      highlight,
      colorDark,
      colorNormal,
      colorLight,
      white,
      clip,
      radius,
      circle,
      paddingSmall,
      paddingMedium,
      paddingLarge,
      borderLight,
      borderNormal,
      borderDark,
      border
    } = this.props;

    return (
      <View
        style={[
          styles.default,
          !absolute && flex && { flex },
          horizontal && styles.horizontal,
          absolute && styles.absolute,
          centerItems && styles.centerItems,
          hCenterItems && styles.hCenterItems,
          vCenterItems && styles.vCenterItems,
          absolute && fill && styles.fill,
          absolute && left && styles.left,
          absolute && right && styles.right,
          absolute && top && styles.top,
          absolute && bottom && styles.bottom,
          colorDark && styles.colorDark,
          colorNormal && styles.colorNormal,
          colorLight && styles.colorLight,
          white && styles.white,
          highlight && styles.highlight,
          clip && styles.clip,
          radius && styles.radius,
          circle && styles.circle,
          circle && { width: circle, height: circle },
          !circle && paddingSmall && styles.paddingSmall,
          !circle && paddingMedium && styles.paddingMedium,
          !circle && paddingLarge && styles.paddingLarge,
          borderLight && styles.borderLight,
          borderNormal && styles.borderNormal,
          borderDark && styles.borderDark,
          (borderLight || borderNormal || borderDark) && {borderWidth: 1},
          border && {borderWidth: border},
          style && style
        ]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  default: {},
  horizontal: {
    flexDirection: 'row'
  },
  absolute: {
    position: 'absolute'
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  hCenterItems: {
    alignItems: 'center'
  },
  vCenterItems: {
    justifyContent: 'center'
  },
  fill: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  left: {
    left: 0
  },
  right: {
    right: 0
  },
  top: {
    top: 0
  },
  bottom: {
    bottom: 0
  },
  highlight: {
    backgroundColor: 'yellow'
  },
  colorDark: {
    backgroundColor: '#3D3D3D'
  },
  colorNormal: {
    backgroundColor: '#979797'
  },
  colorLight: {
    backgroundColor: '#D2D2D2'
  },
  white: {
    backgroundColor: 'white'
  },
  clip: {
    overflow: 'hidden'
  },
  radius: {
    borderRadius: 5
  },
  circle: {
    borderRadius: 200
  },
  paddingSmall: {
    padding: 2
  },
  paddingMedium: {
    padding: 5
  },
  paddingLarge: {
    padding: 10
  },
  borderLight: {
    borderColor: '#D2D2D2'
  },
  borderNormal: {
    borderColor: '#979797'
  },
  borderDark: {
    borderColor: '#3D3D3D'
  }
});

export default Stack;

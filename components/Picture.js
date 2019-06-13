import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Picture extends Component {
  render() {
    const { fill, style } = this.props;

    return <Image styles={[fill && styles.fill, style]} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default Picture;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Stack, Label, Space, Picture } from './components';

const woman2 = require('./assets/images/woman_2.png');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Stack>
          <Stack horizontal absolute centerItems fill>
            <Label large colorLight>
              Hello,
            </Label>
            <Space small />
            <Label large bold colorDark>
              World!
            </Label>
            <Space />
            <Stack paddingSmall radius colorLight clip centerItems>
              <Stack>
                <Label large bold>
                  Hi
                </Label>
              </Stack>
            </Stack>
          </Stack>
          <Picture fill source={woman2} />
        </Stack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F5'
  }
});

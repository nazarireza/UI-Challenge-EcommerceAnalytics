/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Stack, Label, Space, Picture } from './components';

const woman1 = require('./assets/images/woman_1.png');
const woman2 = require('./assets/images/woman_2.png');
const woman3Thumbnail = require('./assets/images/woman_3_thumb.jpeg');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Space />
        <Stack horizontal centerItems>
          <Space large />
          <Stack>
            <Label bold colorNormal>
              Authentic
            </Label>
            <Label bold colorNormal>
              Apparel
            </Label>
          </Stack>
          <Space fill />
          <Stack horizontal centerItems>
            <Stack paddingMedium centerItems circle={20} colorDark>
              <Label small white>
                12
              </Label>
            </Stack>
            <Space small />
            <Icon name="menu" size={20} />
          </Stack>
          <Space large />
        </Stack>
        <Stack horizontal>
          <Space large />
          <Stack flex={1} vCenterItems>
            <Stack>
              <Label colorNormal xLarge>
                Open
              </Label>
              <Label colorNormal xLarge>
                cable-knit
              </Label>
              <Label colorNormal xLarge>
                sweater
              </Label>
            </Stack>
            <Space large />
            <Stack horizontal white>
              <Picture
                style={{ width: 100, height: 120 }}
                source={woman3Thumbnail}
              />
              <Stack centerItems flex={1}>
                <Label colorNormal>GOOD</Label>
                <Label colorNormal>LIGHTING IS</Label>
                <Label colorNormal>ALL YOU NEED</Label>
              </Stack>
            </Stack>
            <Space large />
            <Stack horizontal>
              <Stack circle={30} centerItems>
                <Stack circle={10} colorNormal />
              </Stack>
              <Space small />
              <Stack circle={30} centerItems>
                <Stack circle={10} colorNormal />
              </Stack>
              <Space small />
              <Stack circle={30} borderNormal centerItems>
                <Stack circle={10} colorDark />
              </Stack>
              <Space small />
              <Stack circle={30} centerItems>
                <Stack circle={10} colorNormal />
              </Stack>
            </Stack>
            <Space large />
          </Stack>
          <Stack flex={0.3} />
          <Stack flex={1} hCenterItems>
            <Picture style={{ width: 310 }} source={woman1} />
          </Stack>
          <Stack flex={0.3} />
          <Stack vCenterItems flex={1}>
            <Stack horizontal>
              <Stack circle={30} borderNormal centerItems>
                <Stack circle={20} colorLight />
              </Stack>
              <Space small />
              <Stack circle={30} borderNormal centerItems>
                <Stack circle={20} colorNormal />
              </Stack>
              <Space small />
              <Stack circle={30} borderNormal centerItems>
                <Stack circle={20} colorDark />
              </Stack>
            </Stack>
            <Space large />
            <Label large colorNormal>
              $239.99
            </Label>
            <Space />
            <Label small colorNormal>
              Women’s high neck sweater with a soft finish. Available in
              different colors and prints.
            </Label>
            <Space />
            <Stack horizontal>
              <Stack circle={40} border={2} borderDark centerItems>
                <Label colorNormal>S</Label>
              </Stack>
              <Space />
              <Stack circle={40} border={2} borderNormal centerItems>
                <Label colorNormal>M</Label>
              </Stack>
              <Space />
              <Stack circle={40} border={2} borderNormal centerItems>
                <Label colorNormal>L</Label>
              </Stack>
            </Stack>
            <Space large />
            <Stack>
              <Stack horizontal>
                <Label colorDark>Add To Cart</Label>
                <Space fill />
                <Icon name="plus" size={20} />
              </Stack>
              <Stack style={{ height: 2 }} colorNormal />
            </Stack>
          </Stack>
          <Space large />
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

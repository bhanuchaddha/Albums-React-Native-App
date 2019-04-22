/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import Header from './header'
import AlbumList from './AlbumList'


export default class App extends Component {
  render() {
    return (
      // to make it scrollable
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
      </View>
    );
  }
}


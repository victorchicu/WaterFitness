/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/App.style';

class App extends React.Component<{}> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Hello, World</Text>
        </View>
      </>
    );
  }
}

export default App;

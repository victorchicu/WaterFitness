import React from 'react';
import {View} from 'react-native';
import styles from './styles/App.style';
import {WaveView} from './components/WaveView';

class App extends React.Component<{}> {
  // 132c3d
  // 00bbfb

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#132c3d'}}>
          <WaveView surfaceWidth={200} surfaceHeigth={200} powerPercent={50}>
          </WaveView>
        </View>
      </View>
    );
  }
}

export default App;

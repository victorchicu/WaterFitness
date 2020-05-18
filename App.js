import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './styles/App.style';
import {WaveView} from './components/WaveView';

class App extends React.Component {
  static defaultProps = {
    waterLevel: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      waterLevel: App.defaultProps.waterLevel,
    };
  }

  render() {
    const width = Math.round(Dimensions.get('window').width) + 50;
    const waterOpacity = 1;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#132c3d'}}>
          {/* <WaveView width={width} height={200} powerPercent={60} opacity={waterOpacity} /> */}
          {/* <View style={{width: '100%', height: '45%', opacity: waterOpacity, backgroundColor: '#00bbfb'}} /> */}
        </View>
      </View>
    );
  }
}

export default App;

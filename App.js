import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './styles/App.style';
import {WaveView} from './components/WaveView';

class App extends React.Component<{}> {
  static defaultProps = {
    waterLevel: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      waterLevel: App.defaultProps.waterLevel
    };
  }

  componentDidMount(): void {
    // this.onDrink = this.onDrink.bind(this);
  }

  onDrink = () => {
    this.setState({
      waterLevel: this.state.waterLevel + 10
    });
  }


  render() {
    const width = Math.round(Dimensions.get('window').width);
    return (
      <View style={styles.container}>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#132c3d'}}>
          <TouchableOpacity onPress={this.onDrink}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              width: 65,
              height: 65,
              backgroundColor: '#132c3d',
              borderRadius: 40,
            }}>
            <Text style={{color: '#fff'}}>200 ml</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 7, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#132c3d'}}>
          <WaveView width={width + 50} height={200} powerPercent={60}/>
          <View style={{backgroundColor: '#00bbfb', width: '100%', height: this.state.waterLevel + '%'}}/>
        </View>
      </View>
    );
  }
}

export default App;

import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {drinksData} from './data/drinks';
import Slider from '@react-native-community/slider';
import styles from './styles/App.style';

class App extends React.Component<{}> {
  static defaultProps = {
    sliderInitialValue: 100,
  };

  state = {
    sliderValue: App.defaultProps.sliderInitialValue,
  };

  render() {
    return (
      <View style={styles.container}>
        {drinksData.map((drink, index) => {
          return (
            <View key={index} style={styles.glassContainer}>
              <SvgXml
                xml={drink.empty}
                width={drink.width}
                height={drink.height}
                fill={'#fff'}
                style={styles.backgroundImage}
              />
              <SvgXml
                xml={drink.full}
                width={drink.width}
                height={this.state.sliderValue * (drink.width / 100)}
                fill={'#fff'}
                style={styles.foregroundImage}
                preserveAspectRatio="xMidYMax slice"
              />
            </View>
          );
        })}
        <View style={styles.progressSection}>
          <View style={{flex: 1}}>
            <Slider
              style={{width: 200, height: '100%'}}
              step={1}
              value={this.state.sliderValue}
              minimumValue={0}
              maximumValue={100}
              onValueChange={value => this.setState({sliderValue: value})}
            />
          </View>
          <View style={{flex: 1}}>
            <Text>Slider value: {this.state.sliderValue}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

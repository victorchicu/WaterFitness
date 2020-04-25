import React, {Component} from 'react';
import {View} from 'react-native';
import {Surface, Text, Shape, Path, LinearGradient} from '@react-native-community/art';

export class WaveView extends React.Component<{}> {
  static defaultProps = {
    fill: 'white',
    stroke: 'white',
    strokeWidth: 2,
    powerPercent: 50,
    width: 300,
    height: 300,
    backgroundColor: '#FF7800',
    superViewBackgroundColor: 'blue',
  };

  constructor(props) {
    super(props);
    this.width = this.props.width;
    this.height = this.props.height;
    this.state = {
      delta: 0,
      amplitude: 1.5,
    };
  }

  componentDidMount() {
    this.intervalTimer = setInterval(() => {
      const delta = (this.state.delta += 0.10);
      const amplitude = this.state.amplitude;
      this.setState({
        delta: delta,
        amplitude: amplitude,
      });
    }, 25);
  }

  componentWillUnmount() {
    this.intervalTimer && clearTimeout(this.intervalTimer);
  }

  drawWave() {
    let circleY;
    const powerPercent = parseInt(this.props.powerPercent);
    const radius = this.props.width / 2;
    if (powerPercent < 100) {
      const centerX = this.props.width / 2;
      const centerY = this.props.height / 2;
      const delta = this.state.delta, amplitude = this.state.amplitude;
      const defaultAmplitude = 5;
      const currentLinePointY = radius * 2 - radius * 2 * (this.props.powerPercent / 100.0);
      const startX = 0, endX = this.props.width - startX;
      let startPoint, endPoint;
      const linePath = new Path();
      for (let x = startX; x <= endX; x++) {
        let y = amplitude * Math.sin(x / 180 * Math.PI + 4 * delta / Math.PI) * defaultAmplitude + currentLinePointY;
        if (y < centerY) {
          circleY = centerY - Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2));
          if (y < circleY) {
            y = circleY;
          }
        } else if (y > centerY) {
          circleY = centerY + Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2));
          if (y > circleY) {
            y = circleY;
          }
        }
        if (x == startX) {
          linePath.moveTo(x, y);
        } else if (x == endX) {
          endPoint = [x, y];
        }
        linePath.lineTo(x, y);
      }
      linePath.moveTo(endPoint[0], endPoint[1]);
      linePath.arc(-2 * radius, 0, radius);
      // linePath.rect(0.0, 0.0, 100.0, 100.0)
      linePath.close();
      return (
        //Water color
        <Shape d={linePath} fill={'#00bbfb'}/>
      );
    } else {
      const linePath = new Path()
        .moveTo(radius, 0)
        .arc(0, radius * 2, radius)
        .arc(0, -radius * 2, radius)
        .close();
      return (
        <Shape d={linePath} strokeWidth={0} fill={'#00bbfb'}/>
      );
    }
  }

  drawWaveView() {
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0.0)'}}>
        <Surface width={this.width} height={this.height}>
          {this.drawWave()}
        </Surface>
      </View>
    );
  }

  render() {
    return (
      <View style={{width: this.props.width, height: this.props.height}}>
        {this.drawWaveView()}
      </View>
    );
  }
}

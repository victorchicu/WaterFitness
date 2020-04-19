import React, {Component} from 'react';
import {View} from 'react-native';
import {Surface, Text, Shape, Path, LinearGradient} from '@react-native-community/art';

export class WaveView extends React.Component<{}> {
  static defaultProps = {
    powerPercent: 50, //0-100
    proportion: 0.5,//0-1
    surfaceWidth: 300,
    surfaceHeigth: 300,
    backgroundColor: '#FF7800',
    stroke: 'white',
    fill: 'white',
    strokeWidth: 2,
    superViewBackgroundColor: 'blue',
  };

  constructor(props) {
    super(props);
    this.copyRadian = 0.5;
    this.proportion = this.props.proportion;
    this.surfaceWidth = this.props.surfaceWidth;
    this.surfaceHeigth = this.props.surfaceHeigth;
    this.radius = this.surfaceWidth / 2.0;
    this.state = {
      delta: 0,
      amplitude: 1.5,
    };
  }

  componentDidMount() {
    this.intervalTimer = setInterval(() => {
      var delta = (this.state.delta += 0.10);
      var amplitude = this.state.amplitude;
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
    var powerPercent = parseInt(this.props.powerPercent);
    const radius = this.props.surfaceWidth / 2 - 30;
    if (powerPercent < 100) {
      const centerX = this.props.surfaceWidth / 2;
      const centerY = this.props.surfaceHeigth / 2;
      const delta = this.state.delta, amplitude = this.state.amplitude;
      const defaultAmplitude = 5;
      var currentLinePointY = radius * 2 + 30 - radius * 2 * (this.props.powerPercent / 100.0);
      var startX = 30, endX = this.props.surfaceWidth - startX;
      var startPoint, endPoint;
      const linePath = new Path();
      for (var x = startX; x <= endX; x++) {
        var y = amplitude * Math.sin(x / 180 * Math.PI + 4 * delta / Math.PI) * defaultAmplitude + currentLinePointY;
        if (y < centerY) {
          var circleY = centerY - Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2));
          if (y < circleY) {
            y = circleY;
          }
        } else if (y > centerY) {
          var circleY = centerY + Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2));
          if (y > circleY) {
            y = circleY;
          }
        }
        if (x == startX) {
          linePath.moveTo(x, y);
          startPoint = [x, y];
        } else if (x == endX) {
          endPoint = [x, y];
        }
        linePath.lineTo(x, y);
      }
      linePath.moveTo(endPoint[0], endPoint[1]);
      linePath.arc(-2 * radius, 0, radius);
      linePath.close();
      return (
        //Water color
        <Shape d={linePath} strokeWidth={0} fill={'#00bbfb'}/>
      );
    } else {
      const linePath = new Path()
        .moveTo(radius + 30, 30)
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
        <Surface width={this.surfaceWidth} height={this.surfaceHeigth}>
          {this.drawWave()}
        </Surface>
      </View>
    );
  }

  render() {
    return (
      <View style={{width: this.props.surfaceWidth, height: this.props.surfaceHeigth}}>
        {this.drawWaveView()}
      </View>
    );
  }
}

import React from 'react';
import { Text } from 'react-native';

export class RegularText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'modernica-regular' }]}
      />
    );
  }
}

export class BoldText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'modernica-Bold' }]}
      />
    );
  }
}

export class LightText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'modernica-Light' }]}
      />
    );
  }
}

export class BlackText extends React.Component {
    render() {
        return (
            <Text
                {...this.props}
                style={[this.props.style, { fontFamily: 'modernica-Black' }]}
            />
        );
    }
}
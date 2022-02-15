import React, {PureComponent} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class Button extends PureComponent {
    static displayName = 'Button';
    
    constructor(props) {
        super(props);
    }

    render() {
    const {onPress, disabled} = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
      >
        <Text>Test Button</Text>
      </TouchableOpacity>
    );
  }
}

export {Button};
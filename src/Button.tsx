import React, { PureComponent } from "react";
import { TouchableOpacity, Text } from "react-native";

export interface Props {
  disabled?: boolean;
}

class Button extends PureComponent<Props> {
  static displayName = "Button";

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { disabled } = this.props;

    return (
      <TouchableOpacity disabled={disabled}>
        <Text>Test Button</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, headfoot } = styles;
  return (
    <View style={headfoot}>
      <Text style={textStyle}>Prakiraan Cuaca</Text>
    </View>
  );
};
const styles = {
  headfoot: {
    padding: 16,
    backgroundColor: '#54416d',
    justifyContent: 'center',
    alignItems: 'center'
  },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
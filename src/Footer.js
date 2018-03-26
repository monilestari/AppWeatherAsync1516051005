import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Copyright @LestariMoni</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#54416d',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Footer;
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import Weather from './src/Weather';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.statusbar} />
        <Header headerText="Header"/>
        <Weather/>
        <Footer footerText="Footer"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#E8EAF6'
  },
  statusbar: {
    backgroundColor: '#2b235a',
    height: 26
  },
});
import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         TextInput, 
         Button, 
         Image, 
         Dimensions 
       } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
       
      }
    };
  }

  async getWeather() {
    
  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=896a96c3179441802e2ba65269cce556&units=metric'
    );
     
    let responseJson = await response.json();
      return this.setState({
        forecast : {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          speed: responseJson.wind.speed
        }
      });
    } catch (error) {
    console.error(error);
  }
}

render() {
  return (
      <View style={styles.containerMain}>
          
          <View style={styles.box1}>
            <Text style={styles.texthead}>Masukkan Nama Kota</Text>
            <TextInput style={styles.input}
            onChangeText={(city) => this.setState({ city })} />
            <Button 
              onPress={() => this.getWeather()}
              title="Lihat"
              color="#54416d"
              accessibilityLabel="Klik Untuk Melihat"
            />
          </View>
          <View style={styles.box4}>
            <View style={styles.buttonline}>
              <Text style={styles.textcenter}> 
              City : {'\n'}{ this.state.city} 
              </Text>
            </View> 
          </View>
          <View style={styles.box4}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={mainIcon} style={styles.icon} />
              </View>
              <Text> Main : {'\n'}{ this.state.forecast.main} </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={mainIcon} style={styles.icon} />
              </View>
              <Text> Main Desc : {'\n'}{ this.state.forecast.description} </Text>
            </View>
          </View>
          <View style={styles.box4}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={windIcon} style={styles.icon} />
              </View>
              <Text> Wind Speed : {'\n'}{ this.state.forecast.speed} </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={tempIcon} style={styles.icon} />
              </View>
              <Text> Temp : {'\n'}{ this.state.forecast.temp} </Text>
            </View>
          </View>

          <View style={styles.box4}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={mainIcon} style={styles.icon} />
              </View>
              <Text> Sunrise : {'\n'}{ this.state.forecast.sunrise} </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={mainIcon} style={styles.icon} />
              </View>
              <Text> Sunset : {'\n'}{ this.state.forecast.sunset} </Text>
            </View>
          </View>

          <View style={styles.box4}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={levelIcon} style={styles.icon} />
              </View>
              <Text> Pressure : {'\n'}{ this.state.forecast.pressure} </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={levelIcon} style={styles.icon} />
              </View>
              <Text> Humidity : {'\n'}{ this.state.forecast.humidity} </Text>
            </View>
          </View>

          <View style={styles.box4}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={levelIcon} style={styles.icon} />
              </View>
              <Text> Sea Level : {'\n'}{ this.state.forecast.sea_level} </Text>
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Image source={levelIcon} style={styles.icon} />
              </View>
              <Text> Ground Level : {'\n'}{ this.state.forecast.grnd_level} </Text>
            </View>
          </View>

      </View>

    
    );
  }

}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#8fe0ff',
    flex: 1,
    flexDirection: 'column'
  },
  
  
  box1: {
    flex: 0.7,
    margin: 10,
    padding: 10,
    backgroundColor: '#75b4e3',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
   
  box4: {
    flex: 0.3,
    backgroundColor: '#90CAF9',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    justifyContent: 'space-around',
    marginTop: 15,
    marginLeft:15
    
  },
  input: {
    height: 40,
    width: 260,
    backgroundColor: 'white',
    borderColor: '#303F9F',
    borderWidth: 3,
    textAlign: 'center'
  },
  center: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  },
  texthead: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textfoot:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 185,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: '#54416d',
    borderRadius: 3,
    borderWidth: 1
  },
  buttonline: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center'
    
  },
  textcenter: {
    textAlign: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#54416d',
    borderColor: '#54416d',
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    height: 60,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 25,
    width: 25,
  }

});


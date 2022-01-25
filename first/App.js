import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
     
      <View style={styles.container}>
        <Text style={styles.welcome, styles.setColorwelcome}>How many assignments pending?</Text>
        <Text style={styles.count, styles.setColorcount}>{this.state.count}</Text>
        <Image style={styles.vit} source={require('./image/vit.png')} />
        <Button 
        style={styles.increasebutton}
        title="Increase"
        onPress={this.incrementValue}
        />
        <View style={{padding: 25}} />
        <Button 
        style={styles.decreasebutton}
        title="Decrease"
        onPress={this.decrementValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
  },
  setColorwelcome : {
    color: '#f0f8ff'
  },
  welcome:{
    fontSize:40,
    padding:25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  setColorcount : {
    color: '#00ffff'
  },
  count : {
    fontSize: 40,
    marginBottom:30,
    fontWeight: 'bold',
  },
  vit:{
    height:90,
    width:300,
  }
});
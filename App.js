import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import MyList from './src/components/MyList';


class App extends Component{
  render(){
    return(
      <View>
      <MyList/>
      </View>
    );
  }
}

export default App;

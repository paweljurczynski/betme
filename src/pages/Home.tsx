import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

type Props = {
    navigation: any
}
  
export class HomeScreen extends React.Component<Props, {}> {  
    createRoom = () => {
      alert('Created');
    }
  
    joinRoom = () => {
      const { navigate } = this.props.navigation;
  
      navigate('Join')
    }
  
    render() {
  
      return (
        <View style={styles.container}>
          <Text>BET!</Text>
          <Button title="Utwórz pokój" onPress={this.createRoom} />
          <Button title="Dołącz do pokoju" onPress={this.joinRoom} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
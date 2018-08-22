import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class JoinScreen extends React.Component {  
    render() {
      return (
        <View style={styles.container}>
          <Text>JOIN!</Text>
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
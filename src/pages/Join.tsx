import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    navigation: any
}

export class JoinScreen extends React.Component<Props, {}> {
    render() {
        const { navigation } = this.props;
        const roomCode = navigation.getParam('roomCode');

        return (
            <View style={styles.container}>
                <Text>Numer pokoju: { roomCode }</Text>
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
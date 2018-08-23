import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'

type Props = {
    navigation: any
}

export class JoinScreen extends React.Component<Props, {}> {
    ready = () => {
        alert('Jestem gotowy!');
    }

    render() {
        const { navigation } = this.props;
        const roomCode = navigation.getParam('roomCode');

        const waitingUsers = [
            { name: 'Maciek' },
            { name: 'Roman' }
        ];

        return (
            <View style={styles.container}>
                <Text style={{ margin: 20 }}>Numer pokoju: {roomCode}</Text>
                <Text>Oczekiwanie na:</Text>
                <FlatList
                    data={waitingUsers}
                    renderItem={({ item }) => <Text style={{ margin: 10 }}>{item.name}</Text>}
                />
                <Button title="Gotowy" onPress={this.ready} />
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
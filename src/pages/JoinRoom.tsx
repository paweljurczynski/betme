import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'

type Props = {
    navigation: any
}

type State = {
    roomCode: string
}

export class JoinRoom extends React.Component<Props, State> {
    state = {
        roomCode: ''
    };
    
    ready = () => {
        alert('Jestem gotowy!' + this.state.roomCode);
    }

    onChangeText = (text: string) => {
        this.setState({ roomCode: text});
    }

    render() {
        const { navigation } = this.props;

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={{ margin: 20 }}>Wprowadź kod pokoju:</Text>
                <TextInput 
                    onChangeText={this.onChangeText}
                />
                <Button title="Dołącz" onPress={this.ready} />
            </KeyboardAvoidingView>
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
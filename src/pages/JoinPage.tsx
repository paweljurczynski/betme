import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements'
import { NavigationScreenProp } from "react-navigation";
import { PAGES } from "../enums/pages";

type Props = {
    navigation: NavigationScreenProp<any>
}

type State = {
    roomCode: string
}

export class JoinPage extends React.Component<Props, State> {
    state = {
        roomCode: ''
    };

    ready = () => {
        const question = 'Wymień 5 stolic zaczynających się na literę A';

        this.props.navigation.navigate(PAGES.PLAYER_PAGE, { question })
    };

    onChangeText = (text: string) => {
        this.setState({ roomCode: text});
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={{ margin: 20 }}>Wprowadź kod pokoju:</Text>
                <TextInput 
                    style={styles.textInput}
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
    },
    textInput: {
        height: 40,
        width: 100
    }
});
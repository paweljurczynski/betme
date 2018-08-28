import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import { NavigationScreenProp } from "react-navigation";

type Props = {
    navigation: NavigationScreenProp<any>
}

export class JoinRoom extends React.Component<Props> {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text>Oczekujemy na userów</Text>
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
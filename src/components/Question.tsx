import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
    text: string
};

export const Question = (props: Props) => {
    return (
        <article style={styles.question}>
            <Text>{props.text}</Text>
        </article>
    )
}

const styles = StyleSheet.create({
    question: {
      backgroundColor: '#c2c2c2',
      padding: 20
    }
});
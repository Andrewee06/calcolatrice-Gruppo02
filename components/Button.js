import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CalculatorButton({ label, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#555',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 80,
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
});

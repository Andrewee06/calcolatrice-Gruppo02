import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import CalculatorButton from './components/Button'; // Import del componente

export default function App() {
    const [display, setDisplay] = React.useState('');

    const handlePress = (value) => {
        setDisplay(display + value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.row}>
                    <CalculatorButton label="1" onPress={() => handlePress('1')} />
                    <CalculatorButton label="2" onPress={() => handlePress('2')} />
                    <CalculatorButton label="3" onPress={() => handlePress('3')} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="4" onPress={() => handlePress('4')} />
                    <CalculatorButton label="5" onPress={() => handlePress('5')} />
                    <CalculatorButton label="6" onPress={() => handlePress('6')} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="7" onPress={() => handlePress('7')} />
                    <CalculatorButton label="8" onPress={() => handlePress('8')} />
                    <CalculatorButton label="9" onPress={() => handlePress('9')} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton label="0" onPress={() => handlePress('0')} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    display: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 60,
        color: '#fff',
    },
    buttons: {
        flex: 5,
        backgroundColor: '#333',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

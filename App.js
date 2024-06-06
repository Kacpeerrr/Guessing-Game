import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState()

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber)
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

	if (userNumber) {
		screen = <GameScreen/>
	}

    return (
        <LinearGradient colors={['#4e0239', '#ddb52f']} style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('./assets/images/bg.jpg')}
                resizeMode={'cover'}
                imageStyle={{ opacity: 0.5 }}
            />
            <StatusBar style="auto" />
            {screen}
        </LinearGradient>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});
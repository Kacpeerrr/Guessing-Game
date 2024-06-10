import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';

import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber)
        setGameIsOver(false)
	}

    function gameOverHandler() {
        setGameIsOver(true)
    }

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
	}

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen/>
    }


    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
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
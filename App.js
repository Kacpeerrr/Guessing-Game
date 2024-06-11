import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';

import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)
    const [guessRounds, setGuessRounds] = useState(0)

   const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!fontsLoaded) {
        return <AppLoading/>
    }

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber)
        setGameIsOver(false)
	}

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true)
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler() {
        setUserNumber(null)
        setGuessRounds(0)

    }

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
	}

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
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
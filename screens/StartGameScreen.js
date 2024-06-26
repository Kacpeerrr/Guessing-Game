import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('')

	const { witdh, height } = useWindowDimensions()

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText)
	}

	function resetInputHandler() {
		setEnteredNumber('')
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber)

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Nieprawidłowa liczba!', 'Wprowadzona liczba musi zawierać się w przedziale od 1 do 99', [
				{ text: 'OK', style: 'desctructive', onPress: resetInputHandler },
			])
			return
		}
		onPickNumber(chosenNumber)
	}

	const marginTopDistance = height < 380 ? 30 : 100

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView
				style={styles.screen}
				behavior='position'>
				<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
					<Title>Odgadnij Mój Numer</Title>
					<Card>
						<InstructionText>Wpisz numer</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType='number-pad'
							autoCapitalize='none'
							autoCorrect={false}
							onChangeText={numberInputHandler}
							value={enteredNumber}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>Resetuj</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmInputHandler}>Potwierdź</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

export default StartGameScreen

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 380 ? 30 : 100,
		alignItems: 'center',
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
})

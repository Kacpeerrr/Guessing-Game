import { Image, View, Text, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<View>
				<Text style={styles.summaryText}>
					Twój przeciwnik potrzebował <Text style={styles.highlight}>{roundsNumber}</Text> rund do odgadnięcia numeru{' '}
					<Text style={styles.highlight}>{userNumber}</Text>
				</Text>
				<PrimaryButton onPress={onStartNewGame}>Zacznij Nową Grę</PrimaryButton>
			</View>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		marginVertical: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 24,
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
})

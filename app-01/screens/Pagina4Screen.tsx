import {
	Alert,
	Button,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina4Screen() {
	const [kel, setKel] = useState(0);

	useEffect(() => {
		if (kel < 0) {
			Alert.alert('Error', 'El valor de grados Kelvin no puede ser negativo');
		}
	}, [kel]);

	function calcular() {
		const cel = kel - 273.15;
		const far = (kel - 273.15) * 1.8 + 32;
		Alert.alert(
			'Solución',
			'Los ' + kel + ' grados kelvin equivalen a: ' + cel + ' °C y ' + far + ' °F',
		);
	}

	return (
		<ImageBackground
			source={{
				uri: 'https://img.freepik.com/vector-gratis/calculadora-aislada-iconos_1308-116731.jpg?t=st=1735352530~exp=1735356130~hmac=bc89ae24e4e769a5128c5b47cc8f5fdf7f6e2d3ff345dac56969b2146bd93fe0&w=360',
			}}
			style={styles.contenedor}
            imageStyle={{ opacity: 0.3 }}
		>
			<Text style={{ fontSize: 40, textAlign: 'center', fontWeight: 'bold',color:'#1964f0'}}>
				Calculadora
			</Text>
			<TextInput
				placeholder='Ingrese la temperatura en Kelvin'
				style={styles.input}
				onChangeText={(texto) => setKel(+texto)}
				keyboardType='numeric'
			/>
			<Button title='Calcular ' onPress={() => calcular()} />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#f0b319',
		fontSize: 20,
		width: '80%',
		textAlign: 'center',
		borderRadius: 10,
	},
	contenedor: {
		gap: 20,
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		opacity: 20,
	},
});

import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina3Screen() {
	const [nombre, setNombre] = useState('');
	const [edad, setEdad] = useState(0);

	useEffect(() => {
		if (edad <= 0) {
			setEdad(0);
		}
	}, [edad]);

	function usuario() {
		Alert.alert('Mensaje', nombre + 'tiene ' + edad + 'años');
	}

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 40 }}>Formulario</Text>
			<TextInput
				style={styles.input}
				placeholder='Ingresar Nombre'
				onChangeText={(texto) => setNombre(texto)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Ingresar Edad'
				keyboardType='numeric'
				onChangeText={(texto) => setEdad(+texto)}
			/>
			<Button title='Aceptar' onPress={() => usuario()} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#aeb6bc',
		fontSize: 25,
		width: '85%',
		margin: 5,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

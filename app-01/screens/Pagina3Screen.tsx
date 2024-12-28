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
		<ImageBackground
			source={{
				uri: 'https://img.freepik.com/foto-gratis/hombre-primer-plano-que-muestra-maqueta-portapapeles_23-2148295735.jpg?t=st=1735352950~exp=1735356550~hmac=12b988a64615172f101ea728fe7813973c81e7f0895787d7b376800eb5629e9b&w=360',
			}}
			style={styles.container}
            imageStyle={{opacity:0.6}}
		>
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
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#aeb6bc',
		fontSize: 25,
		width: '85%',
		margin: 5,
		borderRadius: 10,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

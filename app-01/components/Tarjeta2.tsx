import {
	Button,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

export default function Tarjeta2(props: any) {
	const [visible, setVisible] = useState(false);

	return (
		<TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
			<Text style={styles.txtNombre}>
				{props.datos.name.first} {props.datos.name.last}
			</Text>
			<Modal visible={visible}>
				<View style={styles.modal}>
					<Text style={styles.txtNombre}>
						{props.datos.name.first} {props.datos.name.last}
					</Text>
                    <Image style={styles.img} source={{uri:props.datos.images.main}}/>
					<Button title='Cerrar' onPress={() => setVisible(false)} />
				</View>
			</Modal>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	txtNombre: {
		fontSize: 30,
	},
	container: {
		backgroundColor: '#ecc1ac',
		margin: 2,
		borderRadius: 20,
	},
	modal: {
		backgroundColor: '#adadad',
		flex: 1,
	},
    img:{
        width:'50%',
        height:'50%',
        resizeMode:'contain'
    }
});

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props:any) {

    function detalles(item:any) {
        Alert.alert(item.name,item.description + '\nAtributos: ' + item.atributos) 
    }

	return (
		<TouchableOpacity style={styles.container} onPress={()=>detalles(props.informacion)}>
			<Text style={styles.txtTitulo}>{props.informacion.name}</Text>
            <View style={styles.fila}>
            <Image style={styles.img} source={{uri:props.informacion.image}}/>
            <Text style={styles.txtDescription}>{props.informacion.description}</Text>
            </View>
            
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color:'#000',
        fontWeight:'bold'
    },
    img:{
        width:150,
        height:150,
        resizeMode:'contain'
    },
    container:{
        backgroundColor:'#ecdaac',
        margin:2,
        borderRadius:20
    },
    fila:{
        flexDirection:'row'
    },
    txtDescription:{
        width:'60%',
        textAlign:'justify'
    }
});

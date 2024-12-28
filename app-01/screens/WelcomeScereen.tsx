import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainNavigator from '../navigators/MainNavigator';

export default function WelcomeScereen({navigation} : any) {
	return (
        <ImageBackground
            source={{uri:'https://img.freepik.com/foto-gratis/controlador-angulo-alto-silla-juego_23-2149829137.jpg?t=st=1735258006~exp=1735261606~hmac=f6307b27f30ca0c3051f1a88c7ba0217185c094aa41ce70ab72176b7fa9d3341&w=360'}}
            style = {styles.container}
        >
            <Text style={{fontSize:30, color:'white'}}>Desarrollo de software</Text>
            <Text style={{fontSize:20, color:'white'}}>Augusto Viteri</Text>
            <Button title='Ingresar' onPress={() => navigation.navigate('Bottom')}/>
        </ImageBackground>

	);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:50
    }
});

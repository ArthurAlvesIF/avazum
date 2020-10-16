import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import {Shape, Surface} from '@react-native-community/art';
import Toast from 'react-native-tiny-toast'
import Colors from '../config/colors';

export default SplashScreen =()=>{
    React.useEffect(()=>{
        Toast.show("Carregando...",{position: Toast.position.BOTTOM});
    });
    return(
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#FFF', alignContent: 'center', justifyContent: 'center'}}>
            <StatusBar backgroundColor={Colors.mainColor}/>
            <Image source={require('../assets/images/logotipo.png')} style={{height: 242,
    width: 284, alignSelf: 'center'}}/>
        </View>
    );
}
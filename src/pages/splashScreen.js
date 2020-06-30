import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import {Shape, Surface} from '@react-native-community/art';
import Toast from 'react-native-tiny-toast'

export default SplashScreen =()=>{
    React.useEffect(()=>{
        Toast.show("Carregando...",{position: Toast.position.BOTTOM});
    });
    return(
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#FF5722', alignContent: 'center', justifyContent: 'center'}}>
            <StatusBar backgroundColor='#E64A19'/>
            <View style={{alignContent: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 20, padding: 20, margin: 20, alignSelf: 'center'}}>
                <Image source={require('../assets/images/logo2.png')} style={{width: 300, height: 300}}/>
            </View>
        </View>
    );
}
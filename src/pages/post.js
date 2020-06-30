import React, {useState, Component,useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
function post({route, navigation}){
    const conteudo = route.params;

    return(
        <View style={{flex: 1}}>
            <StatusBar backgroundColor='#E64A19'/>
            <ScrollView style={{padding: 15, flex: 1}}>
                <Title style={{justifyContent: 'center', alignSelf: 'center', textAlign: 'center'}}>{conteudo.titulo}</Title>
                <Paragraph>{conteudo.texto}</Paragraph>
            </ScrollView>
        </View>
    );
};

export default post;
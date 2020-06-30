import React, {useState, Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform, TouchableWithoutFeedback, Button, Keyboard  
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';
import instance from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';
const Input = (props) =>{
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const onChangeEmail = textValue => setEmail(textValue);
  const onChangeSenha = textValue => setSenha(textValue);
  return (
    <View style={{alignSelf: "stretch", flex: 1, alignItems: 'center'}}>
      
      <TextInput style={styles.input} placeholder="Email..."  placeholderTextColor="#000" onChangeText={onChangeEmail} underlineColor="#FF0000"/> 
      <TextInput style={styles.input} placeholder="Senha..."  secureTextEntry={true} placeholderTextColor="#000" onChangeText={onChangeSenha}/>
      <TouchableOpacity style={styles.btn} onPress={()=>{instance().post("auth.php",{email: email, senha: senha}).then(res => {var resultado = JSON.stringify({props: res.data[0], encaminhamento: res.data[0].encaminhamento});AsyncStorage.setItem("usuario", resultado).then(()=>console.log("OKKKKKKKKK")); EstadoApp.setUsuario(JSON.parse(resultado));props.navigation.dispatch(CommonActions.reset({index: 0, routes:[{name:'Logado'}]})); })}}>
        <Text style={{textAlign: 'center', color: "#FFF"}}>{"ENTRAR"}</Text>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 18, marginTop: 5}}>Novo por aqui? <Text style={{textDecorationLine: 'underline', color: "#FF9800"}} onPress={() => props.navigation.push('Cadastrar')}>Cadastre-se</Text></Text>
      </View>
    </View>
  );
  
  
};
const Login = ({navigation})=> {




    return(
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor='#E64A19'/>
          
          <View style={styles.login} behavior={Platform.OS == "ios" ? "padding" : "height"} >
          <Image style={styles.logo} source={require('../assets/images/logo2.png')}/>
            <Input navigation={navigation}></Input>
          </View>
                
        </SafeAreaView>      
    );
 
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FF5722",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 50
  },

  logo:{
    margin: 10,
    height: 250,
    width: 250,
  },

  login:{
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: 'column',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10
    
  },
  input:{
    alignSelf: 'stretch',
    borderColor: "#E64A19",
    borderWidth: 2,
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 5,
    
  },
  btn: {
    padding: 10,
    borderColor: "#FF5722",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#FF5722",
    alignSelf: 'stretch',
  }
});

export default Login;
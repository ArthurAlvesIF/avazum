import React, {useState, Component} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform, TouchableWithoutFeedback, Button, Keyboard, Alert  
} from 'react-native';
import axios from 'axios';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {TextInputMask} from 'react-native-masked-text';
import { text } from '@fortawesome/fontawesome-svg-core';
const Input = (props) =>{
    
    [genero, setGenero] = useState();
    [nome, setNome] = useState();
    [email, setEmail] = useState();
    [senha, setSenha] = useState();
    [profissao, setProfissao] = useState();
    [idade, setIdade] = useState();
    [cidade, setCidade] = useState();
    [estado, setEstado] = useState("");
    [cep, setCep] = useState("");
    campos = "";
    return(
        <View>
            <TextInput placeholder="Nome"  onChangeText={(textValue) => {setNome(textValue); campos+="1";}} style={styles.input} ></TextInput>
            <TextInput placeholder="Email" onChangeText={(textValue) => {setEmail(textValue); campos+="2"}} style={styles.input}></TextInput>
            <TextInput placeholder="Senha" onChangeText={(textValue) => {setSenha(textValue); campos+="3"}} style={styles.input} secureTextEntry={true}></TextInput>
            <TextInput placeholder="Profissão" onChangeText={(textValue) => {setProfissao(textValue); campos+="4";}} style={styles.input}></TextInput>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInputMask placeholder="CEP" value={cep}type={'zip-code'} editable={true} onChangeText={(textValue) => {if (textValue.length == 9) {textValue= textValue.slice(0,5) +"" + textValue.slice(6,10); axios.get("https://viacep.com.br/ws/" + textValue+"/json/").then( res => {console.log(res.data); setCidade(res.data.localidade); setEstado(res.data.uf)})} setCep(textValue); console.log(textValue);}} style={{...styles.input, width: '20%'}}></TextInputMask>
              <TextInput disab placeholder="Cidade" value={cidade} editable={false} onChangeText={(textValue) => setCidade(textValue)} style={{...styles.input, width: '30%', backgroundColor: "#A9A9A9", color: "#fff"}} placeholderTextColor="#fff" ></TextInput>
              <TextInput placeholder="UF" editable={false} value={estado}onChangeText={(textValue) => setEstado(textValue)} style={{...styles.input, width: '20%', backgroundColor: "#A9A9A9", color: "#fff"}} placeholderTextColor="#fff" ></TextInput>  

            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput placeholder="Idade" onChangeText={(textValue) => setIdade(textValue)} style={styles.input} keyboardType="numeric"></TextInput>
              <Picker
                  selectedValue={genero}
                  style={{width: '80%', alignSelf: 'center'}}
                  onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}

              >  
                  <Picker.Item label="Selecione o gênero..." value="default" />
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Feminino" value="feminino" />
              </Picker>

            </View>
            
            <TouchableOpacity style={{...styles.btn, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginTop: 20, marginBottom: 10}} activeOpacity={0.5} onPress={()=> {
                if(estado.length != 2){
                  Alert.alert(
                    'Erro',
                    'Preencha o campo CEP corretamente',
                    [
                      {
                        text: 'Ok'
                      }
                    ],
                    { cancelable: true}
                  );
                    return;
                }
                props.navigation.navigate('Caracterização do zumbido',{
                  nome: this.nome,
                  email: this.email,
                  senha: this.senha,
                  idade: this.idade,
                  cidade: this.cidade,
                  estado: this.estado.toUpperCase(),
                  genero: this.genero,
                  profissao: this.profissao
                })
              }}>
              <Text style={{textAlign: 'center', color: "#FFF", fontWeight: 'bold', fontSize: 15} }>{"CONTINUAR"}</Text>
              <FontAwesomeIcon icon={faArrowRight}  color="#FFF"  style={{marginLeft: 8}}/>


            </TouchableOpacity>
            
        </View>

    );
};

export default class Cadastrar extends React.Component{
  static navigationOptions ={
    title: "AVAZUM",
    headerShown: true
  };    
  
  
  render(){
/*    this.props.navigation.dispatch(state => {
        // Remove the home route from the stack
        console.log(state.routes);

        const routes = state.routes.filter(r => r.name !== 'Login');
      
        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
    });
  */  
    return(
      <ScrollView>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={styles.container}>
            <StatusBar backgroundColor='#E64A19'/>
            <Text style={{textDecorationStyle: 'solid', fontSize: 25, color: '#212121', alignSelf: 'center'}}>Insira seus dados pessoais: </Text>
            <Input navigation={this.props.navigation}/>
                
        </View>      
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: 'column',
    
  },
  input:{
    borderColor: "#E64A19",
    borderWidth: 2,
    margin: 15,
    borderRadius: 5,
    paddingLeft: 5
    
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

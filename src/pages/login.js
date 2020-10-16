import React, {useState, Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';
import instance from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';
import Colors from '../config/colors';
const Input = props => {
  return <View style={{flex: 1}} />;
};
const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const onChangeEmail = textValue => setEmail(textValue);

  const onChangeSenha = textValue => setSenha(textValue);

  return (
    <> 
        <StatusBar backgroundColor="#f0f0f0" />

    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flexGrow: 1}}>
      <ScrollView style={{flex: 1}}>

        <View style={styles.login}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logotipo.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            mode="flat"
            ChangeText={onChangeEmail}
            underlineColor={Colors.mainColor}
            selectionColor={Colors.mainColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={onChangeSenha}
            underlineColor={Colors.mainColor}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              instance()
                .post('auth.php', {email: email, senha: senha})
                .then(res => {
                  var resultado = JSON.stringify({
                    props: res.data[0],
                    encaminhamento: res.data[0].encaminhamento,
                  });
                  AsyncStorage.setItem('usuario', resultado).then(() =>
                    console.log('OKKKKKKKKK'),
                  );
                  EstadoApp.setUsuario(JSON.parse(resultado));
                  navigation.dispatch(
                    CommonActions.reset({index: 0, routes: [{name: 'Logado'}]}),
                  );
                });
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 27,
              }}>
              {'Entrar'}
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                alignSelf: 'center',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Novo por aqui?{' '}
              <Text
                style={{color: Colors.mainColor}}
                onPress={() => navigation.push('Cadastrar')}>
                Cadastre-se
              </Text>
            </Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              marginTop: 10,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Esqueci minha senha
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF5722',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 50,
  },

  logo: {
    marginTop: 15,
    marginBottom: 35,
    height: 184,
    width: 215,
    alignSelf: 'center',
  },

  login: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 15,
    color: Colors.mainColor,
  },
  btn: {
    alignSelf: 'stretch',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: Colors.mainColor,
  },
});

export default Login;

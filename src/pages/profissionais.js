import React, {useState, Component, useEffect} from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import instance from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';
import Colors from '../config/colors';

function Profissionais({route, navigation}) {
  const [profissionais, setProfissionais] = useState({});

  const loadProfissionais = async () => {
    let prof = '{"profissao":{';
    let encaminhamento = EstadoApp.getUsuario()['encaminhamento'];
    if (encaminhamento.includes('nutri')) prof += '"nutri":true,';
    else prof += '"nutri":false,';
    if (encaminhamento.includes('psi')) prof += '"psi":true,';
    else prof += '"psi":false,';
    if (encaminhamento.includes('fisio')) prof += '"fisio":true,';
    else prof += '"fisio":false}}';

    const response = await instance().post(
      'get_profissionais_by_uf_categoria.php?estado=' +
        EstadoApp.getUsuario()['props']['estado'] +
        '&categoria=' +
        EstadoApp.getUsuario().encaminhamento,
      prof,
    );
    console.log('respo ' + response.data);
    setProfissionais(response.data);
  };

  useEffect(() => {
    loadProfissionais();
    console.log(
      'Estado:::: ' + JSON.stringify(EstadoApp.getUsuario()['props']),
    );
    console.log(EstadoApp.getUsuario()['encaminhamento']);
    //storeData(route.params);
  }, []);

  renderItem = ({item}) => (
    <View style={styles.containerList}>
      <Text style={styles.profissionalNome}>{item.nome}</Text>
      <Text style={styles.profissionalDados}>{item.profissao}</Text>
      <Text style={styles.profissionalDados}>{item.cidade}</Text>
      <Text style={styles.profissionalDados}>{item.telefone}</Text>
    </View>
  );
  return (
    <ScrollView style={{backgroundColor: '#F0f0f0'}}>
      <StatusBar backgroundColor="#E64A19" />
      <View
        style={{
          backgroundColor: '#F0F0F0',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
          paddingBottom: 10,
        }}>
        <Image
          source={require('../assets/images/profissionais.jpeg')}
          style={{alignSelf: 'center', width: 300, height: 465}}
        />
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#4F4F4F',
            fontSize: 32,
            alignSelf: 'center',
            textAlign: 'left',
          }}>
          Profissionais
        </Text>

        <Text
          onPress={() => {
            navigation.navigate('ListaProfissionais', {
              profissional: 'fonoaudiologo',
            });
          }}
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#4F4F4F',
            fontSize: 15,
            alignSelf: 'center',
            textAlign: 'left',
            marginTop: 10,
          }}>
          De acordo com a sua avaliação, esse são os profissionais mais
          indicados para você:
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#D16002',
            alignSelf: 'stretch',
            alignItems: 'center',
            marginTop: 20,
            padding: 10,
          }}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('ListaProfissionais', {
              profissional: 'fonoaudiologo',
            });
          }}>
          <Image
            source={require('../assets/images/fonoaudiologo.png')}
            style={{width: 70, height: 70, alignSelf: 'flex-start'}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 25,
              fontFamily: 'Montserrat-Bold',
              marginLeft: 10,
            }}>
            {'Fonoaudiólogo'}
          </Text>
        </TouchableOpacity>

        {EstadoApp.getUsuario()['encaminhamento'].includes('psi') && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#D6B700',
              alignSelf: 'stretch',
              alignItems: 'center',
              marginTop: 20,
              padding: 10,
            }}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('ListaProfissionais', {
                profissional: 'psicologo',
              });
            }}>
            <Image
              source={require('../assets/images/psicologo.png')}
              style={{width: 70, height: 70, alignSelf: 'flex-start'}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 25,
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10,
              }}>
              {'Psicólogo'}
            </Text>
          </TouchableOpacity>
        )}
        {EstadoApp.getUsuario()['encaminhamento'].includes('nutri') && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#24BF9A',
              alignSelf: 'stretch',
              alignItems: 'center',
              marginTop: 20,
              padding: 10,
            }}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('ListaProfissionais', {
                profissional: 'nutricionista',
              });
            }}>
            <Image
              source={require('../assets/images/nutricionista.png')}
              style={{width: 70, height: 70, alignSelf: 'flex-start'}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 25,
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10,
              }}>
              {'Nutricionista'}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#9F5FAF',
            alignSelf: 'stretch',
            alignItems: 'center',
            marginTop: 20,
            padding: 10,
          }}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('ListaProfissionais', {
              profissional: 'otorrino',
            });
          }}>
          <Image
            source={require('../assets/images/otorrino.png')}
            style={{width: 70, height: 70, alignSelf: 'flex-start'}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 25,
              fontFamily: 'Montserrat-Bold',
              marginLeft: 10,
            }}>
            {'Otorrinolaringologista'}
          </Text>
        </TouchableOpacity>
        {EstadoApp.getUsuario()['encaminhamento'].includes('fisio') && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#328E4A',
              alignSelf: 'stretch',
              alignItems: 'center',
              marginTop: 20,
              padding: 10,
              marginBottom: 20,
            }}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('ListaProfissionais', {
                profissional: 'fisioterapeuta',
              });
            }}>
            <Image
              source={require('../assets/images/fisioterapeuta.png')}
              style={{width: 70, height: 70, alignSelf: 'flex-start'}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 25,
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10,
              }}>
              {'Fisioterapeuta'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',
    margin: 15,
  },
  input: {
    borderColor: '#E64A19',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 4,
    borderRadius: 5,
    paddingLeft: 5,
    backgroundColor: '#FFF',
    padding: 5,
  },
  btn: {
    padding: 10,
    borderColor: '#FF5722',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FF5722',
  },
  list: {
    padding: 20,
  },
  containerList: {
    backgroundColor: '#fafafa',
    borderWidth: 2,
    borderColor: '#E64A19',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },
  profissionalNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  profissionalDados: {
    fontSize: 16,
    color: '#202020',
  },
});

export default Profissionais;

import React, {useState, useEffect} from 'react';
import Login from './login';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import instance from '../services/api';
import {Card, Title, Parapraph} from 'react-native-paper';
import EstadoApp from '../config/EstadoApp';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const Main = ({navigation, props, usuario, route}) => {
  console.log('fsad' + JSON.stringify(route));
  navigation.setOptions({
    headerShow: true,
    headerTitle: 'Principal',
  });
  [posts, setPosts] = useState('');

  useEffect(() => {
    loadPosts();
    console.log('Estado2: ' + JSON.stringify(EstadoApp.getUsuario()));
    AsyncStorage.getItem('usuario', (err, res) => console.log('REs' + res));
    navigation.setOptions({
      headerTitle: <Text>Principal</Text>,
    });
  }, []);
  loadPosts = async () => {
    console.log('POSTTTT:' + EstadoApp.getUsuario(['estado']));
    try {
      const response = await instance().post(
        'get_posts_home.php?categoria=TODOS',
        '{"encaminhamento":"' + EstadoApp.getUsuario()['estado'] + '"}',
      );
      console.log('respo: ' + response);
      setPosts(response.data);
    } catch (err) {
      Alert.alert(
        'Erro',
        'Erro ao obter os posts, verifique sua conexão e tente novamente em instantes.',
        [
          {
            text: 'OK',
          },
        ],
      );
    }
  };

  renderItem = ({item, index}) => 
  {
    console.log("index: " + item.caminho_imagem);

    if(index ==0)
      return(
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', item)}
          >
          <Card
            style={{marginBottom: 15}}
            onPress={() => navigation.navigate('Post', item)}>
            <Card.Cover
              source={{uri: 'https://avazum.com.br/' + item.caminho_imagem}}
            />
            <Card.Content style={{backgroundColor: '#4CCDD6', padding: 10}}>
              <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#4f4f4f'}}>{item.titulo}</Text>
              <Text style={{marginTop: 10, fontFamily: 'Montserrat-SemiBold', color: '#4f4f4f'}}>
                {item.texto.substring(0, 25) + '...'}
              </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      );
    else
      return(
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', item)}
          >
          <View
            style={{marginBottom: 15, flexDirection: 'row'}}
            onPress={() => navigation.navigate('Post', item)}>
              
            <Image  source={{uri: 'https://avazum.com.br/' + item.caminho_imagem}} style={{width: 150, height: 90, borderRadius: 4}} />
            <View style={{flexDirection: 'column', width: '65%', marginLeft: 10}}>
              <Text style={styles.profissionalNome}>{item.titulo}</Text>
              <Text style={styles.profissionalDados}>
                {item.texto.substring(0, 50) + '...'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  };
  return (
    <View>
      <StatusBar backgroundColor="#E64A19" />

      <ScrollView
        style={{backgroundColor: '#F0F0F0', height: '100%', padding: 15}}>
        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 23, marginBottom: 10}}>Nossas dicas para você</Text>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 23, marginBottom: 10}}>Profissionais</Text>
        <ScrollView
          horizontal={true}>
          <TouchableOpacity
          style={{
            flexDirection: 'column',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            padding: 10,
            marginBottom: 10
          }}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('ListaProfissionais', {
              profissional: 'fonoaudiologo',
            });
          }}>
          <Image
            source={require('../assets/images/fonoaudiologo.png')}
            style={{width: 100, height: 100}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#4f4f4f',
              fontWeight: 'bold',
              fontSize: 15,
              fontFamily: 'Montserrat-Bold',
              marginLeft: 10,
            }}>
            {'Fonoaudiólogo'}
          </Text>
        </TouchableOpacity>

        {EstadoApp.getUsuario()['encaminhamento'].includes('psi') && (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              padding: 10,
              borderRadius: 10,
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
              style={{width: 100, height: 100}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#4f4f4f',
                fontWeight: 'bold',
                fontSize: 15,
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
              flexDirection: 'column',
              padding: 10,
              borderRadius: 10,
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
              style={{width: 100, height: 100}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#4F4F4F',
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10,
              }}>
              {'Nutricionista'}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            padding: 10,
            borderRadius: 10,
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
            style={{width: 100, height: 100, }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#4f4f4f',
              fontWeight: 'bold',
              fontSize: 15,
              fontFamily: 'Montserrat-Bold',
              marginLeft: 10,
            }}>
            {'Otorrinolaringologista'}
          </Text>
        </TouchableOpacity>
        {EstadoApp.getUsuario()['encaminhamento'].includes('fisio') && (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              padding: 10,
              borderRadius: 10,
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
              style={{width: 100, height: 100}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: 'Montserrat-Bold',
                marginLeft: 10,
              }}>
              {'Fisioterapeuta'}
            </Text>
          </TouchableOpacity>
        )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

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

export default Main;

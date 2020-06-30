import React, {useState, useEffect} from 'react';
import Login from './login';
import {Text, FlatList, StyleSheet, View, StatusBar, TextInput, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import instance from '../services/api';
import {Card, Title, Parapraph} from 'react-native-paper';
import EstadoApp from '../config/EstadoApp';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const Main = ({navigation, props, usuario, route}) =>{
    console.log("fsad" + JSON.stringify(route));
    navigation.setOptions({
      headerShow: true,
      headerTitle: "Principal"
    });
    [posts, setPosts] = useState("");
    
    useEffect(()=>{
        loadPosts();
        console.log("Estado2: " + JSON.stringify(EstadoApp.getUsuario()));
        AsyncStorage.getItem('usuario', (err, res)=> console.log("REs" + res));
        navigation.setOptions({
          headerTitle: <Text>Principal</Text>
        });
    }, []);
    loadPosts = async () =>{
        console.log("POSTTTT:" + EstadoApp.getUsuario(['estado']));
        try{
          const response = await instance().post('get_posts.php?categoria=TODOS', "{\"encaminhamento\":\"" + EstadoApp.getUsuario()['estado'] + "\"}");
          console.log("respo: " + response);
          setPosts(response.data);
        }catch(err){
          Alert.alert(
            "Erro",
            "Erro ao obter os posts, verifique sua conexão e tente novamente em instantes.",
            [
              {
                text: "OK"

              }
            ]
          );
        }
    }

    renderItem = ({item})=>(
      <TouchableOpacity onPress={()=>navigation.navigate("Post", item)} style={{paddingLeft: 15, paddingRight: 15}}>
        <Card style={{marginBottom: 15}} onPress={()=>navigation.navigate("Post", item)}>
          <Card.Cover source={{ uri: 'https://avazum.com.br/' +item.caminho_imagem }} />
          <Card.Content>
            <Text style={styles.profissionalNome}>{item.titulo}</Text>
            <Text style={styles.profissionalDados}>{item.texto.substring(0,25) + '...'}</Text>
          </Card.Content>
          </Card>
      </TouchableOpacity>
    );
        return(
          <View>
            <StatusBar backgroundColor='#E64A19'/>
            <View style={{backgroundColor: '#F0F0F0', height: '100%', paddingTop: 10}}>
              <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            </View>
          </View>
        );
    };
    
    
    const styles = StyleSheet.create({
        container:{
          backgroundColor: "#FFF",
          flex: 1,
          flexDirection: 'row',
          margin: 15
          
        },
        input:{
          borderColor: "#E64A19",
          borderWidth: 2,
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 4,
          borderRadius: 5,
          paddingLeft: 5,
          backgroundColor: '#FFF',
          padding: 5
        
        },
        btn: {
          padding: 10,
          borderColor: "#FF5722",
          borderRadius: 5,
          borderWidth: 2,
          backgroundColor: "#FF5722"
        },
        list:{
          padding: 20,
        },
        containerList:{
          backgroundColor:'#fafafa',
          borderWidth: 2,
          borderColor: '#E64A19',
          borderRadius: 5,
          padding: 20,
          marginBottom: 10
        },
        profissionalNome:{
          fontSize: 18,
          fontWeight: 'bold',
          color: "#212121"
        },
        profissionalDados:{
          fontSize: 16,
          color: "#202020",
        }
    });
  


export default Main;

import React, {useState, Component,useEffect} from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform, TouchableWithoutFeedback, Button, Keyboard  
} from 'react-native';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import instance from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';

function Resultado({route, navigation}){
  
  const [profissionais, setProfissionais] = useState({});
  
  const loadProfissionais = async () =>{
    let prof = "{\"profissao\":{";
    let encaminhamento = EstadoApp.getUsuario()['encaminhamento'];
    if(encaminhamento.includes("nutri"))
      prof+= "\"nutri\":true,";
    else
      prof+= "\"nutri\":false,";
    if(encaminhamento.includes("psi"))
      prof+= "\"psi\":true,";
    else
      prof+= "\"psi\":false,";
    if(encaminhamento.includes("fisio"))
      prof+= "\"fisio\":true,";
    else
      prof+= "\"fisio\":false}}";
    
    const response = await instance().post('get_profissionais_by_uf_categoria.php?estado=' + EstadoApp.getUsuario()['props']['estado'] + '&categoria=' + EstadoApp.getUsuario().encaminhamento, prof);
    console.log("respo " + response.data) ;
    setProfissionais(response.data);
  };

  useEffect(() =>{
    loadProfissionais();
    console.log("Estado:::: " +JSON.stringify(EstadoApp.getUsuario()));
        
    //storeData(route.params);
  },[]);

  
  renderItem = ({item})=>(
    <View style={styles.containerList}>
      <Text style={styles.profissionalNome}>{item.nome}</Text>
      <Text style={styles.profissionalDados}>{item.profissao}</Text>
      <Text style={styles.profissionalDados}>{item.cidade}</Text>
      <Text style={styles.profissionalDados}>{item.telefone}</Text>
    </View>
  );
  console.log(route.params);
    return(
      <ScrollView style={{backgroundColor: '#F0f0f0'}}>
      <StatusBar backgroundColor='#E64A19'/>
        <View style={{backgroundColor: '#F0F0F0', paddingLeft: 15, paddingRight: 15}}>
          <TouchableOpacity style={{...styles.btn, flexDirection: 'row', alignSelf: 'stretch',alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginTop: 20, padding: 10}} activeOpacity={0.5} onPress={()=> {navigation.navigate("Logado", {teste: 'params' });}}>
             <Text style={{textAlign: 'center', color: "#FFF", fontWeight: 'bold', fontSize: 15} } >{"PRINCIPAL"}</Text>
            <FontAwesomeIcon icon={faHome}  color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.profissionalNome}>Analisando os seus dados, percebemos que seria interessante você procurar os seguintes profissionais:</Text>
          <Text style={{...styles.profissionalDados, marginBottom: 10}}>{EstadoApp.getUsuario().encaminhamento}</Text>
        </View>
          <View style={{backgroundColor: '#F0F0F0', paddingLeft: 15, paddingRight: 15}}>
          <FlatList
            data={profissionais}
            keyExtractor={item => item.id}
            renderItem={renderItem}

          />
          </View>
        </ScrollView>
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
  
  export default Resultado;
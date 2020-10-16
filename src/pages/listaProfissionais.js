
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
import Colors from '../config/colors';

function ListaProfissionais({route, navigation}){
  navigation.setOptions({
    headerShow: true,
    headerTitle: 'Listar profissionais',
  });
  const [profissionais, setProfissionais] = useState({});
  
  const loadProfissionais = async () =>{
    let prof = "{\"profissao\":{";
    let encaminhamento = route.params.profissional;
    if(encaminhamento.includes("nutri"))
      prof+= "\"nutri\":true,";
    else
      prof+= "\"nutri\":false,";
    if(encaminhamento.includes("psi"))
      prof+= "\"psi\":true,";
    else
      prof+= "\"psi\":false,";
      if(encaminhamento.includes("otorrino"))
      prof+= "\"otorrino\":true,";
    else
      prof+= "\"otorrino\":false,";
      if(encaminhamento.includes("fono"))
      prof+= "\"fono\":true,";
    else
      prof+= "\"fono\":false,";
    if(encaminhamento.includes("fisio"))
      prof+= "\"fisio\":true,";
    else
      prof+= "\"fisio\":false}}";
    
      //vou ter que fazer a rota
    console.log("LOAD PROF" + prof);
      const response = await instance().post('get_profissionais_by_uf_categoria.php?estado=' + EstadoApp.getUsuario()['props']['estado'] + '&categoria=' + EstadoApp.getUsuario().encaminhamento, prof);
    console.log("respo " + response.data) ;
    setProfissionais(response.data);
  };
  const [nomeProfissional, setNomeProfissional] = useState("");
  const [nomeImagem, setNomeImagem] = useState("");
  useEffect(() =>{
    loadProfissionais();
    
    console.log(route.params.profissional);

    console.log("Estado:::: " +JSON.stringify(EstadoApp.getUsuario()));
    if(route.params.profissional === "otorrino"){
        setNomeProfissional("Otorrinolaringologistas");
        setNomeImagem(require("../assets/images/otorrino.png"));
    }
    else if(route.params.profissional === "psicologo"){
        setNomeProfissional("Psicólogos");
        setNomeImagem(require("../assets/images/psicologo.png"));
    }
    else if(route.params.profissional === "nutricionista"){
        setNomeProfissional("Nutricionistas");
        setNomeImagem(require("../assets/images/nutricionista.png"));
    }
    else if(route.params.profissional === "fisioterapeuta"){
        setNomeProfissional ("Fisioterapeutas");
        setNomeImagem(require("../assets/images/fisioterapeuta.png"));

    }
    else if(route.params.profissional === "fonoaudiologo"){
        console.log("abv");
        setNomeProfissional("Fonoaudiólogos");
        setNomeImagem(require("../assets/images/fonoaudiologo.png"));
    }
    //storeData(route.params);
  },[]);

  
  renderItem = ({item})=>(
    <View style={styles.containerList}>
      <Text style={styles.profissionalNome}>{item.nome}</Text>
      <Text style={{...styles.profissionalDados, marginTop: 7}}>{item.profissao}</Text>
      <Text style={styles.profissionalDados}>{item.cidade}</Text>
      <Text style={styles.profissionalDados}>{item.telefone}</Text>
    </View>
  );
  console.log(route.params);
    return(
      <ScrollView style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor='#E64A19'/>
        <View style={{backgroundColor: '#fff',marginTop: 5, paddingLeft: 10, paddingRight: 10}}>
          <Image source={nomeImagem} style={{alignSelf:'center', width: 350, height: 350}} />
          <Text style={{fontFamily: 'Montserrat-Bold', color: '#4F4F4F', fontSize: 22, margin: 25,textAlign: 'left'}}>{nomeProfissional}</Text>
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
      backgroundColor:'#E2E2E2',
      borderRadius: 30,
      padding: 30,
      marginBottom: 10
    },
    profissionalNome:{
      fontSize: 18,
      fontFamily: 'Montserrat-Bold',
      color: "#4F4F4F"
    },
    profissionalDados:{
      fontSize: 16,
      fontFamily: 'Montserrat-SemiBold',
      color: "#4F4F4F",
    }
  });
  
  export default ListaProfissionais;
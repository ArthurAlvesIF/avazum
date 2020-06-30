import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, Component} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Alert,
  Platform, TouchableWithoutFeedback, Button, Keyboard  
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { color, set } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {Slider} from 'react-native-elements';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import instance from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';
import { CommonActions } from '@react-navigation/native';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

const Input = (props) =>{
    const [imageH, setImageH] = useState(require('../assets/images/head.png'));
    const [imageOD, setImageOD] = useState(require('../assets/images/ear_right.png'));
    const [imageOE, setImageOE] = useState(require('../assets/images/ear_left.png'));
    let imagem =require('../assets/images/head.png');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tempo, setTempo] = useState('');
  const [hora, setHora]= useState('');
  const [zumbidoSom, setZumbidoSom]= useState('');
  const [localZumbido, setLocalZumbido]= useState('');
  const [tipoSom, setTipoSom]= useState('');
  const [quandoZumbido, setQuandoZumbido]= useState('');
  const [pioraZumbido, setPioraZumbido]= useState('');
  const [melhoraZumbido, setMelhoraZumbido]= useState('');
  const [interfereZumbido, setInterfereZumbido]= useState('');
  const [ouveBem, setOuveBem]= useState('');
  const [incomodaSomAlto, setIncomodaSomAlto] = useState('');
  const [tontura, setTontura] =useState('');
  const [dores, setDores] =useState('');
  const [exposicaoRuido, setExposicaoRuido] =useState('');
  const [eva, setEva] = useState(0);

  const onChangeEmail = textValue => setEmail(textValue);
  const onChangeSenha = textValue => setSenha(textValue);
  var som;

  return (
    <View style={{alignSelf: "stretch", flex: 1, alignItems: 'center'}}>
      <View style={styles.input}>
            <Text style={styles.textInput}>Há quanto tempo houve seu zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Há 1 mês'
                    },
                    {
                        label: 'No último ano'
                    },
                    {
                        label: 'Nos últimos 5 anos'
                    },
                    {
                        label: 'Mais de 10 anos'
                    }

                ]}
                selectedBtn={(e) => setTempo(e.label)}
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Iniciou de uma hora para outra? Depois de que?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Repentinamente'
                    },
                    {
                        label: 'Aos poucos'
                    }
                ]}
                selectedBtn={(e) => setHora(e.label)}
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Qual som de assemelha mais ao seu zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Apito'
                    },
                    {
                        label: 'Chiado'
                    },
                    {
                        label: 'Panela de pressão'
                    },
                    {
                        label: 'Nenhuma das opções'
                    }

                ]}
                selectedBtn={(e) =>{ 
                    setZumbidoSom(e.label);
                    
                    var call  = (error) => {
                        if (error) {
                          console.log('failed to load the sound', error);
                          if (global.som)
                            global.som.stop();
                          return;
                        }
                        // loaded successfully
                        console.log('duration in seconds: ' + som.getDuration() + 'number of channels: ' + som.getNumberOfChannels());
                        // Play the sound with an onEnd callback
                        if (global.som)
                            global.som.stop();
                        global.som = som;
                        som.play((success) => {
                            if (success) {
                                console.log('successfully finished playing');
                            } else {
                                console.log('playback failed due to audio decoding errors');
                            }
                        });

                    };
                    if(e.label === 'Apito'){
                        console.log('oi');
                      
                        som = new Sound('apito.mp3', Sound.MAIN_BUNDLE, call);
                        console.log(global.som);
                    }
                    if(e.label === 'Chiado'){
                        som = new Sound('barulho.mp3', Sound.MAIN_BUNDLE, call);
                    }
                    if(e.label === 'Panela de pressão'){
                        som = new Sound('panela.mp3', Sound.MAIN_BUNDLE, call);
                    }
                    if(e.label === 'Nenhuma das opções')
                        som = new Sound('panelaa.mp3', Sound.MAIN_BUNDLE, call);
                    
                }}
            />
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Onde você ouve o som?</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {setLocalZumbido(localZumbido + "orelha esquerda"); setImageOE(require('../assets/images/ear_left2.png'))}}>
                    <Image source={imageOE} style={{width: 60, height: 60 }} ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setLocalZumbido(localZumbido + "cabeça"); setImageH(require('../assets/images/head2.png')); console.log(imageH)}}>
                    <Image source={imageH} style={{width: 100, height: 100}}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setLocalZumbido(localZumbido + "orelha direita"); setImageOD(require('../assets/images/ear_right2.png'))}}>
                    <Image source={imageOD} style={{width: 60, height: 60}} ></Image>
                </TouchableOpacity>
            </View>
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Tipo de som:</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Constante'
                    },
                    {
                        label: 'Múltiplo'
                    },
                    {
                        label: 'Pulsátil'
                    },
                    {
                        label: 'Clique'
                    }

                ]}
                selectedBtn={(e) => setTipoSom(e.label)}
            />
      </View>

      <View style={styles.input}>
            <Text style={styles.textInput}>Quando você percebe o zumbido?:</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'O tempo inteiro'
                    },
                    {
                        label: 'Durante o dia'
                    },
                    {
                        label: 'À noite / ao deitar'
                    }
                ]}
                selectedBtn={(e) => setQuandoZumbido(e.label)}
            />
      </View>

      <View style={styles.input}>
            <Text style={styles.textInput}>O que piora seu zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Álcool / Cigarro'
                    },
                    {
                        label: 'Exercício'
                    },
                    {
                        label: 'Barulho / silêncio'
                    },
                    {
                        label: 'Estresse'
                    },{
                        label: 'Jejum'
                    },{
                        label: 'Abertura / fechamento de boca'
                    },
                    {
                        label: 'Ansiedade'
                    },
                    {
                        label: 'Nada altera'
                    },
                    {
                        label: 'Outros'
                    }

                ]}
                selectedBtn={(e) => setPioraZumbido(e.label)}
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>O que melhora?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Som ambiente'
                    },
                    {
                        label: 'Medicação'
                    },
                    {
                        label: 'Rotação de cabeça'
                    },
                    {
                        label: 'Abrir ou fechar a boca'
                    },
                    {
                        label: 'Nada melhora'
                    }

                ]}
                selectedBtn={(e) => setMelhoraZumbido(e.label)}
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Interfere?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Sono'
                    },
                    {
                        label: 'Concentração'
                    },
                    {
                        label: 'Emocional'
                    },
                    {
                        label: 'Social'
                    },
                    {
                        label: 'Não interfere'
                    }

                ]}
                selectedBtn={(e) => setInterfereZumbido(e.label)}
            />
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Ouve bem?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Não'
                    },
                    {
                        label: 'Sim'
                    }

                ]}
                selectedBtn={(e) => setOuveBem(e.label)}
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Incomoda-se com som alto?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Sim'
                    },
                    {
                        label: 'Não'
                    }

                ]}
                selectedBtn={(e) => setIncomodaSomAlto(e.label)}
            />
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Sente tontura?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Sim'
                    },
                    {
                        label: 'Não'
                    }

                ]}
                selectedBtn={(e) => setTontura(e.label)}
            />
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Dores frequentes?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Dor no ouvido'
                    },
                    {
                        label: 'Cefaleia'
                    },
                    {
                        label: 'Dor no pescoço (Irradiada / não)'
                    },
                    {
                        label: 'Na mandíbula'
                    },
                    {
                        label: 'Bruxismo diurno / noturno'
                    }

                ]}
                selectedBtn={(e) => setDores(e.label)}
            />
      </View>

      
      <View style={styles.input}>
            <Text style={styles.textInput}>Exposto a ruído frequente?</Text>
            <RadioButtonRN
                boxActiveBgColor="#FFCCBC"
                activeColor="#ff9800"
                
                data={[
                    {
                        label: 'Trabalho'
                    },
                    {
                        label: 'lazer'
                    },
                    {
                        label: 'Não'
                    }

                ]}
                selectedBtn={(e) => setExposicaoRuido(e.label)}
            />
      </View>
      <View style={styles.input}>
        <Text style={styles.textInput}>Exposto a ruído frequente?</Text>
        <Slider
            value={eva}
            onValueChange={value => console.log(value)}
            maximumValue={10}
            minimumValue={0}
            />
        <Image source={require('../assets/images/eva.jpg')} style={{width: '100%'}}></Image>
      </View>

      <TouchableOpacity style={{...styles.btn, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 20, padding: 10}} activeOpacity={0.5} onPress={()=> {
            let encaminhamento = "Fonoaudiólogo";
            console.log(pioraZumbido);
            console.log(interfereZumbido);
            console.log(dores);
            console.log(melhoraZumbido);
            if(pioraZumbido.includes("Jejum"))
                encaminhamento += ', nutricionista';
            if(!interfereZumbido.includes("Não interfere"))
                encaminhamento+= ', psicólogo';
            if(dores.includes("pescoço") || dores.includes("díbula") || melhoraZumbido.includes('Rotação'))
                encaminhamento += ', fisioterapeuta.';
            encaminhamento += " e otorrinolaringologista";
            /*props.localZumbido =  localZumbido;
            props.tipoSom =  tipoSom;
            props.quandoZumbido =  quandoZumbido;
            props.pioraZumbido =  pioraZumbido;
            props.melhoraZumbido =  melhoraZumbido;
            props.interfereZumbido =  interfereZumbido;
            props.ouveBem =  ouveBem;
            props.incomodaSomAlto =  incomodaSomAlto;
            props.tontura =  tontura;
            props.dores =  dores;
            props.exposicaoRuido =  exposicaoRuido;
            props.eva = Math.floor( eva);
            }

            console.log(varia);

            //props['zumbidoSom'] = zumbidoSom;
            /*props.localZumbido =  localZumbido;
            props.tipoSom =  tipoSom;
            props.quandoZumbido =  quandoZumbido;
            props.pioraZumbido =  pioraZumbido;
            props.melhoraZumbido =  melhoraZumbido;
            props.interfereZumbido =  interfereZumbido;
            props.ouveBem =  ouveBem;
            props.incomodaSomAlto =  incomodaSomAlto;
            props.tontura =  tontura;
            props.dores =  dores;
            props.exposicaoRuido =  exposicaoRuido;
            props.eva = Math.floor( eva);

            //console.log(props);
            //let post = JSON.stringify(props);
            //console.log(post);
            //instance.post('insert.php', {props}).then((response) => console.log(response));
            */
           let resultado = {
            ...props,
            zumbidoSom : zumbidoSom,
            localZumbido:  localZumbido,
            tipoSom:  tipoSom,
            quandoZumbido:  quandoZumbido,
            pioraZumbido:  pioraZumbido,
            melhoraZumbido:  melhoraZumbido,
            interfereZumbido:  interfereZumbido,
            ouveBem:  ouveBem,
            incomodaSomAlto:  incomodaSomAlto,
            tontura:  tontura,
            dores:  dores,
            exposicaoRuido:  exposicaoRuido,
            encaminhamento: encaminhamento,
            tempo: tempo,
            hora: hora,
            eva: Math.floor( eva)
        }
        console.log("RESTAAA " + resultado);

        try{
            instance().post('insert.php', resultado).then((response) => console.log("rSPO" +response.data));
        AsyncStorage.setItem('usuario', JSON.stringify(resultado)).then(()=>{console.log("ok")});
        EstadoApp.setUsuario(resultado);
        //props.navigation.navigate("Resultado");
        props.navigation.dispatch(CommonActions.reset({index: 0, routes: [{name: 'Resultado'}]}));    
        }catch(error){
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
        
       
      }}>
              <Text style={{textAlign: 'center', color: "#FFF", fontWeight: 'bold', fontSize: 15} }>{"FINALIZAR"}</Text>
              <FontAwesomeIcon icon={faArrowAltCircleRight}  color="#FFF"  style={{marginLeft: 8}}/>


            </TouchableOpacity>

    </View>
  );
  
  
};

function Caracterizacao({route, navigation}){
    console.log(route.params);
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={{textDecorationStyle: 'solid', fontSize: 18, color: '#212121', alignSelf: 'center'}}>Responda as seguintes perguntas para caracterização do zumbido</Text>
                <Input props={route.params} navigation={navigation}></Input>
            </View>
        </ScrollView>
    )
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
        margin: 10,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'stretch'
    
    },
    btn: {
        padding: 10,
        borderColor: "#FF5722",
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: "#FF5722",
        alignSelf: 'stretch',
    },
    textInput:{
        fontSize: 15,
        color: "#212121"
    }
});
export default Caracterizacao;


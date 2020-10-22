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
import Toast from 'react-native-simple-toast';
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
import CheckBox from '@react-native-community/checkbox';
import Colors from '../config/colors';

var Sound = require('react-native-sound');


Sound.setCategory('Playback');

const Input = (props) =>{
    const [check1, setCheck1] =useState(false);
    const [check2, setCheck2] =useState(false);
    const [check3, setCheck3] =useState(false);
    const [check4, setCheck4] =useState(false);
    const [check5, setCheck5] =useState(false);
    const [check6, setCheck6] =useState(false);
    const [check7, setCheck7] =useState(false);
    const [check8, setCheck8] =useState(false);
    const [check9, setCheck9] =useState(false);

    const [check10, setCheck10] =useState(false);
    const [check11, setCheck11] =useState(false);
    const [check12, setCheck12] =useState(false);
    const [check13, setCheck13] =useState(false);
    const [check14, setCheck14] =useState(false);
    const [check15, setCheck15] =useState(false);

    const [check16, setCheck16] =useState(false);
    const [check17, setCheck17] =useState(false);
    const [check18, setCheck18] =useState(false);
    const [check19, setCheck19] =useState(false);

    const [check20, setCheck20] =useState(false);
    const [check21, setCheck21] =useState(false);
    const [check22, setCheck22] =useState(false);
    const [check23, setCheck23] =useState(false);
    const [check24, setCheck24] =useState(false);

    const [check25, setCheck25] = useState(false);
    const [check26, setCheck26] = useState(false);
    const [check27, setCheck27] = useState(false);
    const [check28, setCheck28] = useState(false);


    const [check29, setCheck29] = useState(false);
    const [check30, setCheck30] = useState(false);
    const [check31, setCheck31] = useState(false);
    const [check32, setCheck32] = useState(false);
    const [check33, setCheck33] = useState(false);
    const [check34, setCheck34] = useState(false);
    const [check35, setCheck35] = useState(false);
    const [check36, setCheck36] = useState(false);
    const [check37, setCheck37] = useState(false);
    const [check38, setCheck38] = useState(false);
    const [check39, setCheck39] = useState(false);
    const [check40, setCheck40] = useState(false);
    const [check41, setCheck41] = useState(false);
    const [check42, setCheck42] = useState(false);

    const [comorbidades, setCormobidades] = useState("");
    const [checkTextoOutros, setCheckTextoOutros] = useState("");
    const [checkOutrosMelhora, setCheckOutrosMelhora] = useState("");



    const [imageH, setImageH] = useState(require('../assets/images/head.png'));
    const [imageOD, setImageOD] = useState(require('../assets/images/ear_right.png'));
    const [imageOE, setImageOE] = useState(require('../assets/images/ear_left.png'));
    let imagem =require('../assets/images/head.png');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tempo, setTempo] = useState('');
  const [hora, setHora]= useState('');
  const [acontecimento, setAcontecimento] = useState("Não");
  const [acontecimentoText, setAcontecimentoText] = useState("");
  const [maisDeUmSom, setMaisDeUmSom] = useState("");
  const [intensidadeZumbido, setVolumeZumbido] = useState("");
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

  const [selOD, setOD] = useState(false);
  const [selOE, setOE] = useState(false);
  const [selODE, setODE] = useState(false);
  const [selCabeca, setCabeca] = useState(false);
  const onChangeEmail = textValue => setEmail(textValue);
  const onChangeSenha = textValue => setSenha(textValue);
  var som;

  const[emot1, setEmot1] = useState(require('../assets/images/cinza1.png'));
  const[emot2, setEmot2] = useState(require('../assets/images/cinza2.png'));
  const[emot3, setEmot3] = useState(require('../assets/images/cinza3.png'));
  const[emot4, setEmot4] = useState(require('../assets/images/cinza4.png'));
  const[emot5, setEmot5] = useState(require('../assets/images/cinza5.png'));

  const selectOndeOuve = (id)=>{
      console.log(id);
      switch(id){
          case 1:
              setOD(true);
              console.log(selOD+"SSS");
              setOE(false);
              setODE(false);
              setCabeca(false);
              setLocalZumbido("ORELHA DIREITA");
              break;
            case 2:
              setOE(true);
              setOD(false);
              setODE(false);
              setCabeca(false);
              setLocalZumbido("ORELHA ESQUERDA");
              break;
            case 3:
              setODE(true);
              setOE(false);
              setOD(false);
              setCabeca(false);
              setLocalZumbido("ORELHA DIREITA E ESQUERDA");
              break;
            case 4:
              setCabeca(true);
              setOE(false);
              setODE(false);
              setOD(false);
              setLocalZumbido("NA CABEÇA");
              break;
      }
      console.log(selOD+"SSS");

  }
  return (
      <View>
    <View style={{alignSelf: "stretch", flex: 1, alignItems: 'flex-start'}}>
        <Text style={{
      fontSize: 40,
      color: "#4F4F4F",
      padding: 20,
      textAlign: 'left',
      fontFamily: 'Montserrat-SemiBold'
      
    }}>A seguir você responderá questões relacionadas ao seu zumbido.</Text>
    <Text style={{
      fontSize: 18,
      color: "#4F4F4F",
      padding: 20,
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
       marginBottom: 40
      
    }}>Estas podem auxiliar a encontrarmos uma provável causa, além de ajudar no diagnóstico do mesmo.
    Preparado?</Text>
      <View style={{margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor}}>
            <Text style={{alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>Há quanto tempo houve seu zumbido?</Text>
            
        <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
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
                    },
                    {
                        label: 'Não sei informar'
                    }

                ]}
                selectedBtn={(e) => setTempo(e.label)}
            />
      </View>
      <View style={{margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor}}>
            <Text style={{alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>Como foi o início do seu zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
                data={[
                    {
                        label: 'Repentinamente'
                    },
                    {
                        label: 'Aos poucos'
                    },
                    {
                        label: 'Não sei informar'
                    }
                ]}
                selectedBtn={(e) => setHora(e.label)}
            />
      </View>
      <View style={{margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor}}>
            <Text style={{alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>Você relaciona o aparecimento do zumbido com algum acontecimento?</Text>
            {   acontecimento === "Sim" &&
                (<View style={{backgroundColor: '#f0f0f0', padding: 10, paddingBottom: 5}}>
                    <TextInput style={styles.inputT} visible label="Especifique o momento..." placeholder="Especifique o momento..." value={acontecimentoText} onChangeText={(e)=>setAcontecimentoText(e)}/>
                </View>)
            }
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0}}
                data={[
                    {
                        label: 'Sim'
                    },
                    {
                        label: 'Não'
                    }
                ]}
                selectedBtn={(e) => setAcontecimento(e.label)}
                
            />
            

      </View>
      <View style={{margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor}}>
            <Text style={{alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>Você escuta mais de um som diferente?</Text>
            
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0}}
                data={[
                    {
                        label: 'Um som'
                    },
                    {
                        label: 'Mais de um som'
                    },
                    {
                        label: 'Não sei informar'
                    }
                ]}
                selectedBtn={(e) => setMaisDeUmSom(e.label)}
                
            />
            

      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Qual som se assemelha mais ao seu zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
                
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
                        label: 'Cigarra'
                    },
                    {
                        label: 'Grilo'
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
                        som.getCurrentTime((seconds) => console.log('at ' + seconds));
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
                    if(e.label === "Cigarra"){
                        som = new Sound("cigarra.wav", Sound.MAIN_BUNDLE, call);
                        Toast.show("\"Cicada, Close, A.wav\" by InspectorJ (www.jshaw.co.uk) of Freesound.org");
                    }
                    if(e.label === "Grilo")
                        som = new Sound("grilos.m4a", Sound.MAIN_BUNDLE, call);
                    if(e.label === 'Nenhuma das opções')
                        som = new Sound('panelaa.mp3', Sound.MAIN_BUNDLE, call);
                    
                }}
            />
      </View>
      <View style={{margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor}}>
            <Text style={{alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>Você percebe que a intensidade (volume) do seu zumbido muda no decorrer do dia?</Text>
            
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0}}
                data={[
                    {
                        label: 'Sim'
                    },
                    {
                        label: 'Não'
                    },
                    {
                        label: 'Não sei informar'
                    }
                ]}
                selectedBtn={(e) => setVolumeZumbido(e.label)}
                
            />
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>Onde você ouve o som?</Text>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={selOD ? styles.selected : styles.selectedDefault} onPress={()=>selectOndeOuve(1)}>
                            <Image source={require("../assets/images/zumbido_OD.png")} style={{width: 135, height: 135}}/>
                            <Text style={{alignSelf: 'center', fontFamily: 'Montserrat-Regular', fontSize: 18, textAlign: 'center'}}>ORELHA DIREITA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={selOE ? styles.selected : styles.selectedDefault} onPress={()=>selectOndeOuve(2)}>
                            <Image source={require("../assets/images/zumbido_OE.png")} style={{width: 135, height: 135}}/>
                            <Text style={{alignSelf: 'center', fontFamily: 'Montserrat-Regular', fontSize: 18, justifyContent: 'center', textAlign: 'center'}}>ORELHA ESQUERDA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={selODE ? styles.selected : styles.selectedDefault} onPress={()=>selectOndeOuve(3)}>
                            <Image source={require("../assets/images/zumbido_ambos.png")} style={{width: 135, height: 135}}/>
                            <Text style={{alignSelf: 'center', fontFamily: 'Montserrat-Regular', fontSize: 15, textAlign: 'center'}}>ORELHA DIREITA E ESQUERDA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={selCabeca ? styles.selected : styles.selectedDefault} onPress={()=>selectOndeOuve(4)}>
                            <Image source={require("../assets/images/zumbido_cabeca.png")} style={{width: 135, height: 135}}/>
                            <Text style={{alignSelf: 'center', fontFamily: 'Montserrat-Regular', fontSize: 18, textAlign: 'center'}}>NA CABEÇA</Text>
                        </TouchableOpacity>
                    </View>
                   
                    
                </View>
                
            </View>
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>O tipo de som do seu zumbido é:</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}

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
                    },
                    {
                        label: 'Nenhuma das opções acima'
                    }

                ]}
                selectedBtn={(e) => setTipoSom(e.label)}
            />
      </View>

      <View style={styles.input}>
            <Text style={styles.textInput}>Quando você percebe o zumbido?</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
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
            <Text style={styles.textInput}>O que piora o seu zumbido?</Text>
            <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <View style={styles.chk}>
                <CheckBox     value={check1}
                    onValueChange={() => {
                    setCheck1(!check1);
                }}/>
                <Text style={{fontSize: 18}}>Bebida alcoólica</Text>
            </View>
            
            <View style={styles.chk}>
                <CheckBox     value={check26}
                    onValueChange={() => {
                    setCheck26(!check26);
                }}/>
                <Text style={{fontSize: 18}}>Cigarro</Text>
            </View>

                
            <View style={styles.chk}>
                <CheckBox     value={check2}
                    onValueChange={() => {
                    setCheck2(!check2);
                }}/>
                <Text style={{fontSize: 18}}>Exercício</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check3}
                    onValueChange={() => {
                    setCheck3(!check3);
                }}/>
                <Text style={{fontSize: 18}}>Barulho</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check27}
                    onValueChange={() => {
                    setCheck27(!check27);
                }}/>
                <Text style={{fontSize: 18}}>Silêncio</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check4}
                    onValueChange={() => {
                    setCheck4(!check4);
                }}/>
                <Text style={{fontSize: 18}}>Estresse</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check5}
                    onValueChange={() => {
                    setCheck5(!check5);
                }}/>
                <Text style={{fontSize: 18}}>Jejum</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check6}
                    onValueChange={() => {
                    setCheck6(!check6);
                }}/>
                <Text style={{fontSize: 18}}>Abertura de boca</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check28}
                    onValueChange={() => {
                    setCheck28(!check28);
                }}/>
                <Text style={{fontSize: 18}}>Fechamento de boca</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check7}
                    onValueChange={() => {
                    setCheck7(!check7);
                }}/>
                <Text style={{fontSize: 18}}>Ansiedade</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check8}
                    onValueChange={() => {
                    setCheck8(!check8);
                }}/>
                <Text style={{fontSize: 18}}>Movimentação de cabeça</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check9}
                    onValueChange={() => {
                    setCheck9(!check9);
                }}/>
                <Text style={{fontSize: 18}}>Nada altera</Text>
            </View>
            </View>
      </View>
      <View style={styles.input}>


            <Text style={styles.textInput}>O que melhora seu zumbido?</Text>
            <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <View style={styles.chk}>
                <CheckBox     value={check10}
                    onValueChange={() => {
                    setCheck10(!check10);
                }}/>
                <Text style={{fontSize: 18}}>Som ambiente</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check11}
                    onValueChange={() => {
                    setCheck11(!check11);
                }}/>
                <Text style={{fontSize: 18}}>Medicação</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check12}
                    onValueChange={() => {
                    setCheck12(!check12);
                }}/>
                <Text style={{fontSize: 18}}>Rotação de cabeça</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check13}
                    onValueChange={() => {
                    setCheck13(!check13);
                }}/>
                <Text style={{fontSize: 18}}>Abrir a boca</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check29}
                    onValueChange={() => {
                    setCheck29(!check29);
                }}/>
                <Text style={{fontSize: 18}}>Fechar a boca</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check14}
                    onValueChange={() => {
                    setCheck14(!check14);
                }}/>
                <Text style={{fontSize: 18}}>Nada melhora</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check30}
                    onValueChange={() => {
                    setCheck30(!check30);
                }}/>
                <Text style={{fontSize: 18}}>Outros</Text>
            </View>
            { (check30) &&
                (
                    <View style={styles.chk}>
                        <TextInput placeholder="Especifique..." style={{backgroundColor: '#f0f0f0', width: '100%'}} value={checkOutrosMelhora} onChangeText={(text)=> setCheckOutrosMelhora(text) }/>
                    </View>
                )

            }

           </View>
      </View>
      <View style={styles.input}>
            <Text style={styles.textInput}>O seu zumbido interfere no/a:</Text>
            <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <View style={styles.chk}>
                <CheckBox     value={check15}
                    onValueChange={() => {
                    setCheck15(!check15);
                }}/>
                <Text style={{fontSize: 18}}>Sono</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check16}
                    onValueChange={() => {
                    setCheck16(!check16);
                }}/>
                <Text style={{fontSize: 18}}>Concentração</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check17}
                    onValueChange={() => {
                    setCheck17(!check17);
                }}/>
                <Text style={{fontSize: 18}}>Emocional</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check18}
                    onValueChange={() => {
                    setCheck18(!check18);
                }}/>
                <Text style={{fontSize: 18}}>Social</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check19}
                    onValueChange={() => {
                    setCheck19(!check19);
                }}/>
                <Text style={{fontSize: 18}}>Não interfere</Text>
            </View>
            </View>
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Você tem dificuldade para ouvir?</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
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
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
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
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
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
            <Text style={styles.textInput}>Você sente dores frequentes no/a?</Text>
            <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <View style={styles.chk}>
                <CheckBox     value={check20}
                    onValueChange={() => {
                    setCheck20(!check20);
                }}/>
                <Text style={{fontSize: 18}}>Dor no ouvido</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check21}
                    onValueChange={() => {
                    setCheck21(!check21);
                }}/>
                <Text style={{fontSize: 18}}>Cefaleia</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check22}
                    onValueChange={() => {
                    setCheck22(!check22);
                }}/>
                <Text style={{fontSize: 18}}>Dor no pescoço irradiada</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check31}
                    onValueChange={() => {
                    setCheck31(!check31);
                }}/>
                <Text style={{fontSize: 18}}>Dor no pescoço não irradiada</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check23}
                    onValueChange={() => {
                    setCheck23(!check23);
                }}/>
                <Text style={{fontSize: 18}}>Ranger os dentes</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check32}
                    onValueChange={() => {
                    setCheck32(!check32);
                }}/>
                <Text style={{fontSize: 18}}>Não sinto dores frequentes</Text>
            </View>
            </View>
      </View>

      <View style={styles.input}>
            <Text style={styles.textInput}>Além do zumbido, você tem ou já teve:</Text>
            <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
            <View style={styles.chk}>
                <CheckBox     value={check33}
                    onValueChange={() => {
                    setCheck33(!check33);
                }}/>
                <Text style={{fontSize: 18}}>Refluxo gastroesofágico</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check34}
                    onValueChange={() => {
                    setCheck34(!check34);
                }}/>
                <Text style={{fontSize: 18}}>Diabetes</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check35}
                    onValueChange={() => {
                    setCheck35(!check35);
                }}/>
                <Text style={{fontSize: 18}}>Hipertensão arterial (pressão alta)</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check36}
                    onValueChange={() => {
                    setCheck36(!check36);
                }}/>
                <Text style={{fontSize: 18}}>Colesterol alterado</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check37}
                    onValueChange={() => {
                    setCheck37(!check37);
                }}/>
                <Text style={{fontSize: 18}}>Problemas na tireoide</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check38}
                    onValueChange={() => {
                    setCheck38(!check38);
                }}/>
                <Text style={{fontSize: 18}}>Sobrepeso</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check42}
                    onValueChange={() => {
                    setCheck42(!check42);
                }}/>
                <Text style={{fontSize: 18}}>Não tenho nenhum outro problema</Text>
            </View>
            <View style={styles.chk}>
                <CheckBox     value={check39}
                    onValueChange={() => {
                    setCheck39(!check39);
                }}/>
                <Text style={{fontSize: 18}}>Outros</Text>
            </View>
            { (check39) &&
                (
                    <View style={styles.chk}>
                        <TextInput placeholder="Especifique..." style={{backgroundColor: "#f0f0f0", width: '100%'}}  value={checkTextoOutros} onChangeText={(text)=> setCheckTextoOutros(text) }/>
                    </View>
                )

            }
            </View>
      </View>
      
      <View style={styles.input}>
            <Text style={styles.textInput}>Você é exposto a ruído frequente?</Text>
            <RadioButtonRN
                boxActiveBgColor={Colors.accentColor}
                activeColor={Colors.mainColor}
                style={{backgroundColor: "#f0f0f0", padding: 10, paddingTop: 0, paddingBottom: 10, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius:0}}
                
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
        <Text style={styles.textInput}>Quanto o seu zumbido te incomoda?</Text>
        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, alignSelf: 'center', textAlign: 'center', margin:20, marginTop: 0, color: '#fff'}}>Considerando 0 não incomoda e 10 incomoda muito:</Text>
        <View style={{backgroundColor: '#f0f0f0', flexDirection: 'row', alignContent: 'center', width: '100%', paddingLeft: 4}}>
            <Text style={styles.textEva}>0</Text>
            <Text style={styles.textEva}>1</Text>
            <Text style={styles.textEva}>2</Text>
            <Text style={styles.textEva}>3</Text>
            <Text style={styles.textEva}>4</Text>
            <Text style={styles.textEva}>5</Text>
            <Text style={styles.textEva}>6</Text>
            <Text style={styles.textEva}>7</Text>
            <Text style={styles.textEva}>8</Text>
            <Text style={styles.textEva}>9</Text>
            <Text style={styles.textEva}>10</Text>
        </View>
        <Slider
            value={eva}
            onValueChange={value => {
                setEva(value); 
                console.log(value);
                if(value == 0){
                    console.log("zeaedo");
                    setEmot1(require('../assets/images/cinza1.png'));
                    setEmot2(require('../assets/images/cinza2.png'));
                    setEmot3(require('../assets/images/cinza3.png'));
                    setEmot4(require('../assets/images/cinza4.png'));
                    setEmot5(require('../assets/images/cinza5.png'));
                }
                else if (value <= 2){
                    setEmot1(require('../assets/images/color1.png'));
                    setEmot2(require('../assets/images/cinza2.png'));
                    setEmot3(require('../assets/images/cinza3.png'));
                    setEmot4(require('../assets/images/cinza4.png'));
                    setEmot5(require('../assets/images/cinza5.png'));
                }
                else if (value <= 4){
                    setEmot1(require('../assets/images/color1.png'));
                    setEmot2(require('../assets/images/color2.png'));
                    setEmot3(require('../assets/images/cinza3.png'));
                    setEmot4(require('../assets/images/cinza4.png'));
                    setEmot5(require('../assets/images/cinza5.png'));
                }
                else if (value <= 6){
                    setEmot1(require('../assets/images/color1.png'));
                    setEmot2(require('../assets/images/color2.png'));
                    setEmot3(require('../assets/images/color3.png'));
                    setEmot4(require('../assets/images/cinza4.png'));
                    setEmot5(require('../assets/images/cinza5.png'));
                }
                else if (value <= 8){
                    setEmot1(require('../assets/images/color1.png'));
                    setEmot2(require('../assets/images/color2.png'));
                    setEmot3(require('../assets/images/color3.png'));
                    setEmot4(require('../assets/images/color4.png'));
                    setEmot5(require('../assets/images/cinza5.png'));
                }
                else if (value <= 10){
                    setEmot1(require('../assets/images/color1.png'));
                    setEmot2(require('../assets/images/color2.png'));
                    setEmot3(require('../assets/images/color3.png'));
                    setEmot4(require('../assets/images/color4.png'));
                    setEmot5(require('../assets/images/color5.png'));
                }

            }}
            maximumValue={10}
            step={1}
            minimumValue={0}
            minimumTrackTintColor={Colors.accentColor}
            thumbTintColor={Colors.accentColor}
            
            style={{backgroundColor: "#f0f0f0", padding: 5}}
            />
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#f0f0f0', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <Image source={emot1} style={{width:'20%', height: 75}}></Image>
                <Image source={emot2} style={{width:'20%', height: 75}}></Image>
                <Image source={emot3} style={{width:'20%', height: 75}}></Image>
                <Image source={emot4} style={{width:'20%', height: 75}}></Image>
                <Image source={emot5} style={{width:'20%', height: 75}}></Image>
            </View>
        
      </View>

      
    </View>
    <TouchableOpacity style={{alignSelf: 'center', padding: 10,borderRadius: 10,backgroundColor: Colors.accentColor,width: '95%',  flexDirection: 'row', justifyContent: 'center',alignItems: 'center', marginTop: 30, marginBottom: 30}} activeOpacity={0.5} onPress={()=> {
    let piora = [];
    if(check1)
        piora.push("Álcool");
    if(check2)
        piora.push('Exercício');
    if(check3)
        piora.push('Barulho');
    if(check4)
        piora.push('Estresse');
    if(check5)
        piora.push('Jejum');
    if(check6)
        piora.push('Abertura');
    if(check7)
        piora.push('Ansiedade');
    if(check8)
        piora.push('Nada altera');            
    if(check9)
        piora.push('Outros');    
    if(check26)
        piora.push("Cigarro");
    if(check27)
        piora.push("Silêncio");
    if(check28)
        piora.push("Fechamento de boca");

    let melhora = [];
    if(check10)
        melhora.push("Som ambiente");
        if(check11)
        melhora.push("Meditação");
        if(check12)
        melhora.push("Rotação de cabeça");
        if(check13)
        melhora.push("Abrir a boca");
        if(check14)
        melhora.push("Nada melhora");
        if(check29)
            melhora.push("Fechar a boca");
    let interfere = [];
    if(check15)
        interfere.push("Sono");
        if(check16)
        interfere.push("Concentração");
        if(check17)
        interfere.push("Emocional");
        if(check18)
        interfere.push("Social");
        if(check19)
        interfere.push("Nada melhora");
        if(check30)
        interfere.push("Outros");
    let dor = [];
    if(check20)
        dor.push("Dor no ouvido");
        if(check21)
        dor.push("Cefaleia");
        if(check22)
        dor.push("Dor no pescoço não irradiada");
        if(check23)
        dor.push("Ranger os dentes");
        if(check30)
            dor.push(checkOutrosMelhora);
        if(check31)
        dor.push("Dor no pescoço irradiada");
        if(check32)
        dor.push("Dor no pescoço irradiada");
    let comb = [];
    if(check33)
        comb.push("Refluxo gastroesofágico");
    if(check34)
        comb.push("Diabetes");
        if(check35)
        comb.push("Hipertensão arterial");
        if(check36)
        comb.push("Colesterol alterado");
        if(check37)
        comb.push("Problemas na tireoide");
        if(check38)
        comb.push("Sobrepeso");
        if(check39)
        comb.push("Outros: " + checkTextoOutros);
        if(check42)
        comb.push("Nenhum outro problema");
    console.log("Dores" + pioraZumbido);
    let sComb = "";
    comb.map((c) => sComb = sComb + c);
    let sDores = "";
    dor.map((d) => sDores = sDores + d);
    let sInterfere ="";
    interfere.map((i) => sInterfere = sInterfere + i);
    let sMelhora = "";
    melhora.map((m) => sMelhora = sMelhora + m);
    let sPiora = "";
    piora.map((p) => sPiora = sPiora + p);
    setPioraZumbido(piora);
    setMelhoraZumbido(sMelhora);
    setInterfereZumbido(sInterfere);
    setDores(sDores);
    setCormobidades(sComb);
    console.log("Dores1: " + sDores);
    console.log("Interfere: " + sInterfere);

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

      console.log(check1 + ">>>>");
      console.log(check2 + ">>>>");
      console.log(check3 + ">>>>");
      console.log(check4 + ">>>>");
      console.log(check5 + ">>>>");
      
          console.log("EVA: " + eva);
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
     if(acontecimento === "Sim")
      acontecimento = acontecimento +". " + acontecimentoText;
     let resultado = {
      ...props,
      zumbidoSom : zumbidoSom,
      localZumbido:  localZumbido,
      tipoSom:  tipoSom,
      quandoZumbido:  quandoZumbido,
      pioraZumbido:  sPiora,
      melhoraZumbido:  sMelhora,
      interfereZumbido:  sInterfere,
      ouveBem:  ouveBem,
      incomodaSomAlto:  incomodaSomAlto,
      tontura:  tontura,
      dores:  sDores,
      exposicaoRuido:  exposicaoRuido,
      encaminhamento: encaminhamento,
      tempo: tempo,
      hora: hora,
      eva: Math.floor( eva),
      maisDeUmSom: maisDeUmSom,
      intensidadeZumbido: intensidadeZumbido,
      acontecimento: acontecimento
  }
  console.log("RESTAAA " + resultado);

  try{
      instance().post('insert.php', resultado).then((response) => console.log("rSPO" + response.data));
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
  
 
}}><Text style={{textAlign: 'center', color: "#FFF", fontWeight: 'bold', fontSize: 25, fontFamily: "Montserrat-Bold"} }>{"Continuar"}</Text></TouchableOpacity>
    </View>
  );
  
  
};

function Caracterizacao({route, navigation}){
    console.log(route.params);
    return(
        <ScrollView>
            <View style={styles.container}>
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
        margin: 10, borderRadius: 10, alignSelf: 'stretch', backgroundColor: Colors.mainColor
    },
    btn: {
        padding: 10,
        borderColor: "#FF5722",
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: "#FF5722",
        alignSelf: 'stretch',
    },
    chk:{
        flexDirection: 'row', backgroundColor: '#FFF', padding: 10, borderRadius: 4, alignItems: 'center', marginBottom: 5
    },
    inputT:{
        margin: 0,
        borderRadius: 5,
        padding: 8,
        paddingLeft: 10,
        backgroundColor: "#fff",
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
      },
    textInput:{
        alignSelf: 'stretch', backgroundColor: Colors.mainColor, padding:20, borderRadius: 20, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18
    },
    textEva: {fontFamily: 'Montserrat-SemiBold', fontSize: 15, width: '8%', margin: 2, marginTop: 5},
    selectedDefault:{
        margin: 5, backgroundColor: '#fff', padding: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 175, height: 200
    },
    selected:{
        margin: 5, backgroundColor: '#fff', padding: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 175, height: 200, borderColor: Colors.accentColor, borderWidth: 2
    }
});
export default Caracterizacao;



import React, { Component } from 'react';
import {AppContext, createSwitchNavigator, DrawerActions} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators} from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Caracterizacao from './pages/caracterizacao';
import Resultado from './pages/resultado';
import { View, TouchableOpacity, Text, AppRegistry } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Main from './pages/main';
import { DrawerContent} from './pages/DrawerContent';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import post from './pages/post';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './pages/splashScreen';
import EstadoApp from './config/EstadoApp';
const Drawer = createDrawerNavigator();
const teste = 'oaaaaaaaaa';
const Drawer1 = () =>{
    
    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent ={props => <DrawerContent {...props} value={value}/>} screenOptions={({ navigation }) => ({ 
            headerLeft: () =><View><TouchableOpacity> <FontAwesomeIcon icon={faBars} color="#fff"/></TouchableOpacity> <Text>po</Text></View>,
             headerLeftContainerStyle: { paddingLeft: 10 } } 
             
         )} headerMode="float"
         animation="fade"
         headerShown="true">
            <Drawer.Screen name="Home" >{props => <Main options={{headerShown: true}}{...props} usuario = {value}/> }</Drawer.Screen>
            <Drawer.Screen name="Resultado" component={Resultado}  />
            <Drawer.Screen name="Login" options={{headerShown: false}} component={Login2} />
        </Drawer.Navigator>
    )
}


const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: '#FF5722',
        text: "#FFF",
        background: "#FFF"
    }
};
let value = null;

getData = async () => {

    try {
      value = await AsyncStorage.getItem('usuario')
      if(value === null) {
        // value previously stored
        console.log("oi");
      }else{
          console.log("oi2");
      }
    } catch(e) {
      // error reading value
    }finally{
        setIsLoading(false);
    }
}

const Condicional = () =>{
    console.log("olar: " +value);
    if(value !== null){ 
        EstadoApp.setUsuario(JSON.parse(value));
        return(
            <Logado />
        );
    }else
        return (
            <Login2/>
        );
}
const Login2 = ({navigation}) =>{
    if(navigation !==null)
        console.log("dif");
    return(
        
        <Stack.Navigator 
        screenOptions={{
            gestureEnabled: "true",
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            headerMode="float"
            animation="fade"
            
        >
            <Stack.Screen name="Login" component={Login} options={{headerShown: false, headerMode:'none'}}/>
            <Stack.Screen name="Cadastrar" component={Cadastrar} screenOptions={{headerShown: true}}/>
            <Stack.Screen name="Caracterização do zumbido" component={Caracterizacao}  />
            <Stack.Screen name="Logado" component={Logado}  options={{headerShown: false, headerMode:'none'}}/>
            <Stack.Screen name="Resultado" component={Resultado}  />
        </Stack.Navigator>
    );
}  

const Logado = ({route}) =>{
    console.log("VALLL: " + value);
    return (
        <Drawer.Navigator
        initialRouteName="Principal" drawerContent ={props => <DrawerContent {...props} value={value}/>} screenOptions={({ navigation }) => ({ 
            headerLeft: () =><View><TouchableOpacity onPress={navigation.dispatch(DrawerActions.openDrawer())}><FontAwesomeIcon icon={faBars} color="#fff"/></TouchableOpacity></View>,
             headerLeftContainerStyle: { paddingLeft: 10 } } 
             
         )} 
                headerMode="float"
                animation="fade"
            >
            <Drawer.Screen name="Principal" component={Elements} ></Drawer.Screen>
        </Drawer.Navigator>
    );
}

const Elements = ({props, route}) =>{
    
    return(
        <Stack.Navigator
        screenOptions={({ navigation }) => ({ 
            headerLeft: () =><View><TouchableOpacity onPress={() =>{navigation.dispatch(DrawerActions.openDrawer()); console.log("opa")}}><FontAwesomeIcon icon={faBars} color="#fff"/></TouchableOpacity></View>,
             headerLeftContainerStyle: { paddingLeft: 10 } } 
             
         )} 
                headerMode="float"
                animation="fade">
            <Stack.Screen name="Principal" component={Main}></Stack.Screen>
            <Stack.Screen name="Login" options={{headerShown: false}}  component={Login2}></Stack.Screen>
            <Stack.Screen name="Resultado" component={Resultado}></Stack.Screen>
            <Stack.Screen name="Post" component={post}></Stack.Screen>
        </Stack.Navigator>
    );
}

const serviceTask = async()=>{
    console.log("AAAAAAAAAAAA");
    setTimeout(()=>{}, 1000);
}

const App = () => {

    AppRegistry.registerHeadlessTask("service", ()=>serviceTask);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(()=>{
            try {
                AsyncStorage.getItem("usuario", (error, result) => {
                    value = result;
                    setIsLoading(false);
                    console.log("set");
                });
            } catch(e) {
            // error reading value
                console.log('olaa');
                console.log(e);
                setIsLoading(false);
                console.log("set");
            }finally{
            }
        
    }, []);

    if (isLoading){
        console.log("loading");
        return <SplashScreen/>;
    }
    
    return (
        <NavigationContainer theme={theme}   >
           {(isLoading ? <SplashScreen/> : <Condicional/>)}
        </NavigationContainer>
    );

}
export default App;
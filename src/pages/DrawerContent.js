import React from 'react';
import {View, StyleSheet, DevSettings } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {faHome, faSignOutAlt, faUsers} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import EstadoApp from '../config/EstadoApp';
import {CommonActions, DrawerActions} from '@react-navigation/native';
export function DrawerContent(props){
    console.log("aa");
    return(
        <View style={{flex: 1, backgroundColor: "#F0f0f0"}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                            <Title style={styles.title}>{EstadoApp.getUsuario().props.nome}</Title>
                        </View>
                    </View>

                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) =>(
                            <FontAwesomeIcon icon={faHome}  color="#000" />
                        )}
                        label="Principal"
                        labelStyle={{color: '#000'}}
                        onPress={() =>{props.navigation.dispatch(CommonActions.reset({index:0,routes:[{name: 'Principal'}]}))}}
                    />
                    
                    <DrawerItem
                        icon={({color, size}) =>(
                            <FontAwesomeIcon icon={faUsers}  color="#000" />
                        )}
                        label="Profissionais"
                        labelStyle={{color: '#000'}}
                        onPress={() =>{props.navigation.dispatch(CommonActions.reset({

                            index:0,
                            routes:[
                              {
                                name: "Resultado"
                              }
                            
                            ]
                            }))}}
                    />                

                    <DrawerItem
                        icon={({color, size}) =>(
                            <FontAwesomeIcon icon={faSignOutAlt}  color="#000" />
                        )}
                        label="Sair"
                        labelStyle={{color: '#000'}}
                        onPress={() =>{AsyncStorage.removeItem("usuario").then(()=> {props.navigation.dispatch(CommonActions.reset({

                            index:0,
                            routes:[
                              {
                                name: "Login"
                              }
                            
                            ]
                            })); props.navigation.dispatch(DrawerActions.closeDrawer());})}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottonDrawerSection}>
                <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sair"
                    onPress={() =>{}}
                    />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1
    },
    userInfoSection:{
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 14
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection:{
        marginTop: 15
    },
    bottonDrawerSection: {
        marginBottom: 14,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
});


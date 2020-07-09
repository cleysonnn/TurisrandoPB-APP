import * as React from 'react';import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'

export default function Roteiro(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>





            <View style={styles.topContainer}>

                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon name="arrow-left" size={35} color='#1E90FF'/>
                </TouchableOpacity>
                
                <Text style={styles.titulo}>Roteiro</Text>

            </View>








            <View style={styles.searchBoxContainer}>

                <TextInput
                        style={styles.input}
                        placeholder="Digite o nome da cidade"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"

                        autoCorret={false}
                        onChangeText={() => { }}/>

                        <TouchableOpacity>
                            <Icon name= "magnify" size={30}></Icon>
                        </TouchableOpacity>
            
            
            </View>

            <Text style={{fontSize: 20, fontWeight: 'bold'}} >Cidades</Text>
            
 
 
 
        </View>


    );

}
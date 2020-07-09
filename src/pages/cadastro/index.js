import * as React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './style';
import { TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'




export default function Cadastro(){
    const navigation = useNavigation();

    function navigationToHome(){
        navigation.navigate('Home')
    }

    return(

        <KeyboardAvoidingView style={styles.container}>
            
            <Text style={styles.textTitle}>
                Cadastro
            </Text>

            <View style={styles.cadastroContainer}>
                <TextInput style={styles.input} 
                placeholder="Nome de usuario" 
                autoCorret={false} 
                onChangeText={()=>{}}/>

                <TextInput 
                style={styles.input} 
                placeholder="Email" 
                autoCorret={false} 
                onChangeText={()=>{}}/>

                <TextInput 
                style={styles.input} 
                placeholder="Senha" 
                autoCorret={false}
                secureTextEntry={true} 
                onChangeText={()=>{}}/>

                <TextInput 
                style={styles.input} 
                placeholder="Repetir senha" 
                autoCorret={false}
                secureTextEntry={true} 
                onChangeText={()=>{}}/>

                <TouchableOpacity style={styles.btnSubmit} onPress={navigationToHome}>
                    <Text style={styles.textSubmit}>
                        Concluir
                    </Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );

}
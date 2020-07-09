import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native'



export default function Inicial(){
    const navigation = useNavigation();

    function navigationToLogin(){
        navigation.navigate('Login')
    }
    function navigationToCadastro(){
        navigation.navigate('Cadastro')
    }

    return(
        
        <View style={styles.container}>
        
            <ImageBackground 
                source={
                require("../../assets/images/imagem-background.png")
                }
                style={{flex: 1}}>

                    <View style={styles.logoContainer}>
                                    <Image source={require("../../assets/logos/logo-turistando.png")} 
                                    style={styles.logo}/>

                        <Text style={styles.name}>Turistando Paraíba</Text>
                        
                    </View>

                    <View style={styles.componentesContainer}>

                        <View style={styles.textContainer}>
                            <Text style={styles.descricaoText}>
                                O app para quem ama turistar!
                            </Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonComecar}onPress={navigationToLogin}>
                                <Text style={styles.comecarText}>
                                    Começar
                                </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.buttonCadastro} onPress={navigationToCadastro}>
                                <Text style={styles.cadastroText}>
                                    Cadastro
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>



            </ImageBackground>

            

        </View>
    );

}

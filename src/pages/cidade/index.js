import * as React from 'react';import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'

export default function Cidade(){

    const navigation = useNavigation();


    return(

        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.topContainer}>

                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.topButton}>
                    
                    <Icon name="menu" size={45} color='#1E90FF' />

                </TouchableOpacity>

                <Text style={styles.titulo}>Atrativos</Text>

            </View>








            




            <View style={styles.imagemContainer}>

                <BackGroundImage source={require("../../assets/images/maxresdefault.jpg")} style={styles.imagemAtrativo}>
                    <Icon name="arrow-right" size={30}/>
                </BackGroundImage>


            </View>










            
            <View style={styles.detalhesContainer}>


                <View style={styles.nomeEEenderecoContainer}>
                    <Text>
                        <Text>
                            Farol de Cabo Branco {"\n"}
                        </Text>

                        <Text>
                            Cabo Branco, João Pessoa {"\n"}
                        </Text>
                    </Text>
                </View>

                
                <View style={styles.buttonsContainer}>


                    <TouchableOpacity style={styles.favoritoButtom}>
                        <Icon name="heart-outline" size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userPerfilButtom}>
                        <Image></Image>
                    </TouchableOpacity>

                </View>



            </View>









            <View style={styles.buttonsNavigationContainer}>

                    
                    <TouchableOpacity style={styles.inciarButtom}>
                            <Icon name="play" size={30} style={styles.iniciarIcon}/>
                            <Text>
                                Iniciar
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.verNoMapaButtom}>
                            <Icon name="map" size={30}/>
                            <Text>
                                Ver no mapa
                            </Text>
                    </TouchableOpacity>

            </View>








            

            <View style={styles.avaliacaoContainer}>
                <View style={styles.avaliacaoStarsContainer}>
                    <Icon name="star-outline" size={40}/>
                    <Icon name="star-outline" size={40}/>
                    <Icon name="star-outline" size={40}/>
                    <Icon name="star-outline" size={40}/>
                    <Icon name="star-outline" size={40}/>
                </View>

                <Text>
                    Avaliacao
                </Text>


            </View>

                



            







        </ScrollView>


    );
}
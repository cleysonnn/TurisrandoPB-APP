import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';

export default function Atrativo(){

    const navigation = useNavigation();


    return(

        <View style={styles.container}>

            <ScrollView >

                <View style={styles.topContainer}>

                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        
                        <Icon name="menu" size={45} color='#1E90FF' />

                    </TouchableOpacity>

                    <Text style={styles.titulo}>Atrativo</Text>

                </View>




                <ImageBackground source={require("../../assets/images/maxresdefault.jpg")} style={styles.imagemAtrativo}>
                    <TouchableOpacity style={styles.nextImageButtom}>
                        <Icon name="arrow-right" size={30} color={'#fff'} />
                    </TouchableOpacity>
                    
                </ImageBackground>

                






                <View style={styles.detalhesContainer}>


                    
                    <Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            Farol de Cabo Branco {"\n"}
                        </Text>

                        <Text style={{fontSize: 19, fontWeight: 'bold', color: '#808080'}}>
                            Cabo Branco, João Pessoa {"\n"}
                        </Text>
                    </Text>
                    

                    






                    <View style={styles.buttonsContainer}>


                        <TouchableOpacity style={styles.verNoMapaButtom}>
                            <Icon name="map" size={30} style={{marginRight: 10}}/>
                            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                                Ver no mapa
                            </Text>
                            
                        </TouchableOpacity>





                        <TouchableOpacity style={styles.favoritoButtom}>
                            <Icon name="heart-outline" size={40}/>
                        </TouchableOpacity>





                        <TouchableOpacity style={styles.favoritoButtom}>
                            <Icon name="check-circle-outline" size={40}/>
                        </TouchableOpacity>

                    </View>

                    



                </View>

                <View style={styles.visualizacoes}>

                        <Icon name="eye" size={30}/>
                        <Text style={{marginLeft: 5, fontSize: 19}}>
                            00
                        </Text>


                </View>








                <View style={styles.avaliacaoContainer}>
                    <View style={styles.avaliacaoStarsContainer}>
                        <Icon name="star-outline" size={50}/>
                        <Icon name="star-outline" size={50}/>
                        <Icon name="star-outline" size={50}/>
                        <Icon name="star-outline" size={50}/>
                        <Icon name="star-outline" size={50}/>
                    </View>

                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                        Avaliar
                    </Text>


                </View>








                <View style={styles.descricaoContainer}>

                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Descrição
                    </Text>

                    <Text style={styles.textoDescricao}>
                        ksajdfksjdnfskljdnfskljdnfskldnfsdnflksjnfnflknlknsadnlaksjdnfjsanlaksjdfnsalkjdfnsdlkjfn
                    </Text>


                </View>









                <View style={styles.informacoesContainer}>


                    <View style={styles.telefoneContainer}>
                        <Icon name="phone-classic" size={30}/>
                        <Text style={{marginHorizontal: 10, fontSize: 19, fontWeight: "bold"}}>
                            (--) ----- ----
                        </Text>
                    </View>





                    <Text style={{fontSize: 19, marginBottom: 10}}>
                        <Text style={{fontWeight: "bold"}}>
                            Aberto:
                        </Text>
                        <Text>
                            o dia todo
                        </Text>
                        

                    </Text>






                    <Text style={{fontSize: 19, marginBottom: 10}}>

                        <Text style={{fontWeight: "bold"}}>
                            Custo:
                        </Text>
                        <Text>
                            Grátis
                        </Text>
                    
                    </Text>

                    


                </View>

                







            </ScrollView>

        </View>






    );
}
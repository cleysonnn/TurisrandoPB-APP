import * as React from 'react';import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'

export default function Home(){

    const navigation = useNavigation();


    return(



        <View style={styles.container}>

            <View style={styles.topContainer}>

                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.topButton}>
                    
                    <Icon name="menu" size={45} color='#1E90FF' />
                
                </TouchableOpacity>

                <Text style={styles.titulo}>Favoritos</Text>

            </View>

            

                <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            marginBottom: 15}}> 
                        
                            Atrativos 
                        
                </Text>




                
                <FlatList contentContainerStyle={styles.atrativosProximosContainer}
                        data={[1,2,3,4,5]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={atrativos => String(atrativos)}
                        renderItem={()=>(
                            <TouchableOpacity style={styles.atrativoProximoButtom}>
                        
                                <Image 
                                source={require('../../assets/images/maxresdefault.jpg')}
                                style={styles.atrativoFotoContainer}/>
                                
                                <View style={styles.atrativoDetalhe}>
                                
                                    <Text>
                                        <Text style={{fontWeight: 'bold',
                                                    fontSize: 17}}>

                                            Farol de C... {"\n"}
                                        
                                        </Text>

                                        <Text>
                                            
                                            Cabo Branco, JP
                                        
                                        </Text>
                                    </Text>
                                
                                    <TouchableOpacity>
                                
                                        <Icon name="heart-outline" size={30}/>
                                
                                    </TouchableOpacity>
                                
                                </View>

                                <View style={styles.avaliacaoStarsContainer}>

                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>

                                </View>

                            
                            </TouchableOpacity>



                        )}

                    

                />









                <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            marginBottom: 15}}> 
                        
                            Roteiros 
                        
                </Text>


                <FlatList contentContainerStyle={styles.atrativosProximosContainer}
                        data={[1,2,3,4,5]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={atrativos => String(atrativos)}
                        renderItem={()=>(
                            <TouchableOpacity style={styles.atrativoProximoButtom}>
                        
                                <Image 
                                source={require('../../assets/images/maxresdefault.jpg')}
                                style={styles.atrativoFotoContainer}/>
                                
                                <View style={styles.atrativoDetalhe}>

                                    <Text>
                                        <Text style={{fontWeight: 'bold',
                                                    fontSize: 17}}>

                                            Farol de C... {"\n"}  
                                        
                                        </Text>

                                        <Text>
                                            
                                            Cabo Branco, JP
                                        
                                        </Text>

                                    </Text>
                                
                                    
                                
                                    <TouchableOpacity>
                                
                                        <Icon name="heart-outline" size={30}/>
                                
                                    </TouchableOpacity>
                                
                                </View>

                                <View style={styles.avaliacaoStarsContainer}>

                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>
                                    <Icon name="star-outline" size={25}/>

                                </View>

                            
                            </TouchableOpacity>



                        )}

                    

                />








            





        </View>












    );
}
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'

export default function Home(){

    const navigation = useNavigation();

    function navigationToFavoritos(){
        navigation.navigate('Favoritos')
    }

    function navigationToAtrativos(){
        navigation.navigate('Atrativos')
    }


    return(

        <ScrollView style={styles.container}>
            

            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.topButton}>
                    
                    <Icon name="menu" size={45} color='#fff' />
                
                </TouchableOpacity>

                <Text style={styles.titleText}>
                    
                    Vamos Turistar!
                </Text>
                
                <TouchableOpacity style={styles.topButton}>
                
                    <Icon name="map" size={45} color='#fff' />
                    
                    <Text style={{
                        fontWeight: 'bold', 
                        color:'#fff' }}>
                    
                        Mapa
                    
                    </Text>
                </TouchableOpacity>

                


            </View>












            <View style={styles.optionsContainer} >

                <TouchableOpacity style={styles.optionButtonContainer}>
                    <Icon
                    name="map-marker"
                    size={30}/>
                    
                    <Text 
                    style={{fontWeight: 'bold'}}>
                        
                        Roteiro
                
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButtonContainer}
                onPress={()=>navigationToFavoritos()}>               
                    <Icon name="heart-circle" size={30} />
                    
                    <Text style={
                        {fontWeight: 'bold'}}>
                        
                        Favoritos
                    
                    </Text>
            
                </TouchableOpacity >

                <TouchableOpacity style={styles.optionButtonContainer}
                onPress={()=>navigationToAtrativos()}>
                    
                    <Icon name="camera-image" size={30} />
                    
                    <Text style={
                        {fontWeight: 'bold'}}>
                        
                        Atrativos
                    
                    </Text>
                </TouchableOpacity>
                

            </View>










            <View style={styles.conteudoContainer}>

                <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            marginBottom: 15}}> 
                        
                            Atrativos perto de você 
                        
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
                        
                            Atrativos mais visitados 
                        
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
                        
                            Atrativos mais bem avalidados 
                        
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

            




        </ScrollView>
    );

}
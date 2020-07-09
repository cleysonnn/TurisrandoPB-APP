import * as React from 'react'; import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

export default function Roteiro() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>





            <View style={styles.topContainer}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={35} color='#1E90FF' />
                </TouchableOpacity>

                <Text style={styles.titulo}>Roteiro</Text>

            </View>






            <View style={styles.conteudoContainer}>

                <Text style={styles.cabecalhoContainer}>
                    Tipo de roteiro
                </Text>

                <View style={styles.caixaContainer}>




                </View>



            </View>





        </View>



    )
}
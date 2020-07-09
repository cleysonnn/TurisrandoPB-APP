import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start'
    },

    topContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20

    },

    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginLeft: 30

    },

    conteudoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoContainer:{
        textAlign: 'justify',
        fontSize: 17,

    },



})
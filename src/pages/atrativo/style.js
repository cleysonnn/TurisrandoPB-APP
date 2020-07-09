import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',

    },

    topContainer:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 5
    },
    
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginLeft: 20,
    },

    imagemAtrativo:{
        height: 250,
        marginBottom: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    nextImageButtom:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center"
    },

    detalhesContainer:{
        padding: 10
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    verNoMapaButtom:{
        padding: 10,
        borderRadius:10,
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
    },

    visualizacoes:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        padding: 20,
    },

    avaliacaoContainer:{
        alignItems: "center",
        padding: 20,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },

    avaliacaoStarsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },

    descricaoContainer:{
        padding: 20,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },

    textoDescricao:{
        fontSize: 19,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#808080',
    },

    informacoesContainer:{
        padding: 10,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,

    },

    telefoneContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },





    


})
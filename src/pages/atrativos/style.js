import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    topContainer:{
        width: 380,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo:{
        marginLeft: 30,
        fontSize: 22,
        color: '#1E90FF',
        fontWeight: 'bold',
    },

    atrativosProximosContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 210,
        marginBottom: 10,

    },

    atrativoFotoContainer:{
        height: 100,
        width: 150,
        borderRadius: 20,
        marginBottom: 5,
    },

    atrativoProximoButtom:{
        height: 190,
        width: 150,
        borderRadius: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },

    atrativoDetalhe:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: 150
        
    },

    enderecoContainer:{
        paddingHorizontal: 10,
        marginBottom: 5,
        width: 150
    },

    avaliacaoStarsContainer:{
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    input: {
        height: 43,
        width: 280,
        color: '#00080A',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    searchBoxContainer:{
        width: 350,
        height: 43,
        borderRadius: 50,
        marginBottom: 30,
        backgroundColor: '#cecece',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
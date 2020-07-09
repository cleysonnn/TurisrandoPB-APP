import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
        

    },

    topContainer: {
        backgroundColor: '#1E90FF',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
    },

    optionsContainer: {
        backgroundColor: '#1E90FF',
        height: 120,
        borderBottomEndRadius: 70,
        borderBottomStartRadius: 70,
        padding: 20,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    optionButtonContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 60,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,

    },

    topButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    recomendadoButtom: {

        borderRadius: 10,
        elevation: 3,
    },

    conteudoContainer:{
        flex:1,
        padding: 20,
        alignItems: 'center',
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
        borderRadius: 10,
        marginBottom: 5,
    },

    atrativoProximoButtom:{
        height: 190,
        width: 150,
        borderRadius: 10,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        elevation: 3,
    },

    atrativoDetalhe:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: 150
        
    },

    avaliacaoStarsContainer:{
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },








});
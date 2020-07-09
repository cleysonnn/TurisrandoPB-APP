import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
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

    input: {
        height: 43,
        color: '#00080A',
        fontSize: 20,
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
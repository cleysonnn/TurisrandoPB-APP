import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'


    },

    cadastroContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%' 
    },

    textTitle:{
        fontSize:40,
        height:200,
        marginTop: 40,
        marginBottom: 20,
        color: '#1E90FF',
        fontWeight:'bold'
        
    },

    input:{
        backgroundColor: '#d4d4d4',
        width: 300,
        height:45,
        marginBottom: 15,
        color: '#222',
        fontSize: 20,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 7,
        paddingLeft:10
    },

    btnSubmit:{
        backgroundColor: '#1E90FF',
        width: 165,
        height:40,
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'

    },

    textSubmit:{
        color: '#fff',
        fontSize: 25,
        fontWeight:'bold',
    }

})
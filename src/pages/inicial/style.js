import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1E90FF'
    },

    name:{
        fontSize: 35,
        fontWeight:'bold',
        color: '#fff',
        marginHorizontal: 50,
        textAlign: 'center',
        marginTop: 10,
    },

    logoContainer:{
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
    },

    logo:{
        height: 200,
        width: 200
    },

    buttonContainer:{
        alignItems: 'center'
    },

    comecarText:{
        color: '#00080A',
        fontSize: 25,
        fontWeight: 'bold'
    },

    buttonComecar:{
        backgroundColor: '#fff', 
        width: 200,
        height:40,
        marginBottom:15,
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center',
    },

    buttonCadastro:{
        backgroundColor: '#fff',
        width: 200,
        height:40,
        borderRadius: 20,
        marginBottom:20,
        justifyContent:'center',
        alignItems: 'center'
    },

    cadastroText:{
        color: '#00080A',
        fontSize: 25,
        fontWeight: 'bold'
    },

    descricaoText:{
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 90,
        marginHorizontal: 50,
        marginTop: 50,
        textAlign: 'center'
        
    }



    
})
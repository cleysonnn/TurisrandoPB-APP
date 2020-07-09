import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        

    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 50,
    },


    LoginComponetesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70
    },


    input: {
        backgroundColor: '#fff',
        width: 300,
        height: 45,
        color: '#00080A',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        borderRadius: 7,
        paddingHorizontal: 10,
        marginTop: 20
    },

    buttomLogin: {
        backgroundColor: '#FFF',
        width: 200,
        height: 40,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    loginText: {
        color: '#00080A',
        fontSize: 25,
        fontWeight: 'bold'
    },

    buttomEsqueciSenha: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15
    }



})
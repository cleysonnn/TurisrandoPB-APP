import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableOpacity,
    StatusBar,
    Animated,
    Keyboard
} from 'react-native';
import styles from './style';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'






export default function Login() {
    const navigation = useNavigation();

    function navigationToHome() {
        navigation.navigate('DrawerPages')
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 10 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 200, y: 200 }));

    useEffect(() => {

        keyboardDidShowListener: Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener: Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([

            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: false
            }),

            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            })

        ]).start();

    }, []);

    function keyboardDidShow() {
        Animated.parallel([

            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
                useNativeDriver: false
            }),

            Animated.timing(logo.y, {
                toValue: 55,
                duration: 100,
                useNativeDriver: false
            })

        ]).start();

    }

    function keyboardDidHide() {

        Animated.parallel([

            Animated.timing(logo.x, {
                toValue: 200,
                duration: 100,
                useNativeDriver: false
            }),

            Animated.timing(logo.y, {
                toValue: 200,
                duration: 100,
                useNativeDriver: false
            })

        ]).start();


    }

    return (
        <KeyboardAvoidingView style={styles.container}>

            <StatusBar barStyle="light-content" />

            <ImageBackground source={require("../../assets/images/imagem-background.png")}
                style={{ flex: 1, alignItems: 'center' }}
            >


                <View style={styles.logoContainer}>


                    <Animated.Image
                        source={require("../../assets/logos/logo-turistando.png")}
                        style={{
                            width: logo.x,
                            height: logo.y
                        }}
                    />

                    <Text style={styles.header}>
                        Turistando Paraíba
                    </Text>

                </View>

                <Animated.View style={[
                    styles.LoginComponetesContainer,
                    {
                        opacity: opacity,
                        transform: [
                            { translateY: offset.y }
                        ]
                    }
                ]}
                >

                    <TextInput
                        style={styles.input}
                        placeholder="Email..."
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorret={false}
                        onChangeText={() => { }} />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha..."
                        returnKeyType="go"
                        autoCorret={false}
                        secureTextEntry={true}

                        onChangeText={() => { }} />

                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.buttomEsqueciSenha}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttomLogin} onPress={navigationToHome}>
                        <Text style={styles.loginText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                </Animated.View>

                <Image source={require('../../assets/images/cropped-logo_slogan-1.png')} style={{width: 150, height: 60}}/>

            </ImageBackground>

        </KeyboardAvoidingView>
    );

}

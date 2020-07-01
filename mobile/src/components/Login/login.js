import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Logo, 
    Container, 
    SubTitle, 
    Title, 
    Inputs,
    ButtonView,
    Button,
    TextButton,
    ErrorMessage
} from './styles';

import api from '../../api/api';

export default function Login() {
    
    const navigation = useNavigation();
    const [email, setEmail] = useState('johnnypcarvalho@gmail.com');
    const [password, setPassword] = useState('1234');
    const [error, setError] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                /* navigation.navigate('Home', { 
                    screen: 'Home', 
                    params: {
                    loggedUser: {user}
                }}); */
                    navigation.navigate('HomeRoute', 
                    {
                        screen: 'Home',
                        params: {
                            user: {user}
                        }
                      });
            }
        })
    }, []);

    async function handleLogin() {

        if (email == 0 || password == 0) {
            setError([])
            console.log(error);
        }

        const response = await api.post('/login', 
        {
            email: email,
            password: password,
        });

        const loggedUser = response.data;
        console.log(loggedUser);
        const { token } = response.data;
        await AsyncStorage.setItem('user', token);

        navigation.navigate('HomeRoute', 
                    {
                    screen: 'Home',
                    params: {
                        actualUser: response.data
                    }
                      });
        

    }

    return (
        <Container>

            <StatusBar
                barStyle="light-content"
                backgroundColor="#454545"
            />
                <Logo source={require('../../assets/logo.png')}/>
                <SubTitle>Log in, Game on</SubTitle>
                <Title>Login</Title>
                <Inputs 
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address" 
                />

                <Inputs
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setPassword} 
                    value={password}
                    placeholder="Digite sua senha" 
                    secureTextEntry={true}/>
                
                {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}

                <ButtonView>
                    <Button onPress={handleLogin} >
                        <TextButton>Login</TextButton>
                    </Button>

                    <Button onPress={() => navigation.navigate('Signup')}>
                        <TextButton>Registrar</TextButton>
                    </Button>
                </ButtonView>
            </Container>
    )
}

Login.navigationOptions = {
    header: null
  }
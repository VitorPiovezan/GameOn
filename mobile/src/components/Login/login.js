import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
    Logo, 
    Container, 
    SubTitle, 
    Title, 
    Inputs,
    ButtonView,
    Button,
    TextButton
} from './styles';

const Login = ({ navigation }) => (
            <Container>

            <StatusBar
                barStyle="light-content"
                backgroundColor="#454545"
            />
                <Logo source={require('../../assets/logo.png')}/>
                <SubTitle>Jogue e Adiquira Elos</SubTitle>
                <Title>Login</Title>
                <Inputs placeholder="Digite seu e-mail" keyboardType="email-address" returnKeyType = {"next"}/>
                <Inputs placeholder="Digite sua senha" secureTextEntry={true}/>

                <ButtonView>
                    <Button onPress={() => navigation.navigate('Home') }
                    >
                        <TextButton>Login</TextButton>
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('Regis') }
                    >
                        <TextButton>Cadastre-se</TextButton>
                    </Button>
                </ButtonView>
            </Container>
);

Login.navigationOptions = {
    header: null
  }
  
  export default Login;
  
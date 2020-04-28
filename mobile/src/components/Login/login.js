import React, { Component } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import axios from 'axios';

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

export default class Login extends Component{  

    state = {
        email: '',
        password: '',
        error: '',
    }

    handleNameChange = (email) => {
        this.setState({ email });
        console.log(this.state.email);
    }

    handlePasswordChange = (password) => {
        this.setState({ password });
        console.log(this.state);
    }

    handleSignupPress = () => {
        this.props.navigation.navigate('Signup');
    }

    handleSignInPress = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0){
            this.setState({ error: 'Errou feio, errou rude meu jovem...' })
            console.log(this.state.error);
        } else {
            this.setState({ error: 'Acho que foi' })
            const response = await api.post('/users', {
                email: this.state.email,
                password: this.state.password,
        });    
    }
}

    render(){  
        return( 
            <Container>

            <StatusBar
                barStyle="light-content"
                backgroundColor="#454545"
            />
                <Logo source={require('../../assets/logo.png')}/>
                <SubTitle>Jogue e Adiquira Elos</SubTitle>
                <Title>Login</Title>
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={this.handleNameChange}
                    value={this.state.email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address" 
                    returnKeyType = {"next"}/>

                <Inputs
                    autoCapitalize='none'
                    onChangeText={this.handlePasswordChange} 
                    value={this.state.password}
                    placeholder="Digite sua senha" 
                    secureTextEntry={true}/>
                
                {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

                <ButtonView>
                    <Button onPress={this.handleSignInPress}>
                        <TextButton>Login</TextButton>
                    </Button>
                    <Button
                        onPress={this.handleSignupPress}
                    >
                        <TextButton>Cadastre-se</TextButton>
                    </Button>
                </ButtonView>
            </Container>
        )}}

Login.navigationOptions = {
    header: null
  }
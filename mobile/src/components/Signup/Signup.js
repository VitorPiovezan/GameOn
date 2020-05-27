import React, { useState } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import axios from 'axios';
import api from '../../api/api'

import {
    Logo, 
    Container, 
    SubTitle, 
    Title, 
    Inputs,
    ButtonViewRegister,
    ButtonRegisterOk,
    TextButton
} from './styles';
import { Root } from 'popup-ui';
import { ErrorMessage } from '../Login/styles';

export default function Signup ({ navigation }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    async function handleSignup() {
        if (userName.length === 0 || email.length === 0 || password.length === 0 || passwordConfirm.length === 0){
            setError('Preencha os dados corretamente');
            console.log(error);
        } else {
            const response = await api.post('/users', {
                username: userName,
                email: email,
                password: password,
            })
            console.log(response.data);
            navigation.navigate('Login', { email: email })
        }
    }

    let errorMessage = null;

    if ( error ) {
        errorMessage = (
            <ErrorMessage>
                {error}
            </ErrorMessage>
        )
    }

    return( 
        <Root>
            <Container>
                <Logo source={require('../../assets/logo.png')}/>
                <SubTitle>Sign in, Game On</SubTitle>
                <Title>Cadastrar-se</Title>

                {errorMessage}

                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setUserName}
                    value={userName}
                    placeholder="Digite seu nome de usuario" 
                    autoFocus={true} 
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address"
                />
                <Inputs 
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}/>


                <Inputs
                    autoCapitalize='none'
                    onChangeText={setPasswordConfirm}
                    value={passwordConfirm}
                    placeholder="Digite a confirmacao"
                    secureTextEntry={true}
                />
                

                <ButtonViewRegister>
                    <ButtonRegisterOk onPress={handleSignup}>
                        <TextButton>Cadastrar-se</TextButton>
                    </ButtonRegisterOk>
                </ButtonViewRegister>

            </Container>
        </Root>
    )
}

Signup.navigationOptions = {
    header: null
  }

/* 
export default class Signup extends Component{  

    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        error: '',
    }
    
    handleNameChange = (username) => {
        this.setState({ username });
    }
    
    handleEmailChange = (email) => {
        this.setState({ email });
    }
    
    handlePasswordChange = (password) => {
        this.setState({password});
    }

    handlePasswordConfirmation = (passwordConfirm) => {
        this.setState({passwordConfirm});
    }

    
    handleSignupPress = async () => {
        if (this.state.username === 0 || this.state.email === 0 || this.state.password === 0){
            this.setState({ error: 'ta faltando coisa ai' });
            console.log(this.state.error);
        } else {
            try {
                const response = await api.post('/users', {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                });
    
                this.setState({ error: 'Deu bom, eu acho' });
                console.log(this.state.error);
    
            } catch (_err) {
                console.log(_err.request)
                this.setState({ error: 'Houve um problema no registro, verifique os dados.' });
                console.log(this.state.error);
            }
        }
    } 
    



    render(){  
        

        Signup.navigationOptions = {
            header: null
          }
           */

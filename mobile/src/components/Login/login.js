import React, { useEffect, useState } from 'react';
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


export default function Login({ navigation }) {
    const [email, setEmail] = useState('teste@teste.com');
    const [password, setPassword] = useState('teste');
    const [error, setError] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Home', {user})
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

        const token = response.data;
        await AsyncStorage.setItem('user', token);

        navigation.navigate('Home', { user: token })

        //await AsyncStorage.setItem('email', id);

        //navigation.navigate('Home');
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

                    <Button /* onPress={navigation.navigate('Signup')} */>
                        <TextButton>Registrar</TextButton>
                    </Button>
                </ButtonView>
            </Container>
    )
}

Login.navigationOptions = {
    header: null
  }

/* export default class Login extends Component{  

    state = {
        email: 'teste@teste.com',
        password: 'test',
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
            console.log(this.state);
            this.props.navigation.navigate('Home'); 
            this.setState({ error: 'Acho que foi' })
            const response = await api.post('/login', {
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

 */
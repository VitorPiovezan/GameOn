import React, { Component } from 'react';
import { StatusBar } from 'react-native';

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
import { Root, Popup } from 'popup-ui';

export default class Regis extends Component{  
    render(){  
        return( 
            <Root><Container>
                <Logo source={require('../../assets/logo.png')}/>
                <SubTitle>Jogue e Adiquira Elos</SubTitle>
                <Title>Cadastrar-se</Title>
                <Inputs 
                    placeholder="Digite seu e-mail" 
                    autoFocus={true} 
                    keyboardType="email-address"
                    returnKeyType = {"next"}
                />
                <Inputs 
                    placeholder="Digite sua senha" 
                    secureTextEntry={true}
                />
                <Inputs placeholder="Digite novamente sua senha" secureTextEntry={true}/>

                <ButtonViewRegister>
                    <ButtonRegisterOk
                     
                     onPress={() =>
                        Popup.show({
                        type: 'Success',
                        title: 'Cadastro Concluído',
                        button: false,
                        textBody: 'Parabéns Jogador, você foi cadastrado com sucesso.',
                        buttontext: 'Logar',
                        callback: () => this.props.navigation.navigate('Home')
                        })}
                        >
                        <TextButton>Cadastrar-se</TextButton>
                    </ButtonRegisterOk>
                </ButtonViewRegister>
            </Container></Root>
        )}}

        Regis.navigationOptions = {
            header: null
          }
          

import React, { Component } from 'react';

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

const Regis = () => (
            <Container>
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
                    <ButtonRegisterOk>
                        <TextButton>Cadastrar-se</TextButton>
                    </ButtonRegisterOk>
                </ButtonViewRegister>
            </Container>
        );

        Regis.navigationOptions = {
            header: null
          }
          
          
          export default Regis;

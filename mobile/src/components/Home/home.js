import React, { Component } from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    Container,
    Card,
    Image,
    Info,
    ButtonStyles,
    Button,
    IconDeslike,
    IconLike,
    Nome,
    InfoProfile,
} from './styles';

import { View, TouchableOpacity, Text } from 'react-native';
import { Root, Popup } from 'popup-ui';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component{  
    render() {  
        return(  

    <Container>
        {/*   <ProgressBarAndroid
            color="white"
           /> */}
        <Card>
            <Image source={require('../../assets/perfil_image.png')} />
            <Info>
                <Nome>Nome do Jogador</Nome>
                <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
            </Info>
        </Card>
        <ButtonStyles>
            <Button color={"#fbae5c"}><IconDeslike source={require('../../assets/tresh_ico_withe.png')} /></Button>
            <Button color={"#c48eff"}><IconLike source={require('../../assets/controll_ico_white.png')} /></Button>
        </ButtonStyles>
    </Container>
)  
    }  
}  
 

/*   <Container>
            <Card>
                <Image source={require('../../assets/logo.png')}/>
                <Info>
                    <Nome>JohnnBZ</Nome>
                    <Info>Jogo LOL e Dota, sou gay duas vezes;</Info>
                    <ButtonStyles>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    </ButtonStyles>
                </Info>
            </Card>
       </Container>      */
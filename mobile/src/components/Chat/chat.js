import React, { Component } from 'react';


import {
    ContainerChat,
    InputChat,
    ViewChat,
    MsgBoxUser,
    MsgBoxProfile,
    Img,
    TextBox,
    TextBoxProfile,
    ImgProfile,
    UserMatch,
    ImgUser,
    NameUser,
    UserMathButton,
    ViewGames
} from '../Home/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

export default class Chat extends Component{  
    render(){  
        return( 
    <ContainerChat>
    <ViewGames>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <UserMathButton>
            <UserMatch>
                <ImgUser source={require('../../assets/game_exemple2.jpg')}/>
                <NameUser>CSGO</NameUser>
            </UserMatch>
        </UserMathButton>

        <UserMathButton>
            <UserMatch>
                <ImgUser source={require('../../assets/game_exemple1.jpg')}/>
                <NameUser>LOL</NameUser>
            </UserMatch>
        </UserMathButton>

        <UserMathButton>    
            <UserMatch>
                <ImgUser source={require('../../assets/game_exemple3.jpg')}/>
                <NameUser>Dota</NameUser>
            </UserMatch>
        </UserMathButton>

        <UserMathButton>                    
            <UserMatch>
                <ImgUser source={require('../../assets/game_exemple4.jpg')}/>
                <NameUser>Celeste</NameUser>
            </UserMatch>
        </UserMathButton> 
        </ScrollView>                                 
    </ViewGames>
   
   <ViewChat>
   <ScrollView scrollToEnd={true} showsVerticalScrollIndicator={false} >
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>Aqui é o nosso chat!</TextBox>
       </MsgBoxUser>
       <MsgBoxProfile>  
            <TextBoxProfile>Show de bola!!</TextBoxProfile>
            <ImgProfile source={require('../../assets/perfil_image.png')}/> 
       </MsgBoxProfile>
       <MsgBoxProfile>  
            <TextBoxProfile>Quer Jogar Algo?</TextBoxProfile>
            <ImgProfile source={require('../../assets/perfil_image.png')}/> 
       </MsgBoxProfile>
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>Bora</TextBox>
       </MsgBoxUser>
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>Tá com o Lol Atualizado?</TextBox>
       </MsgBoxUser>
       <MsgBoxProfile>  
            <TextBoxProfile>Já tô logado Bro</TextBoxProfile>
            <ImgProfile source={require('../../assets/perfil_image.png')}/> 
       </MsgBoxProfile>
       <MsgBoxProfile>  
            <TextBoxProfile>Entra ai!!!</TextBoxProfile>
            <ImgProfile source={require('../../assets/perfil_image.png')}/> 
       </MsgBoxProfile>
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>Estou entrando, guenta ai</TextBox>
       </MsgBoxUser>
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>Qual seu Nick??</TextBox>
       </MsgBoxUser>
       <MsgBoxProfile>  
            <TextBoxProfile>GeraldaoRX</TextBoxProfile>
            <ImgProfile source={require('../../assets/perfil_image.png')}/> 
       </MsgBoxProfile>
       <MsgBoxUser>
            <Img source={require('../../assets/perfil_exemple3.jpeg')}/>   
            <TextBox>hã.. ok hahaha.</TextBox>
       </MsgBoxUser>
    </ScrollView>
   </ViewChat>  

   <InputChat placeholder="Digite sua mensagem..." />


    
</ContainerChat> 
)
        }
    }

const styles = StyleSheet.create({
    viewchatkey: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})

Chat.navigationOptions = {
    headerTitle: 'Jorge',
    headerStyle: {
        backgroundColor: '#303030',
        color: "#fff"
    },
    headerTitleStyle:{
        color: "#fff",
        fontWeight: 'bold'
            
    },
    headerTintColor: '#fff',
      
  }
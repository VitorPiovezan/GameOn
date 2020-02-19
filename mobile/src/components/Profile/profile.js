import React, { Component } from 'react';


import { UserMatchTouch } from '../Home/styles';
import { ContainerProfile, ViewHeaderProfile, ImgProfileConfig, IconsProfile, ButtonProfile, ViewConfigsProfile, TextBoxNameProfile, ViewTextProfile, ViewContentProfile, TextBoxContentProfile, ViewGamesProfile, ImgUserProfile, NameUserProfile, ViewRodape, TextBoxRodape, ViewButtonOut, TextBoxButtonOut, ButtonOut } from "./styles_profile";
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';  

export default class Profile extends Component{  
    render(){  
        return( 
       <ContainerProfile>
            <ViewHeaderProfile>
                <ViewConfigsProfile>
                    <ButtonProfile onPress={() => this.props.navigation.navigate('Config') }>
                        <IconsProfile source={require('../../assets/configIcon.png')}/>
                    </ButtonProfile>
                    <ImgProfileConfig source={require('../../assets/perfil_image.png')}/>
                    <ButtonProfile onPress={() => this.props.navigation.navigate('EditProfile') } >
                        <IconsProfile source={require('../../assets/perfilIcon.png')}/>
                    </ButtonProfile>
                </ViewConfigsProfile>

                <ViewTextProfile>
                    <TextBoxNameProfile>Robson Paulino</TextBoxNameProfile>
                </ViewTextProfile>
            </ViewHeaderProfile>

            <ViewContentProfile>
                <TextBoxContentProfile>Seus Jogos</TextBoxContentProfile>

                    <ViewGamesProfile>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        
                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple2.jpg')}/>
                                <NameUserProfile>CSGO</NameUserProfile>
                            </UserMatchTouch>

                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple1.jpg')}/>
                                <NameUserProfile>LOL</NameUserProfile>
                            </UserMatchTouch>
  
                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple3.jpg')}/>
                                <NameUserProfile>Dota</NameUserProfile>
                            </UserMatchTouch>
                   
                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatchTouch>

                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatchTouch>

                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatchTouch>

                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatchTouch>

                            <UserMatchTouch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatchTouch>
                        </ScrollView>                                 
                    </ViewGamesProfile> 
            </ViewContentProfile>
                <ButtonOut  onPress={() => this.props.navigation.navigate('Login') } >
                    <ViewButtonOut>
                        <TextBoxButtonOut>Sair</TextBoxButtonOut>
                    </ViewButtonOut>
                </ButtonOut>
                <ViewRodape>
                    <TextBoxRodape>Feito com ♡ por Cubisme Design Team</TextBoxRodape>
                    <TextBoxRodape>Version: 0.3</TextBoxRodape>
                </ViewRodape>

       </ContainerProfile>    
  
  )  
}  
} 

Profile.navigationOptions = {
    header: null
  }
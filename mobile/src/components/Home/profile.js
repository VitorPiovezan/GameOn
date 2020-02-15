import React, { Component } from 'react';


import { UserMatch } from '../Home/styles';
import { ContainerProfile, ViewHeaderProfile, ImgProfileConfig, IconsProfile, ButtonProfile, ViewConfigsProfile, TextBoxNameProfile, ViewTextProfile, ViewContentProfile, TextBoxContentProfile, ViewGamesProfile, ImgUserProfile, NameUserProfile, ViewRodape, TextBoxRodape, ViewButtonOut, TextBoxButtonOut, ButtonOut } from "./styles_profile";
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => (
       <ContainerProfile>
            <ViewHeaderProfile>
                <ViewConfigsProfile>
                    <ButtonProfile onPress={() => navigation.navigate('Config') }>
                        <IconsProfile source={require('../../assets/configIcon.png')}/>
                    </ButtonProfile>
                    <ImgProfileConfig source={require('../../assets/perfil_image.png')}/>
                    <ButtonProfile onPress={() => navigation.navigate('EditProfile') } >
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
                        
                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple2.jpg')}/>
                                <NameUserProfile>CSGO</NameUserProfile>
                            </UserMatch>

                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple1.jpg')}/>
                                <NameUserProfile>LOL</NameUserProfile>
                            </UserMatch>
  
                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple3.jpg')}/>
                                <NameUserProfile>Dota</NameUserProfile>
                            </UserMatch>
                   
                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatch>

                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatch>

                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatch>

                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatch>

                            <UserMatch>
                                <ImgUserProfile source={require('../../assets/game_exemple4.jpg')}/>
                                <NameUserProfile>Celeste</NameUserProfile>
                            </UserMatch>
                        </ScrollView>                                 
                    </ViewGamesProfile> 
            </ViewContentProfile>
                <ButtonOut  onPress={() => navigation.navigate('Login') } >
                    <ViewButtonOut>
                        <TextBoxButtonOut>Sair</TextBoxButtonOut>
                    </ViewButtonOut>
                </ButtonOut>
                <ViewRodape>
                    <TextBoxRodape>Feito com ♡ por Cubisme Design Team</TextBoxRodape>
                    <TextBoxRodape>Version: 0.3</TextBoxRodape>
                </ViewRodape>

       </ContainerProfile>     
);
  

  export default Profile;

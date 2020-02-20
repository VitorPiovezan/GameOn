import React, { Component } from 'react';


import { UserMatchTouch, Card, Image, Info, InfoProfile, Nome } from '../Home/styles';
import { ContainerProfile, ViewHeaderProfile, ImgProfileConfig, IconsProfile, ButtonProfile, ViewConfigsProfile, TextBoxNameProfile, ViewTextProfile, ViewContentProfile, TextBoxContentProfile, ViewGamesProfile, ImgUserProfile, NameUserProfile, ViewRodape, TextBoxRodape, ViewButtonOut, TextBoxButtonOut, ButtonOut } from "./styles_profile";
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, TouchableOpacity } from 'react-native';

export default class Profile extends Component{  
    state = {
        isVisible: false, //state of modal default false
    }

    setModalVisible(visible) {
        this.setState({isVisible: visible});
      }

    render(){  
        return( 
       <ContainerProfile>

       
            <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}>
                <TouchableOpacity 
                        activeOpacity = {0}

                        style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}

                        onPress={() => {
                            this.setModalVisible(!this.state.isVisible);
                        }}>
                    <Card>
                    <Image source={require('../../assets/perfil_image.png')} />
                        <Info>
                            <Nome>Nome do Jogador</Nome>
                            <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
                            
                            <UserMatchTouch title="Click To Open Modal"
                                            onPress={() => {
                                                this.setModalVisible(!this.state.isVisible);
                                            }}>
                                <ImgUserProfile source={require('../../assets/game_exemple2.jpg')}/>
                                <NameUserProfile>CSGO</NameUserProfile>
                            </UserMatchTouch>

                        </Info>
                    </Card>   
                </TouchableOpacity>                                          
        </Modal>
       

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
                        
                            <UserMatchTouch title="Click To Open Modal"
                                            onPress={() => {
                                                this.setState({ isVisible: true });
                                            }}>
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
import React, { useState, useEffect } from 'react';
//import ImagePicker from 'react-native-image-picker';
import { UserMatchTouch} from '../Home/styles';
import { ContainerProfile, InfoModalView, InfoModal, ButtonModal, TextModal, NomeModal, ImageModal, CardModal, ViewHeaderProfile, ImgProfileConfig, IconsProfile, ButtonProfile, ViewConfigsProfile, TextBoxNameProfile, ViewTextProfile, ViewContentProfile, TextBoxContentProfile, ViewGamesProfile, ImgUserProfile, NameUserProfile, ViewRodape, TextBoxRodape, ViewButtonOut, TextBoxButtonOut, ButtonOut } from "./styles_profile";
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, TouchableOpacity, Linking} from 'react-native';

export default function Profile({ navigation }) {  

    const [visibility, setVisibility] = useState();
 
        return( 
       <ContainerProfile>

          {/*   <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
                console.log('Modareacl has been closed.');
            }}>
                <TouchableOpacity 
                        activeOpacity = {1}

                        style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}

                        onPress={() => {
                            this.setModalVisible(!this.state.isVisible);
                        }}>
                    <CardModal activeOpacity = {1}>
                    <ImageModal source={require('../../assets/csgo_image.jpeg')} />
                        <InfoModalView>
                            <NomeModal>Counter Strike: Global Offensive</NomeModal>
                            <InfoModal>Counter-Strike: Global Offensive (CS:GO) é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia. </InfoModal>
                            <ButtonModal onPress={ ()=>{ Linking.openURL('https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?l=portuguese')}} >
                                <TextModal>Saiba Mais</TextModal>
                            </ButtonModal>
                        </InfoModalView>
                    </CardModal> 
                </TouchableOpacity>                                          
        </Modal>
        */}

            <ViewHeaderProfile>
                <ViewConfigsProfile>
                    <ButtonProfile onPress={() => console.log(loggedUser) }>
                        <IconsProfile source={require('../../assets/configIcon.png')}/>
                    </ButtonProfile>
                    <ImgProfileConfig />
                    <ButtonProfile onPress={() => navigation.navigate('EditProfile') } >
                        <IconsProfile source={require('../../assets/perfilIcon.png')}/>
                    </ButtonProfile>
                </ViewConfigsProfile>

                <ViewTextProfile>
                    <TextBoxNameProfile></TextBoxNameProfile>
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

Profile.navigationOptions = {
    header: null
  }
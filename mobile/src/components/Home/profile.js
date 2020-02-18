import React, { Component } from 'react';


import { UserMatchTouch } from '../Home/styles';
import { ContainerProfile, ViewHeaderProfile, ImgProfileConfig, IconsProfile, ButtonProfile, ViewConfigsProfile, TextBoxNameProfile, ViewTextProfile, ViewContentProfile, TextBoxContentProfile, ViewGamesProfile, ImgUserProfile, NameUserProfile, ViewRodape, TextBoxRodape, ViewButtonOut, TextBoxButtonOut, ButtonOut } from "./styles_profile";
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, Text } from 'react-native';

/* class ModalExample extends Component {
    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    } */


    const Profile = ({ navigation }) => (
       <ContainerProfile>

           {/* <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ContainerProfile style={{marginTop: 22}}>
            <ContainerProfile>
              <Text>Hello World!</Text>

              <UserMatchTouch
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </UserMatchTouch>
            </ContainerProfile>
          </ContainerProfile>
        </Modal> */}

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
                        
                            <UserMatchTouch /* onPress={() => {
                                            this.setModalVisible(true);
                                            }} */>
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
);/* }; */
                                        

  export default Profile;

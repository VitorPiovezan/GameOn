import React, { Component } from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {
    ContainerFeed,
    ViewMatch,
    UserMatch,
    ImgUser,
    NameUser,
    UserMathButton,
    TextGames,
    ViewChatsUsers,
    TextMessages,
    ChatUsers,
    ImgChatUser,
    TextBoxChatUser,
    TextBoxChatUserLastMassage,
    TextBoxChatUserName,
    ButtonChatUser
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const Feed = ({ navigation }) => (
        <ContainerFeed>
        <TextGames>Matchs recentes</TextGames>
            <ViewMatch>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <UserMathButton onPress={() => navigation.navigate('Chat') }>
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_image.png')}/>
                        <NameUser>João</NameUser>
                    </UserMatch>
                </UserMathButton>

                <UserMathButton>
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple1.jpeg')}/>
                        <NameUser>Claber</NameUser>
                    </UserMatch>
                </UserMathButton>

                <UserMathButton>    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple2.jpeg')}/>
                        <NameUser>Robson</NameUser>
                    </UserMatch>
                </UserMathButton>

                <UserMathButton>                    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple3.jpeg')}/>
                        <NameUser>Jorge</NameUser>
                    </UserMatch>
                </UserMathButton>

                <UserMathButton>                    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple3.jpeg')}/>
                        <NameUser>Jorge</NameUser>
                    </UserMatch>
                </UserMathButton>                 

                <UserMathButton>                    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple3.jpeg')}/>
                        <NameUser>Jorge</NameUser>
                    </UserMatch>
                </UserMathButton>                 

                <UserMathButton>                    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple3.jpeg')}/>
                        <NameUser>Jorge</NameUser>
                    </UserMatch>
                </UserMathButton>                 

                <UserMathButton>                    
                    <UserMatch>
                        <ImgUser source={require('../../assets/perfil_exemple3.jpeg')}/>
                        <NameUser>Claudio</NameUser>
                    </UserMatch>
                </UserMathButton> 
                </ScrollView>                                 
            </ViewMatch>
            
            <TextMessages>Mensagens</TextMessages>            
            <ViewChatsUsers>
                <ScrollView width={'100%'}>
                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple3.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Jorge</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple1.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Cleber</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple2.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Robson</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_image.png')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>João</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple2.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Romarinho</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple1.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Josiel</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple3.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Roberval</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple2.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Claudio</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple1.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Amarindo</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple3.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Roberval</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>

                    <ButtonChatUser onPress={() => navigation.navigate('Chat') }>
                        <ChatUsers>
                            <ImgChatUser source={require('../../assets/perfil_exemple2.jpeg')}/>   
                            <TextBoxChatUser>

                            <TextBoxChatUserName>Jusicleiton</TextBoxChatUserName>
                            <TextBoxChatUserLastMassage>Aqui é a ultima mensagem enviada!</TextBoxChatUserLastMassage>
                            </TextBoxChatUser>
                        </ChatUsers>
                    </ButtonChatUser>
                </ScrollView> 
            </ViewChatsUsers>

        </ContainerFeed> 
);

Feed.navigationOptions = {
    header: null
  }
  

const styles = StyleSheet.create({
    viewchatkey: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})

  
  export default Feed;

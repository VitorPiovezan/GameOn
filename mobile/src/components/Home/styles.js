import styled from 'styled-components/native';

// Home.js styles

export const Container = styled.View`
    flex: 1;
    background-color: #454545;
    align-items: center;
    justify-content: space-between;
`
export const CardsContainer = styled.View`
    flex: 1;
    align-self: stretch;
    justify-content: center;
    max-height: 700px;
`

export const EmptyText = styled.Text`
   align-self: center;
   color: #999;
   font-size: 16px;
   font-weight: bold;
`

export const ContainerHome = styled.View`
    flex: 1;
    background-color: #454545;
    justify-content: center;
    align-items: center;
`

export const Card = styled.View`
    align-self: center;
    border-width: 1;
    borderColor: #DDD;
    overflow: hidden;
    position: absolute;
    width: 90%;
    height:90%;
    background-color: #505050;
    border-radius: 8px;
`
export const Image = styled.Image`
    width: 100%;
    height: 65%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`


export const Nome = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: 24;
    padding: 3px 0px 5px 10px;

`
export const Bio = styled.Text `
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    padding: 3px 0px 5px 10px;
`

export const BioView = styled.ScrollView `
    margin: 0 10px;
    border-radius: 7px;
    background-color: #606060;
    height: 100%;
`

export const IconLike = styled.Image`
    width: 40px;
    height: 20px;
`
export const IconDeslike = styled.Image`
    width: 20px;
    height: 25px;
`

export const ViewHome = styled.View`
    flex: auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const ContainerIcons = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`

export const ButtonContainer = styled.View`
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    padding: 5%;
`
export const LikeButton = styled.TouchableOpacity`
    background-color: #6b9235;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 42px;
    border-radius: 7px;
`
export const DislikeButton = styled.TouchableOpacity`
    background-color: #d93436;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 42px;
    border-radius: 7px;
`

//End of home.js styles --------------------

export const IconMath = styled.Image`

`
export const InfoProfile = styled.Text`
    color: #fff;
    font-size: 16;
    padding: 3px 0px 5px 10px;
`
export const Info = styled.View`

`
export const TextExemple = styled.Text`
    font-weight: bold;
    font-size: 24;
    color: white;
`

export const InputChat = styled.TextInput`
    height: 50px;
    width: 95%;
    border-radius: 7px;
    background-color: #fff;
    padding: 15px;
    font-size: 16;
    position: absolute;
    bottom: 10;
    
`

export const ViewChat = styled.View`
    background-color: #303030;
    border-radius: 7px;
    width: 95%;
    max-height: 79%;
    min-height: 50%;
    margin-bottom: 10px;
    padding: 10px 0 10px 0;
`

export const MsgBoxUser = styled.View`
    margin: 0px 10px 10px 10px;
    background-color: #aaa;
    height: 50px;
    flex-direction: row;
    align-items: center;
    border-radius: 7;
    padding: 10px;
`

export const MsgBoxProfile = styled.View`
    margin: 0px 10px 10px 10px;
    background-color: #505050;
    height: 50px;
    flex-direction: row;
    align-items: center;
    border-radius: 7;
    padding: 10px;
    justify-content: flex-end;
`

export const Img = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100;
`
export const ImgProfile = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100;
`

export const TextBox = styled.Text`
    padding: 10px;
    color: #000;
`

export const TextBoxProfile = styled.Text`
    padding: 10px;
    color: #fff;
`

export const ContainerChat = styled.View`
    align-items: center;
    background-color: #454545;
    flex:auto;
`

export const ContainerFeed = styled.View`
    align-items: flex-start;
    background-color: #454545;
    flex: auto;
`

export const ViewMatch = styled.View`
    width: 95%;
    height: 75px;
    flex-direction: row;
    padding: 5px;
    background-color: #303030;
    border-radius: 7;
    margin: 10px 10px 10px 10px;
`
export const UserMatch = styled.View`
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    
`

export const UserMatchTouch = styled.TouchableOpacity`
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    
`

export const ImgUser = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 100;
`
export const NameUser = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 12;
`

export const UserMathButton = styled.TouchableOpacity`
    margin-top: -7px;
`

export const ViewGames = styled.View`
    width: 95%;
    height: 75px;
    flex-direction: row;
    padding: 5px;
    background-color: #303030;
    border-radius: 7;
    margin: 10px;
`
export const TextGames = styled.Text`
    font-weight: bold;
    font-size: 20;
    color: #fff;
    padding: 20px 0px 0px 12px;
`
export const TextMessages = styled.Text`
    font-weight: bold;
    font-size: 20;
    color: #fff;
    padding: 0px 0px 10px 12px;
`
export const ViewChatsUsers = styled.View`
    
    width: 100%;
    height: 100%;
    align-items: flex-start;
`
export const ChatUsers = styled.View`
    border-bottom-width: 1;
    border-color: #303030;
    width: 100%;
    height: 90px;   
    flex-direction: row;
    align-items: center;
    padding: 10px;
`
export const ImgChatUser = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 100;
`

export const TextBoxChatUser = styled.View`
    justify-content: center;
`

export const TextBoxChatUserName = styled.Text`
    padding: 10px 0 0 10px;
    color: #fff;
    font-weight: bold;
    font-size: 20;
`
export const TextBoxChatUserLastMassage = styled.Text`
    padding: 3px 0 10px 10px;
    color: #fff;
    font-size: 16;
`
export const ButtonChatUser = styled.TouchableOpacity`
    width: 100%;
`






import styled from 'styled-components/native';

export const UserCard = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 
export const UserImage = styled.Image`
    width: 40%;
    justify-content: center;
    align-items: center;
`

export const UserName = styled.Text`
    margin-top: 5px;
    font-size: 20px;   
    font-weight: bold;
`

export const UserDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
`

export const ButtonView = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const LikeButton = styled.TouchableOpacity`
    width: 40%;
    background-color: springgreen;
`
export const DislikeButton = styled.TouchableOpacity`
    width: 40%;
    background-color: salmon;
`
export const TextButton = styled.Text `
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`
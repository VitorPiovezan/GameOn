import React from 'react';
import {
    UserCard,
    UserName,
    ButtonView,
    LikeButton,
    DislikeButton,
    //UserImage
} from './styles'



const User = (props) => {
    return (
        <UserCard>
            //Adicionar componente de imagem e descobrir o que fazer
            //com as imagens
            {/* <UserImage>
            </UserImage> */}
            <UserName>
                {props.username}
            </UserName>
            <UserDescription>
                {props.userdescription}
            </UserDescription>
            <ButtonView>
                <LikeButton onPress={props.like}>
                    <Text>That's what she said</Text>
                </LikeButton>
                <DislikeButton onPress={props.dislike}>
                    <Text>RECICLOPS</Text>
                </DislikeButton>
            </ButtonView>
        </UserCard>
    );
}

export default User;
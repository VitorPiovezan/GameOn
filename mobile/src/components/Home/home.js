import React, { useEffect, useState, useContext } from 'react';
import { Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Bio,
  BioView,
  BottomView,
  CardsContainer,
  LikeButton,
  DislikeButton,
  ButtonContainer,
  Container,
  Card, 
  Image,
  Nome,
  EmptyText
} from './styles';

import api from '../../api/api';

export default function Home ({ route, navigation }) {
  
  const { id } = (route.params.actualUser);
  console.log(id);
  const [loggedUser, setLoggedUser] = useState({});
  const [users, setUsers] = useState([]);
  //const [matchUser, setMatchUser] = useState(null);
  
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users', {
        headers: {
          user: id,
        }
      })
      console.log(response.data);
      setUsers(response.data);
      
    }

    loadUsers();
  }, [id]);

  async function handleLike( loggedId, targetId ) {

    const response = api.post('/like', 
    {
      userId: loggedId,
      targetId: targetId
    });

    console.log(loggedId, targetId);
    const [user, ...rest] = users;
    
    //atualiza o state de usuarios apresentados na busca
    setUsers(rest);
  }



  return (
    <Container>
      <CardsContainer> 
        {
          users.length === 0
          ? <EmptyText>Vazio :(</EmptyText>
          : (
            users.map( (user, index) => (
              <Card style={{zIndex: users.length - index }}>
                <Image source={{}}/>
                  <Nome>{user.Username}</Nome>
                  <BioView showsVerticalScrollIndicator={false}>
                    <Bio>{user.Bio} </Bio>
                  </BioView>
                  <ButtonContainer>
                  <LikeButton onPress={ () => handleLike(id, user.ID)}>
                    <Text style={{fontWeight: 'bold'}}>OH YEEAH!</Text>
                  </LikeButton>
                  <DislikeButton>
                    <Text style={{fontWeight: 'bold'}}>GOD, NO!</Text>
                  </DislikeButton>
                </ButtonContainer>
              </Card>
            ))
          )
        }
      </CardsContainer>
    </Container>
  )
}

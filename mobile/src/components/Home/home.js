import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  TextoTeste
} from './styles';

import api from '../../api/api';

//import Users from '../User/Users';

export default function Home ({ navigation }) {

  //puxar id do user atual da navegacao
  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);
  const [matchUser, setMatchUser] = useState(null);
  
  /* useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users')
      setUsers(response.data);
    }

    loadUsers();
  } ); */
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }

    loadUsers();
  })


  return (
    <Container>
      <Text>Teste</Text>
      <FlatList 
        data={users}
        renderItem={({item}) => <TextoTeste>{item.username}</TextoTeste> }
      >
      </FlatList>
    </Container>
  )
}






/* export default class Home extends React.Component {
  
  state = {
    thereAreUsers : false
  }

  componentDidMount() {
    //busca dos dados na api backend
    api.get('/users')
    .then(( response ) => {
      console.log("rodou");
      console.log(response.data);
    })
    .catch(( error ) => {
      console.log(error);
    })
    .then( () => {
      console.log("passou");
    })

    } 
    
  likeHandler = (event, userId) => {
    //codigo para adicionar o like na array de likes e salvar no banco de dados
    const userLiked = userId;
    }


    render(){
    //testa a existencia de usuarios para interagir

    //seria o componentDidUpdate, ou o useEffect, com hooks

    return (
    <Container>
      <Text>texto</Text>
    </Container>
    //Esse componente utilizara hooks de efeito: useEffect()
    )
  }
} */
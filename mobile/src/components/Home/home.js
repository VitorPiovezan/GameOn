import React, { Component } from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
} from './styles';

import api from '../../api/api';

//import Users from '../User/Users';

export default class Home extends React.Component {
  
  state = {
    thereAreUsers : false
  }

  componentDidMount() {
    //busca dos dados na api backend
    api.get('/users')
    .then(( response ) => {
      console.log(response.data);
    })
    .catch(( error ) => {
      console.log(error);
    })
    .then( () => {
      console.log("rodou");
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
      <Text>teste132</Text>
    </Container>
    //Esse componente utilizara hooks de efeito: useEffect()
    )
  }
}
import React, { Component } from 'react';

import {
    Container,
} from '../Home/styles';

export default class Config extends Component{  
    render(){  
        return( 
       <Container>
       </Container>     
)}}
Config.navigationOptions = {
    headerTitle: 'Configurações',
    headerStyle: {
        backgroundColor: '#303030',
        color: "#fff"
    },
    headerTitleStyle:{
        color: "#fff",
        fontWeight: 'bold'
            
    },
    headerTintColor: '#fff',
      
  }
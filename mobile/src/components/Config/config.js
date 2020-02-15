import React, { Component } from 'react';

import {
    Container,
} from '../Home/styles';

const Config = ({ navigation }) => (
       <Container>
       </Container>     
);
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
  export default Config;
import React, { Component } from 'react';

import {
    Container,
} from '../Home/styles';

const EditProfile = ({ navigation }) => (
       <Container>
       </Container>     
);
EditProfile.navigationOptions = {
    headerTitle: 'Editar Perfil',
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
  export default EditProfile;
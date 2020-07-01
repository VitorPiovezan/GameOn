import React, { createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

import api from '../api/api';

const Context = createContext();

function AuthProvider({ children }) {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
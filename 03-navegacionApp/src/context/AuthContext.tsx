
import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir cómo luce, qué información tendre
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a React cómo luce y qué expone context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: {children: any}) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'});
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}
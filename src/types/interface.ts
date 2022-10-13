import { Loading } from "./type";

export interface AuthState {
    error: string | unknown;
    isAuth: boolean | string;
    isRegister: boolean
    loading: Loading;
    user: any;
};

export interface UserState {
    error: boolean;
    loading: Loading;
    history: null | any
}

export interface loginData {
    email: string;
    password: string;
};

export interface registerData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    secretWord: string;
    agreement: boolean;
    phone: string
}
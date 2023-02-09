import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {AuthFormStyled} from "./styles";

interface AuthFormProps {
    auth: () => void;
    user: string;
    setUser: (e: string) => void;
}
const AuthForm = ({auth, user, setUser}: AuthFormProps) => {
    // const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <AuthFormStyled>
            <TextField
                id="outlined-basic"
                label="User"
                variant="outlined"
                onChange={(e) => setUser(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={() => {
                    if (localStorage[user]) {
                        const getUser = JSON.parse(localStorage[user]);
                        console.log(getUser);
                        if (getUser.login === user && getUser.password === password) {
                            auth();
                        } else {
                            console.log('Не верный пароль')
                        }
                    } else {
                        console.log('Пользователя нет в системе');
                        localStorage.setItem(user, JSON.stringify({login: user, password: password, message: ''}));
                        auth();
                    }
                }}
            >
                Войти
            </Button>
        </AuthFormStyled>
    );
}

export default AuthForm
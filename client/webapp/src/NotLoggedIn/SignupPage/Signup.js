import React, {useState} from 'react';
import './Signup.css'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/auth";
import { useAuth, useNotification } from "../../hooks";
import { isValidEmail } from "../../utils/helper";

const theme = createTheme();

export default function SignUp(props) {
    const navigate = useNavigate();
    const { authInfo } = useAuth();
    const { isLoggedIn } = authInfo;
    const { updateNotification } = useNotification();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name')
        const password = data.get('password')
        const email = data.get('email')
        const data2 = {name:name, password:password, email:email}
        const { ok, error } = validateUserInfo(data2);

        if (!ok) return updateNotification("error", error);

        const response = await createUser(data2);
        if (response.error) return console.log(response.error);

        axios.post('user/create')
            .then(response => {
                console.log(response)
                navigate('/home')
            })
            .catch(err => {
            console.log(err)
            })

        navigate("/auth/verification", {
            state: { user: response.user },
            replace: true,
        });
        navigate('/home');
    };

    const validateUserInfo = ({ name, email, password }) => {
        const isValidName = /^[a-z A-Z]+$/;

        if (!name) return { ok: false, error: "Name is missing!" };
        if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

        if (!email) return { ok: false, error: "Email is missing!" };
        if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

        if (!password) return { ok: false, error: "Password is missing!" };
        if (password.length < 8)
            return { ok: false, error: "Password must be 8 characters long!" };

        return { ok: true };
    };

    useEffect(() => {
        // we want to move our user to somewhere else
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn]);


    return (
        <div className='signupbcg'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#13315c' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Company Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                        <Link href="/client/webapp/public" variant="body2">
                            {"Already have an account? Sign-in"}
                        </Link>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}
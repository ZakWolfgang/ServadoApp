import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css'
import {isValidEmail} from "../utils/helper";
import {useNavigate} from "react-router-dom";
import {useAuth, useNotification} from "../hooks";

const theme = createTheme();

export default function SignIn(props) {

    const navigate = useNavigate();
    const { updateNotification } = useNotification();
    const { handleLogin, authInfo } = useAuth();
    const { isPending, isLoggedIn } = authInfo;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email')
        const password = data.get('password')
        const data2 = {password:password, email:email}
        const { ok, error } = validateUserInfo(data2);

        if (!ok) return updateNotification("error", error);
        handleLogin(data.get('email'), data.get('password'));
    };

    const validateUserInfo = ({ email, password }) => {
        if (!email.trim()) return { ok: false, error: "Email is missing!" };
        if (!isValidEmail(email)) return { ok: false, error: "Invalid email!" };

        if (!password.trim()) return { ok: false, error: "Password is missing!" };
        if (password.length < 8)
            return { ok: false, error: "Password must be 8 characters long!" };

        return { ok: true };
    };

    return (
        <div className='loginbcg'>
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({ name: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        const response = await fetch("http://localhost:3000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },

            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoLocation })
        })
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
        if (json.success) {
            navigate("/")
        }

    };
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <div>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                            onChange={onChange}
                            autoFocus
                            value={credentials.email}
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
                            onChange={onChange}
                            value={credentials.password}
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/createuser" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Login

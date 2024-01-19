import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';


const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geoLocation: "" })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = data.get('name')
        const response = await fetch("http://localhost:3000/api/createuser", {
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
            alert(`${user} welcome to rocket plates`)
        }


        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        //     name: data.get('name'),
        //     address: data.get('address')
        // });

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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    value={credentials.name}
                                    fullWidth
                                    id="Name"
                                    label="Full Name"
                                    autoFocus
                                    onChange={onChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={credentials.email}
                                    autoComplete="email"
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    value={credentials.password}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    name="geoLocation"
                                    required
                                    value={credentials.geoLocation}
                                    fullWidth
                                    id="Address"
                                    label="Address"
                                    autoFocus
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
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
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </div>
    )
}

export default SignUp

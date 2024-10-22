import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login'; // นำเข้าไอคอน Login

const theme = createTheme({
    palette: {
        primary: {
            main: '#5DA7FB', // สีหลักของ AppBar
            purple: "#995DFF",
            red: "#FC1859",
            contrastText: '#fff'
        },
    },
});

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <Paper elevation={7} sx={{ padding: 3 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <TextField
                                label="Username"
                                type="text"
                                fullWidth
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: theme.palette.primary.main }} // ใช้สีหลักจากธีม
                            fullWidth
                            startIcon={<LoginIcon />} // เพิ่มไอคอนในปุ่ม
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

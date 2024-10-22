import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'; // นำเข้า ThemeProvider
import { createTheme } from '@mui/material/styles'; // นำเข้า createTheme

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));


const theme = createTheme({
    palette: {
        primary: {
            main: '#5DA7FB', // สีหลักของ AppBar
            purple:"#995DFF",
            red:"#FC1859",
            contrastText: '#fff'

        },
    },
});

export default function Header({ open, onDrawerOpen }) {

    const handleDrawerOpen = () => {
        onDrawerOpen()
    };

    return (
        <ThemeProvider theme={theme}> {/* ใช้ ThemeProvider */}
            <AppBar position="fixed" open={open}  sx={{ bgcolor: theme.palette.primary.purple }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" color='contrastText'>
                        WEB: React + material ui
                    </Typography>
                    
                    
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    );
}

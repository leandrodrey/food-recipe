import {createTheme} from "@mui/material";

export const darkTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            background: {
                default: '#121212',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: '#d32f2f',
            }
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                    position: 'sticky',
                },
                styleOverrides: {
                    root: {
                        background: '#4a148c',
                    }
                }
            }
        }
    }
);
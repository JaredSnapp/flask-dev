import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      light: '#a4a4a4',
      main: '#757575',
      dark: '#494949',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#98ee99',
      main: '#66bb6a',
      dark: '#338a3e',
      contrastText: '#000000',
    },
    neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    contrast: {
      main: '#ffffff'
    },
    background: {
      paper: '#F5F5F6',
      default: '#E1E2E1',
    }
    
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export { theme };

// export default function Palette() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Primary</Button>
//       <Button color="secondary">Secondary</Button>
//     </ThemeProvider>
//   );
// }
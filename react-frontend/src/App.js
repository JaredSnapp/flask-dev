import './App.css';
import AddJob from './forms/AddJob';
import AddRecruiter from './forms/AddRecruiter';
import NavigationBar from './NavigationBar/NavigationBar';
import RecruiterView from './RecruiterView/RecruiterView';
import { Status } from './shared/components/Status';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper, ThemeProvider, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { theme } from './theme'; 
import Test from './shared/components/Test'


function App() {

  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
    <div className="App">
    <Box style={{ background: '#E1E2E1' }}>
      <NavigationBar />
        <Container >
        <Routes>
          <Route path='/recruiters/*' element={<RecruiterView />}></Route>
          <Route path='/dev' element={<Test />}></Route>
        </Routes>
        </Container>
      </Box>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

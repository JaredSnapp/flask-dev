import EditCard from './EditCard/index.js';
import { TextField, Button, ThemeProvider } from '@mui/material';
import useToggle from './../hooks/useToggle'
import { useEffect } from 'react';


export default function Test({ children }) {
    const [value, toggleValue] = useToggle(true);

    useEffect(() => {
        console.log(value);
    }, [value])
    
    return (
        <div>
            <h3>Toggle: {`${value}`}</h3>
            <Button onClick={toggleValue}>Toggle</Button>
            <Button onClick={() => toggleValue(true)}>Set true</Button>
            <Button onClick={() => toggleValue(false)}>Set false</Button>


        </div>
    )
}
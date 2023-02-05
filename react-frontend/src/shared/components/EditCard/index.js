import css from './style.module.css';
import { TextField, Button, ThemeProvider, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { theme } from '../../../theme';
import { useState } from 'react';


function EditCard({ header, editChildren, children }) {
    const [edit, setEdit] = useState(false);

    return (
        <ThemeProvider theme={theme}> 
        <Card >
            <CardContent >
                {/* <div style={{"display": "flex", "gap": "1em", "alignContent": "center"}}> */}
                <div className={css.header} >
                    {header}
                    {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
                </div>
                <div className={css.main}>
                    {edit ? editChildren: children}
                </div>
                

            </CardContent>
            <CardActions>
            {edit && 
                    <>
                        <Button variant="contained" color='error' onClick={() => setEdit(false)}>Cancel</Button>
                        <Button variant="contained">Update</Button>
                    </>
                }
            </CardActions>
        </Card>
        </ThemeProvider> 
    );
}

export default EditCard;
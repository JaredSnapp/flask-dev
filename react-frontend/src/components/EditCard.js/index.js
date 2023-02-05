import css from './style.module.css';
import { TextField, Button, ThemeProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { theme } from '../../../theme';



function EditCard({ header, children }) {
    return (
        <ThemeProvider theme={theme}> 
        <Card >
            <CardContent >
                <div style={{"display": "flex", "gap": "1em", "alignContent": "center"}}>
                    {header}
                    {/* <h2>header</h2> */}
                    {/* <Button variant="contained" >Hello</Button> */}
                </div>
                <div>
                    {children}
                </div>

            </CardContent>
        </Card>
        </ThemeProvider> 
    );
}

export default EditCard;
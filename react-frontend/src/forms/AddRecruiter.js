import { useState } from 'react';
import css from './forms.module.css';
import { TextField, Button, ThemeProvider } from '@mui/material';
import { theme } from './../theme';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function AddRecruiter({ submitForm }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [active, setActive] = useState(true);
    const [lastContact, setLastContact] = useState(dayjs().format());

    function onsubmit(e) {
        e.preventDefault();

        if(!firstName && !lastName) {
            return
        }
        const rec = {first_name: firstName, last_name: lastName, phone, active, lastContact, jobs: []};
        submitForm(rec);
        console.log(`Submit Recruiter:`);
        console.log(rec);

        setFirstName('');
        setLastName('');
        setPhone('');
        setLastContact(dayjs().format());
    }

    return (
        <ThemeProvider theme={theme}>
            <Card >
                <CardContent>
        {/* <form className={css.formContainer} onSubmit={onsubmit}> */}
        <form onSubmit={onsubmit}>

            <h3>Add Recruiter</h3>
            <div className={css.flex}>
                <div className={css.formControl}>
                    <TextField id="outlined-basic" variant="outlined" size="small"
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className={css.formControl}>
                    <TextField id="outlined-basic" variant="outlined" size="small"
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            {/* </div> */}
            {/* <div className={css.flex}> */}
                {/* <div className={css.formControl}>
                    <TextField id="outlined-basic" variant="outlined" size="small"
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={css.formControl}>
                    <TextField id="outlined-basic" variant="outlined" size="small"
                        label="Last Contacted"
                        value={lastContact}
                        onChange={(e) => setLastContact(e.target.value)}
                    />
                </div> */}
            </div>
            
            <Button variant="contained" type='submit'>Add Recruiter</Button>
        </form>
        </CardContent>
        </Card>
        </ThemeProvider>
    )
}

export default AddRecruiter;
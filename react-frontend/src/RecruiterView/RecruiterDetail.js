import css from './RecruiterView.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JobDetail from './JobDetail';
import { TextField, Button, ThemeProvider } from '@mui/material';
import { theme } from './../theme';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import { EditCard } from '../shared/components';



function RecruiterDetail({ recruiterDetails, getRecruiterDetails, activeButton, updateDate}) {
    const params = useParams();
    const [date, setDate] = useState(dayjs());
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        getRecruiterDetails(parseInt(params.id));
    }, [params.id])
    
    return (
        <ThemeProvider theme={theme}> 
        
        <div className={css.containerGrid}>
        <EditCard 
            header={ <>{recruiterDetails &&
                <>
                    <h2>{recruiterDetails.first_name} {recruiterDetails.last_name}</h2>
                    <Button  color={recruiterDetails.active ? "secondary" : "error"} onClick={() => activeButton(recruiterDetails.id)} disableRipple={true}>
                        {recruiterDetails.active ? "Active" : "Inactive"}
                    </Button>
                    {/* <Button onClick={() => setEdit((prev) => !prev)}>Edit</Button> */}
                </> }</>
            } 
            editChildren={
                <>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                        label="Last Contact"
                        size="small"
                        value={date}
                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button onClick={() => updateDate(recruiterDetails.id, date)}>Update</Button>
                </>
            }>
            <>{recruiterDetails && <>
                <p> Last Contact: { dayjs(recruiterDetails.last_contact).format('ddd, M/D') }</p>
                <p> Status: </p>
            </> }</>
        </EditCard>
        
        
        {/* <Card >
            <CardContent >
            
            {recruiterDetails && (
            <>
            <div className={css.container}>
                <div className={css.headFlex}>
                    <h2>{recruiterDetails.first_name} {recruiterDetails.last_name}</h2>
                    <Button  color={recruiterDetails.active ? "secondary" : "error"} onClick={() => activeButton(recruiterDetails.id)} disableRipple={true}>
                        {recruiterDetails.active ? "Active" : "Inactive"}
                    </Button>
                    <Button onClick={() => setEdit((prev) => !prev)}>Edit</Button>
                </div>

                {!edit && <p> Last Contact: { dayjs(recruiterDetails.last_contact).format('ddd, M/D') }</p>}
                { edit &&
                    <>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                        label="Last Contact"
                        size="small"
                        value={date}
                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button onClick={() => updateDate(recruiterDetails.id, date)}>Update</Button>
                    </>
                }
                
                <p> Status: </p>
                
            </div>
            </>)}
            </CardContent>
            </Card> */}
            
            {recruiterDetails && recruiterDetails.jobs.map((job) => <JobDetail key={job.id} jobData={job}/>)}
            
        </div>
            
        </ThemeProvider>
    )
}

export default RecruiterDetail;



/* 
Recruiter:
- Last contact
- Phone?
- Email?
Jobs:
- Title
- Company
- Pay Range (if available)
- Job summary / description
- Interview schedule
- Current interview status
- Notes from each interview
- Questions
- General notes


*/
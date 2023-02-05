import css from './RecruiterView.module.css';
import JobSummary from './JobSummary';
import ContactDate from './../forms/ContactDate';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




function Recruiter({ recruiterData }) {
    const [expand, setExpand] = useState(false);
    
    return (
        <Card >
            <CardContent>
            {/* <div className={`${css.recruiter} ${recruiterData.active ? css.recruiterActive: css.recruiterInactive}`}> */}
                    <div className={css.recruiterDetails}>
                        <Link to={`/recruiters/${recruiterData.id}`} className={css.link}>
                            <h3>{recruiterData.first_name} {recruiterData.last_name}</h3>
                        </Link>
                        <p>Last Contact: {dayjs(recruiterData.last_contact).format('ddd, L')}</p>
                    </div>
                {recruiterData.jobs.map((job) => <JobSummary key={job.id} jobData={job}/>)}
            {/* </div> */}
            </CardContent>
        </Card>
    )
}

export default Recruiter;
/*
{
    "id": 1,
    "first_name": "jimmy",
    "last_name": "dean",
    "phone": "11111111111",
    "active": true,
    "inactive_date": "",
    "last_contact": "feb 7",
    "created": "",
    "last_modified": ""
  }, */
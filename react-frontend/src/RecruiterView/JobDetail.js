import css from './RecruiterView.module.css';
import TextField from '@mui/material/TextField';
import { Editor } from '../shared/components/Note';
import TipTap from '../shared/components/TipTap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function JobDetail({ jobData }) {
    return (
        <Card>
        <CardContent >
            <div className={css.container}>
                    <h3>{jobData.company}: </h3> 
                    <p>{jobData.title} - {jobData.summary}</p>
                    <p></p>
                <h4>Notes:</h4>
                <TipTap />
            </div>
        </CardContent>
        </Card>
    )
}

export default JobDetail;
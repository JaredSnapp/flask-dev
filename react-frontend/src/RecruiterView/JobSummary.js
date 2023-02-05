import css from './RecruiterView.module.css';

function JobSummary({ jobData }) {
    return (
        <div className={css.jobDetail}>  
            <p style={{fontWeight: 'bold'}}>{jobData.company}: </p> 
            <p>{jobData.title} - {jobData.summary}</p>
            <p></p>
        </div>
    )
}

export default JobSummary;
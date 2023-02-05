import css from './Status.module.css';
import StatusMarker from './StatusMarker';
import { useState, useEffect } from "react";

const STATUS = {
    incomplete: 'incomplete',
    schedule: 'schedule', 
    interview: 'interview',
    results: 'results',
    complete: 'complete'
}


function Status({ }) {
    const [state1, setState1] = useState(3);
    const [state2, setState2] = useState(0);


    const interviewList = [
        "Schedule Initial call",
        "Initial call",
        "Await Initial call results",
        "Schedule first interview",
        "First intervew",
        "Await First interview results",
        "Schedule tech interview",
        "Technical interview", 
        "Tech interview results",
        "Schedule onsite",
        "Onsite panel",
        "Onsite results"
    ]

    useEffect(() => {


    }, [])
 
    return (
        <div className={css.container}>
            <StatusMarker status={STATUS.complete}/>
            <StatusMarker status={STATUS.interview}/>
            <StatusMarker status={STATUS.incomplete}/>

            <div></div>
        </div>
    )
}

export { Status, STATUS };
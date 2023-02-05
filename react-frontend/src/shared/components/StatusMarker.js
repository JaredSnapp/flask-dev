import css from './Status.module.css';
import { useState, useEffect } from "react";
import { Status, STATUS } from './Status';

function StatusMarker({ status }) {
    const [schedule, setSchedule] = useState('green');
    const [interview, setInterview] = useState('blue');
    const [results, setResults] = useState('grey');


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
        // CadetBlue DarkCyan 
        // DarkGreen DarkOliveGreen DarkSeaGreen Green MediumSpringGreen MediumSeaGreen MediumAquaMarine
        // OliveDrab PaleGreen SeaGreen SpringGreen
        // Beige Moccasin orange
        const incompleteColor = '#A0A0A0'; // #A0A0A0 #B8B8B8
        const currentColor = 'SpringGreen';
        const completeColor = 'SeaGreen'

        switch(status) {
            case STATUS.incomplete:
                setSchedule(incompleteColor);
                setInterview(incompleteColor);
                setResults(incompleteColor);
                break;
            case STATUS.schedule:
                setSchedule(currentColor);
                setInterview(incompleteColor);
                setResults(incompleteColor);
                break;
            case STATUS.interview:
                setSchedule(completeColor);
                setInterview(currentColor);
                setResults(incompleteColor);
                break;
            case STATUS.results:
                setSchedule(completeColor);
                setInterview(completeColor);
                setResults(currentColor);
                break;
            case STATUS.complete:
                setSchedule(completeColor);
                setInterview(completeColor);
                setResults(completeColor);
                break;
        }
        
    }, [status])

    return (
        <div className={css.container}>
            <div className={css.bar} style={{backgroundColor: schedule}}></div>
            <div className={css.marker} style={{backgroundColor: interview}}></div>
            <div className={css.bar} style={{backgroundColor: results}}></div>
            <div></div>
        </div>
    )
}

export default StatusMarker;
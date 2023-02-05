import css from './RecruiterView.module.css';
import Recruiter from './Recruiter';
import AddRecruiter from '../forms/AddRecruiter';
import { useState } from 'react';


function RecruiterList({ recruiters, addRecruiter } ) {
    const [showAddRecruiter, setShowAddRecruiter] = useState(false);
    
    return (
        <div>
            <button className={css.btn} onClick={() => setShowAddRecruiter((prev) => !prev)}>Add Recruiter</button>
            {showAddRecruiter && <AddRecruiter submitForm={addRecruiter}/>}
            <div className={css.containerGrid}>
                {recruiters.map((recruiter) => <Recruiter key={recruiter.id} recruiterData={recruiter}/>)}
            </div>
        </div>
    )
}

export default RecruiterList;
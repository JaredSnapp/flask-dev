import css from './forms.module.css';
import { useState } from 'react';

function AddJob({ submitForm }) {
    const [title, setTitle] = useState('');
    const [salary_low, setSalary_low] = useState('');
    const [salary_high, setSalary_high] = useState('');
    const [company, setCompany] = useState('');


    function onsubmit(e) {
        e.preventDefault();
        
        if(!title) {
            return
        }

        const job = {title, company, salary_low, salary_high}
        //submitForm(job);
        console.log(`Submit job:`);
        console.log(job);

        setTitle('');
        setCompany('');
        setSalary_low('');
        setSalary_high('');
    }

    return (
        <form className={css.formContainer} onSubmit={onsubmit}>
            <h3>Add Job</h3>
            <div className={css.flex}>
                <div className={css.formControl}>
                    <label>Job Title</label>
                    <input type='name' placeholder='Job Title'
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={css.formControl}>
                    <label>Company</label>
                    <input type='name' placeholder='Company'
                    value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
            </div>
            <div className={css.flex}>
                <div className={css.formControl}>
                    <label>Salary Low</label>
                    <input type='name' placeholder='Salary Low'
                    value={salary_low} onChange={(e) => setSalary_low(e.target.value)} />
                </div>
                <div className={css.formControl}>
                    <label>Salary High</label>
                    <input type='name' placeholder='Salary High'
                    value={salary_high} onChange={(e) => setSalary_high(e.target.value)} />
                </div>
            </div>
            
            <input className={css.btn} type='submit' value='Add Job'/> 
        </form>
    )

}

export default AddJob;
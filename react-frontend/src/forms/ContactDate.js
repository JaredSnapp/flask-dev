import { useState } from 'react';
import css from './forms.module.css';

function ContactDate({ submitForm }) {
    const [lastContact, setLastContact] = useState('');

    function onsubmit(e) {
        e.preventDefault();
        //submitForm();

        if(!lastContact) {
            return
        }

        setLastContact('');
    }

    return (
        <form onSubmit={onsubmit}>
            <div className={css.flex}>
                <div className={css.flex}>
                    <label>Last Contacted</label>
                    <input type='name' placeholder='Date'
                    value={lastContact} onChange={(e) => setLastContact(e.target.value)} />
                    <input  type='submit' value='Update'/> 
                </div>
                
            </div>
            
            
        </form>
    )
}

export default ContactDate;
import RecruiterDetail from './RecruiterDetail';
import { useState, useEffect } from 'react';
import RecruiterList from './RecruiterList';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useGetRecruiters, updateRecruiter, addRecruiter } from '../shared/utils/Api';


function RecruiterView({ } ) {
    // const [showAddRecruiter, setShowAddRecruiter] = useState(false);
    const [recruiters, setRecruiters] = useState([]);
    const [recruiterDetail, setRecruiterDetail] = useState();

    useEffect(() => {
        const GetRecruiters2 = async () => {
            const data = await useGetRecruiters()
            setRecruiters(data);
        }

        GetRecruiters2();
    }, [])

    function getRecruiterDetails(id) {
        let recruiter = recruiters.filter((rec) => rec.id === id)[0]
        setRecruiterDetail(recruiter);
    };

    async function activeButton(id) {
        if (id === recruiterDetail.id) {
            const data = await updateRecruiter(id, {...recruiterDetail, active: !recruiterDetail.active});
            if (data) {
                setRecruiterDetail(data);
                setRecruiters(recruiters.map((ele) => {
                    if (ele.id === id) {
                        return data
                    }
                    return ele
                }));
            }
        }
    }

    async function updateDate(id, date) {
        if (id === recruiterDetail.id) {
            const data = await updateRecruiter(id, {...recruiterDetail, last_contact: date});
            if (data) {
                console.log(data)
                setRecruiterDetail(data);
                setRecruiters(recruiters.map((ele) => {
                    if (ele.id === id) {
                        return data
                    }
                    return ele
                }));
            }
        }
    }

    async function addNewRecruiter(data) {
        const res = await addRecruiter(data);
        console.log(data);
        setRecruiters([...recruiters, res]);
    }
    
    return (
        <div>
            <Routes>
            <Route path='/' element={<RecruiterList recruiters={recruiters} addRecruiter={addNewRecruiter}/>}> </Route>
            <Route path='/:id' element={
                <RecruiterDetail recruiterDetails={recruiterDetail} 
                getRecruiterDetails={getRecruiterDetails} 
                activeButton={activeButton}
                updateDate={updateDate}
                />}></Route>
            </Routes>
        </div>
    )
}

export default RecruiterView;
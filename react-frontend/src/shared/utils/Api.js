import useFetch from './useFetch';

const BASEURL = "http://localhost:4000/data"

const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json' },
}

// async function  useGetRecruiters() {
//     const data = useFetch(BASEURL);
//     // const data = res.json();
//     //console.log(data);
//     return data;
// }


async function  useGetRecruiters() {
    const res = await fetch(BASEURL, {...DEFAULT_OPTIONS})
    const data = await res.json();
    //console.log(data);
    return data;
}

async function updateRecruiter(id, data) {
    let returnData = undefined;

    try {
        const res = await fetch(`${BASEURL}/${id}`, {
            ...DEFAULT_OPTIONS, 
            method: 'PUT', 
            body: JSON.stringify(data),
        })
        returnData = await res.json();
    }
    catch(err) {
        console.error(err);
    }
    
    return returnData;
}

async function addRecruiter(data) {
    let returnData = undefined;
    console.log('api call add recruiter')

    try {
        const res = await fetch(`${BASEURL}`, {
            ...DEFAULT_OPTIONS, 
            method: 'POST', 
            body: JSON.stringify(data),
        })
        returnData = await res.json();
    }
    catch(err) {
        console.error(err);
    }
    
    return returnData;
}




export { useGetRecruiters, updateRecruiter, addRecruiter };




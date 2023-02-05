export interface Company {
    id: number;
    name: string;
}

export interface Recruiter {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    active: boolean;
    inactive_date: string;
    last_contact: string;
    created: string;
    last_modified: string;
}


export interface Job {
    id: number;
    name: string;
    salary_low: string;
    salary_high: string;
    company: string;
    company_id: number;
    inactive_date: "",
    created: string;
    last_modified: string;
}
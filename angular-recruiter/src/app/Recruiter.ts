
export interface Recruiter {
    id?: number;
    firstName: string; 
    lastName: string;  
    phoneNumber: number;
    company: string; 
    active: boolean;
    companylist: Company[];
}

export interface Company {
    name: string;
    position: string;
    salaryRange: string;
    companyDescription: string;
    jobDescription: string;
}
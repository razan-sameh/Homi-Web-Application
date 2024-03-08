import { Role } from "./Role";

export interface user{
    email:string;
    displayName:string;
    role: Role;
    token:string
}
export interface Address{
    firstName:string;
    lastName:string;
    street:string;
    city:string;
    state:string;
    zipcode:string;
}

import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastactive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string; // ? pour etre optionel
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}

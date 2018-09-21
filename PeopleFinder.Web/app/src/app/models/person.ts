import { Interest } from "./interest";

export class Person {
    id: number;
    name: string;
    city: string;
    stateName: string;
    streetAddress: string;
    zip: string;
    age: number;
    pictureUrl: string;
    interests: Interest[];
}
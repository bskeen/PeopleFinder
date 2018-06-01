import { Person } from "./person";
import { Interest } from "./interest";

export class PersonDetails extends Person {
  streetAddress: string;
  zip: string;
  age: number;
  pictureUrl: string;
  interests: Interest[];
}

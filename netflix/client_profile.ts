
import { packages } from "./packages";
import { service } from "./service";
import { Genre } from "./genre";


export class ClientProfile{
    id: number;
    userID: number;
    phone: number;
    email: string;
    address: string;
    genre: Genre[];

}

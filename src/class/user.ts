//create a user class with the field name , password and id 
export class User {
    name: string;
    password: string;
    id: number;
    constructor(name: string, password: string, id: number) {
        this.name = name;
        this.password = password;
        this.id = id;
    }
}


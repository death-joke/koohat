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

    //create a static function to generate randdom user 
    static generateRandomUser(): User {
        return new User("user" + Math.floor(Math.random() * 1000000), "password", Math.floor(Math.random() * 1000000));
    }
}


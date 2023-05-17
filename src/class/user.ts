/**
 * User class
 * @class User
 * @constructor
 * @param {string} name - The name of the user
 * @param {string} password - The password of the user
 * @param {number} id - The id of the user
 * 
 */
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


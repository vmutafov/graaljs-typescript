import { ArrayList } from "@afterburnerhq/java.util";

class User {
    constructor(public name: string) { }
}

const john = new User("Chandler");
const monica = new User("Monica");

const users = new ArrayList<User>();
users.add(john);
users.add(monica);

users.map(x => x.name).forEach(x => console.log(x));
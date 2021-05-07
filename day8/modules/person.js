export default class Person extends Human{
    age = 0;
    constructor(nage){
        this.age = nage;
    }
    sayAge(){
        return this.age;
    }
    static version = "1001";
}
export class Human{
    walk(){
        return "I walk";
    }
}
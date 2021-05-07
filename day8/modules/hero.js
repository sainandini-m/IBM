import Pson from "./person.js";

export class Hero extends Pson{
    firstName = "guest";
    lastName = "guest";
    _power = 0; 
    city = "Bengaluru";

    constructor(fname, lname, pow, hage){
        super(hage);
        console.log("In Constructor ", this.firstName);
        this.firstName = fname;
        this.lastName = lname;
        this._power = pow;
    }
    fullname(){
        return this.firstName+" "+this.lastName;
    }
    powerMultiplier(){
        return this._power * 10;
    }
    getCity(){
        return this.city;
    }
    get power(){
        return this._power;
    }
    set power(npower){
        this._power = npower;
    }
    static saymessage(){
        return "I am Batman";
    }
};
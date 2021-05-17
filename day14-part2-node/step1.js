let user = "vijay";
let heroes = ['Ironman','Batman','Superman','Spiderman'];
let adder = function(num1, num2){
    return num1 + num2;
}
// console.log(user);
// for(let i = 0; i <= 10; i++){
//     console.log(i, user);
// }
// console.log(module.exports)// {}
// module.exports.username = user;
// module.exports.hlist = heroes;
// module.exports.addFun = adder;
// module.exports = {
//     uname : user,
//     hlist : heroes,
//     addfun : adder
// }

module.exports = adder;
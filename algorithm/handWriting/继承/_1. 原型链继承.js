// check
function Parent() {
    this.name = 'ParentName';
    this.actions = ['sing', 'jump', 'rap'];
}

function Child() { }

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const c1 = new Child();
c1.actions.push('basketball');
console.log(c1.actions); //[ 'sing', 'jump', 'rap', 'basketball' ]
const c2 = new Child();
console.log(c2.actions); // [ 'sing', 'jump', 'rap' ]


// function Parent(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log('hi');
//     }
// }
// function Child() {

// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// let c = new Child();
// c.greet();
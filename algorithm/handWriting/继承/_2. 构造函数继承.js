// check
function Parent(name, color) {
    this.name = name;
    this.color = color;
    this.actions = ['sing', 'jump', 'rap'];
    this.eat = function () { }
}

function Child() {
    Parent.apply(this, arguments);
    // Parent.call(this, arguments);
}

const c1 = new Child('c1', 'red');
const c2 = new Child('c2', 'white');

console.log(c1.name);

// function Parent(name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = function () {
//         console.log('hi');
//     }
// }
// function Child() {
//     Parent.apply(this, arguments);
// }
// const c1 = new Child('c1', 19);
// console.log(c1.name);
// c1.say();

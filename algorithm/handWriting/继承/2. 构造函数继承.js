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

console.log(c1.eat === c2.eat);

// function Parent(name1, age) {
//     this.name1 = name1;
//     this.age = age;
//     this.say = function () {
//         console.log('hi');
//     }
// }
// function Child(name1, age) {
//     Parent.call(this, name1, age);
// }
// let c = new Child('c', 12);
// console.log(c.age);
// 观察者模式
// 当一个属性发生状态改变时，观察者会连续引发所有的相关状态改变
// 通过智能家居一键开始游戏
class MediaCenter {
  constructor() {
    this.state = '';
    this.observers = [];
  }
  attach(observer) {
    this.observers.push(observer);
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllobservers();
  }
  notifyAllobservers() {
    this.observers.forEach(ob => {
      ob.update();
    })
  }
}

class observer {
  constructor(name, center) {
    this.name = name;
    this.center = center;
    this.center.attach(this);
  }
  update() {
    console.log(`${this.name} update, state: ${this.center.getState()}`);
  }
}

const center = new MediaCenter();
const ps = new Observer('ps', center);
const tv = new Observer('tv', center);

center.setState('on');
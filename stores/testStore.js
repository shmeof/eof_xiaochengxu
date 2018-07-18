var mobx = require('../libs/mobx');
var extendObservable = require('../libs/mobx').extendObservable;
var action = mobx.action;

var TestStore = function () {
  extendObservable(this, {
    // observable data
    todos: [],
    todoText: 'aaa',
    // computed data
    get count() {
      return this.todos.length;
    }
  });

  // action
  this.addTodo = action(function (title) {
    this.todos.push({ title: title });
  })

  this.removeTodo = action(function () {
    this.todos.pop();
  })
}

module.exports = {
  default: new TestStore,
}
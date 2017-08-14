// // var task = Object.create(Object.prototype);
// // var task = new Object();
// var task = {
//   title: 'My Task',
//   description: 'My Description'
// };
//
// // task.title = 'My Task';
// // task.description = 'My Description';
//
// Object.defineProperty(task, 'toString', {
//   value: function() {
//     return this.title + ' ' + this.description;
//   },
//   writable: false,
//   enumerable: false,
//   configurable: false
// });
//
// var urgentTask = Object.create(task);
// Object.defineProperty(urgentTask, 'toString', {
//   value: function () {
//     return this.title + ' is urgent';
//   },
//   writable: false,
//   enumerable: false,
//   configurable: false
// })
//
// //
// // task.toString = function() {
// //   return this.title + ' ' + this.description;
// // }
// console.log(urgentTask.toString());
//
//


//  Creational Design Patterns

//  constructor patter design
//  using the new keyword

var Repo = require('./taskRepository.js');

var Task = function(data) {
  this.name = data.name;
  this.completed = false;

  // this.complete = function() {
  //   console.log('completing task: ' + this.name);
  //   this.completed = true;
  // }
  //
  // this.save = function() {
  //   console.log('saving task: ' + this.name);
  // }
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
  Repo.save(this);
}


module.exports = Task;

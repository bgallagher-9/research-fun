// var task = Object.create(Object.prototype);
// var task = new Object();
var task = {
  title: 'My Task',
  description: 'My Description'
};

// task.title = 'My Task';
// task.description = 'My Description';

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function () {
    return this.title + ' is urgent';
  },
  writable: false,
  enumerable: false,
  configurable: false
})

// 
// task.toString = function() {
//   return this.title + ' ' + this.description;
// }
console.log(urgentTask.toString());

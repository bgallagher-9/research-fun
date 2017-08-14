var Task = require('./script.js');
var Repo = require('./taskRepository.js');


var task1 = new Task(Repo.get(1));
// var task1 = new Task('create a demo for constructors');
var task2 = new Task({name: 'create a demo for modules'});
var task3 = new Task({name: 'create a demo for singletons'});
var task4 = new Task({name: 'create a demo for prototypes'});


task1.complete();
task2.save();
task3.save();
task4.save();

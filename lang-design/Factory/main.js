var Task = require('./task');
// var taskRepo = require('./taskRepository');
// var userRepo = require('./userRepository');
// var projectRepo = require('./projectrepository');
var repoFactory = require('./repoFactorywCache');

// var task1 = new Task(taskRepo.get(1));
var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

// var user = userRepo.get(1);
// var project = projectRepo.get(1);

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();

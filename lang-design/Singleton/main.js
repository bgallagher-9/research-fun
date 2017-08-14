// var TaskRepo = (function() {
//   var taskRepo;
//   function createRepo() {
//     var taskRepo = new Object('Task');
//     return taskRepo;
//   }
//   return {
//     getInstance: function() {
//       if (!taskRepo) {
//         taskRepo = createRepo();
//       }
//       return taskRepo;
//     }
//   };
// })();
//
// var repo1 = TaskRepo.getInstance();
// var repo2 = TaskRepo.getInstance();
//
// if(repo1 === repo2) {
//   console.log('Same TaskRepo')
// };


var taskHandler = require('./taskHandler');
var myrepo = require('./repo');
// var myrepo = repo();

myrepo.save('fromMain')
myrepo.save('fromMain')
myrepo.save('fromMain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

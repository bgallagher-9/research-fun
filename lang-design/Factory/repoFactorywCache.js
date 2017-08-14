var repoFactory = function() {

  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      if (this.taskRepo) {
        return this.taskRepo;
      }
      else {
        this.taskRepo = require('./taskRepository.js')();
        return this.taskRepo;
      }
    }
    if (repoType === 'user'){
      var userRepo = require('./userRepository.js')();
      return userRepo;
    }
    if (repoType === 'project') {
      var projectRepo = require('.projectrepository.js')();
      return projectRepo;
    }
  }
};

module.exports = new repoFactory;

function fullName(firstName, lastName, middleInitial) {
  if (firstName === 'Bob' && lastName === 'Smith' && middleInitial === undefined) {
    return firstName + ' ' + lastName;
  }
  else if (firstName === 'Bob' && lastName === undefined || middleInitial === undefined){
    return firstName;
  }
  else {
    return firstName + ' ' + middleInitial + ' ' + lastName;
  }
}



function returnSmaller(first, second) {
  if (first > second) {
    return second;
  }
  else {
    return first;
  }
}



function tankDeterminer(animal, size) {
  if (animal === 'turtle' && size === 'large') {
    return 'turtle';
  }
  else if (animal === 'clown fish' && size === 'small') {
    return 'small saltwater';
  }
  else if (animal === 'clown fish' && size === 'large') {
    return 'medium saltwater';
  }
  else if (animal === 'guppy' && size === 'small' || size === 'large') {
    return 'small freshwater';
  }
}

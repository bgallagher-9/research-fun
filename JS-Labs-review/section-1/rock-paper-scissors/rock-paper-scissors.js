
function whoWins(first, second) {
  if (first === 'rock' && second === 'scissors' || first === 'paper' && second === 'rock' || first === 'scissors' && second === 'paper') {
    return 'first';
  }
  else if (first === 'scissors' && second === 'rock' || first === 'rock' && second === 'paper' || first === 'paper' && second === 'scissors') {
    return 'second';
  }
  else if (first === 'paper' && second === 'paper' || first === 'scissors' && second === 'scissors' || first === 'rock' && second === 'rock') {
    return 'tie';
  }
}

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:  returns 'Bart, Lisa & Maggie'

//1 My almost good solution
const users = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
// const users = [{ name: 'Bart' }];
// const users = [];

function list(names){
    const justNames = users.map(user => user.name);
    let arrayLength = justNames.length;
    let newNames;
    if (arrayLength >= 2) {
       newNames = `${[...justNames.slice(0, arrayLength-1)]} & ${[...justNames.slice(arrayLength-1)]}`
    }
      else if (arrayLength = 1){
    newNames = `${justNames[0]}`;
    }
    return newNames;
}

console.log(list(users));

//2 Google solution with map method

function list(names){
  let str = '';
  if (names.length !== 0) {
    let last = names.pop();
    str = names.map( (val, i, arr) => {
      if (i !== arr[arr.length - 1]) {
        return val.name;
      }
    }).join(', ')
     
    str += str !== '' ? ' & ' + last.name : last.name;
  }
    
  return str;
}

//3 Beautiful use of reduce method from codewars
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}
 
//4 Some super short solutions
function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

//or

function list(names) {
  return names.map(o => o.name).join(', ').replace(/^(.*)(, )(.*)$/, '$1 & $3');
}
var printMe = function(crap) {
  console.log("crap", crap);
}

printMe("cat");

var animals = ['cat', 'dog', 'monkey', 'horse', 'frog'];

printMe(animals);

var animalLoop = function(animalArray) {
  for (var i = 0; i<animalArray.length; i++) {
    printMe(animalArray[i]);
  }
}

animalLoop(animals);
// animalLoop(animals);

var addNums = function(num1, num2) {
  return  num1 + num2;
}

var result = addNums(1, 2);
printMe(result);

var subtractNums = function(n1, n2) {
  return n1 - n2;
}

var subResult = subtractNums(4,1);
printMe(subResult);

var calculator = function(number1, number2, action) {
  return action(number1, number2);
}

var result3 = calculator(5, 3, subtractNums);
printMe(result3);
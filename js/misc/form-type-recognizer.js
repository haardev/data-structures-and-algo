let squeere = [1, 1, 1, 1]; // squere
let rectangle = [1, 1, 2, 2]; // L R T B Rectangle

function getFormType(listOfNumbers) {
   let height = listOfNumbers[0] + listOfNumbers[1];
   let width = listOfNumbers[2] + listOfNumbers[3];

   if(height == width) {
    return 'squere';
   }

   if(height !== width) {
    if(listOfNumbers[0] !== listOfNumbers[1] || listOfNumbers[2] !== listOfNumbers[3]) {
      return 'N/A';
    }
    else return 'rectangle'
   }
}

getFormType(rectangle);
console.log(getFormType);
function backspase(inputString) {
    let data = inputString.split('');
    let result = [];
  
   for (var i = 0; i < data.length; i++) {
      if(data[i] !== '#') {
        result.push(data[i]);
        continue;
      }
  
      if(!result) {
        continue;
      }
  
      result.pop();
   }
  
   return result.join('');
  }
  
  let testData = 'abc#def##';
  
  backspase(testData);
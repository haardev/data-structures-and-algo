function sockMerchant(data) {
    let map = new Map();
    let counter = 0;
  
    for(let sock of data) {
      if(!map.has(sock)) {
        map.set(sock, 1);
      }
      else {
        counter = counter + 1;
        map.delete(sock);
      }
    }
  
    return counter;
  }
  
  let inputData = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  sockMerchant(inputData);
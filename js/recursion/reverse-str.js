const data = ['a', 'b', 'c', 'd', 'f'];

function reverseStr(list) {
    let result = [];

    function reverser(list) {
        if(list.length !== 0) {
            result.push(list.pop());
            reverser(list);
        }
    }

    reverser(list);
    return result;
}

const result = reverseStr(data);
console.log(result);
const data = [2,3,1,4, 6, 3, 10, 12, 10];

function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    const pivotIndex = Math.floor((right + left) / 2);
    let pivot = items[pivotIndex];
    let i = left;
    let j = right;

    while(i <= j) {
        while(items[i] < pivot) {
            console.log('Loop low',items[i]);
            i++;
        }
        while(items[j] > pivot) {
            console.log('Pivot', pivot);
            console.log('Loop hight',items[i]);
            j--;
        }
    
        if(i <= j) {
            //Swap items
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right)
 {
     //Base check
     if(items.length === 1 || items.length === 0) {
         return items;
     }

     let index = partition(items, left, right);

     if(left < index - 1) {
        quickSort(items, left, index - 1);
     }
    
     if(index < right) {
        quickSort(items, index, right);
     }

     return items;
 }
const result = quickSort(data, 0, data.length- 1);
console.log(result);
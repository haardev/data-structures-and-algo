//Hackerrank problem

function jumpingOnClouds(listOfnumbers) {
    let counter = 0;
    let i = 0;

    while(i < listOfnumbers.length - 1) {
        if(i + 2 === listOfnumbers.length || listOfnumbers[i + 2] == 1) {
            counter = counter + 1;
            i = i + 1;
        }
        else {
            counter = counter + 1;
            i = i + 2;
        }
    }
}

let inputData = [0, 0, 1, 0, 0, 1, 0];

jumpingOnClouds(inputData);
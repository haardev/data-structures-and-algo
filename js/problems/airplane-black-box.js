//Probolem defintion
/*
Say we got the black box from airoplace crach, There is huge set of log files with contents unsorted. We need to fetch the lastet half an hour log. desig an suitable algorithm to fetch lastest half an hour log statement. the formate of log statement would be
<DD-MM-YYYY HH:MM:SS:sss> <LogStatement>
example - 02-01-2014 10:02:01:001 abcd
*/

let input = ['02-01-2014 10:04:01:001 Lod Data 2' , '02-01-2014 10:02:01:001 Log Data']


/*

Start with empty array
Insert element
    -> If array is empty just add to the list
    -> If its not check the current value

*/


function  getLatestHours(data) {

}

getLatestHours(input);



// 4, 2, 5, 3, 8, 1, 7, 6 => last 3 elements

let LastElement = [list.length];

let topElement = [0];



let times = ['22:00', '23:00', '22:30', '13:00', '23:01'];

// 23:01
// 23:00
// 22:30
// 22:00
// 13:00
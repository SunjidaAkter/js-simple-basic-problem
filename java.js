//problem : 1
function anaToVori(ana) {
    //error handling condition
    if (typeof (ana) == 'number' && ana >= 0) {
        let vori = ana / 16;  //we know that 1 vori = 16 ana
        return vori;          //returning the value of vori
    }
    else if (ana < 0 && typeof (ana) == 'number') {
        return 'Please enter a postive number';     //returning error massage
    }
    else {
        return 'Please enter a valid number';       //returning error massage
    }
}
// let input = -9;
// let result = anaToVori(input);
// console.log(result);




//problem : 2
function pandaCost(quantityOfSingara, quantityOfSomucha, quantityOfJilapi) {
    //error handling condition
    if (typeof (quantityOfSingara) == 'number' && typeof (quantityOfSomucha) == 'number' && typeof (quantityOfJilapi) == 'number' && (quantityOfSingara >= 0 && quantityOfSomucha >= 0 && quantityOfJilapi >= 0)) {
        let costPerSingara = 7;     //storing the given cost per singara
        let costPerSomucha = 10;    //storing the given cost per somucha
        let costPerJilapi = 15;     //storing the given cost per jilapi
        let totalCost = quantityOfSingara * costPerSingara + quantityOfSomucha * costPerSomucha + quantityOfJilapi * costPerJilapi;     //calculating the total cost
        return totalCost;   //returning the total cost of singara, somucha & jilapi
    }
    else {
        return "please enter valid & positive numbers";  //returning error massage
    }
}
// let numbersOfSingara = 2;
// let numbersOfSomucha = 2;
// let numbersOfJilapi = 2;
// let result = pandaCost(numbersOfSingara, numbersOfSomucha, numbersOfJilapi);
// console.log(result);




//problem : 3
function picnicBudget(quantityOfPicnicParticipants) {
    //error handling condition
    if (typeof (quantityOfPicnicParticipants) == 'number' && quantityOfPicnicParticipants >= 0) {
        let totalBudgetForPicnic = 0;   //declaring total budget
        //condition for different numbers of participants
        if (quantityOfPicnicParticipants <= 100) {
            totalBudgetForPicnic = quantityOfPicnicParticipants * 5000; //calculating total budget
            return totalBudgetForPicnic;    //returning total budget
        }
        else if (quantityOfPicnicParticipants <= 200) {
            totalBudgetForPicnic = (100 * 5000) + (quantityOfPicnicParticipants - 100) * 4000;  //calculating total budget
            return totalBudgetForPicnic;    //returning total budget
        }
        else {
            totalBudgetForPicnic = (100 * 5000) + (100 * 4000) + (quantityOfPicnicParticipants - 200) * 3000;   //calculating total budget
            return totalBudgetForPicnic;    //returning total budget
        }
    }
    else if (quantityOfPicnicParticipants < 0 && typeof (quantityOfPicnicParticipants) == 'number') {
        return "Please enter a positive number";  //returning error massage
    }
    else {
        return "please enter a valid number";   //returning error massage
    }
}
// let input = 300;
// let result = picnicBudget(input);
// console.log(result);




//problem : 4
function oddFriend(array) {
    //error handling condition
    if (Array.isArray(array) == true && array.length > 0) {
        let oddString = '';                 //declaring the string variable
        //loop for checking the strings of array
        for (let i = 0; i < array.length; i++) {
            //again error handling condition
            if (typeof (array[i]) == 'string') {
                //condition for odd string
                if (array[i].length % 2 != 0) {
                    oddString = array[i];   //storing the first odd string
                    return oddString;       //returning the first odd string
                }
            }
            else {
                return 'Please enter an array of string elements';    //returning error massage
            }
        }
    }
    else {
        return 'Please enter an array with elements';             //returning error massage
    }
}
// let inputArray = ['moli', 'doli', 'kodom', 'keya', 'kolli'];
// let result = oddFriend(inputArray);
// console.log(result);


function fact(i) {
    if (i == 0) {
        return 1;
    }

    return i * fact(--i);

}
console.log(fact(9));

// function fact(n) {
//         let fact = 1;
//         let i = n;
//         while (i > 0) {
//             fact = fact * i;
//             i--;
//         }
//         return fact;
//     }
//     let x = 5;
//     let result = fact(x);
//     console.log(result);


// 3. Find the counts of duplicates in an array?
// const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
// [You have to use for loop to solve this array. You cannot use any es6 features]

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
let count = 0;
let array = [];
for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
            let counts = 0;
            counts++;
            if (count >= 1) {
                console.log('number of ', arr[i], ' is : ', counts)
            }
        }
    }
}
console.log(count, array)


var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
Array.prototype.findTheLargestNumberIn3dArray = function () {
    return Math.max(...this.flat(Infinity));
}; console.log(ar.findTheLargestNumberIn3dArray());
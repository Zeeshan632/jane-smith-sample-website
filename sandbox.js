let button = document.getElementById("navBtn");
let navigation = document.getElementById("sideNav");
let button2 = document.getElementById("smallButton");

navigation.style.left = ("-50vw");
button.onclick = function() {
    if (navigation.style.left == ("-50vw")){
        navigation.style.left = ("0vw");
        
    }
    else {
        navigation.style.left = ("-50vw");
    }

    }
    button2.onclick = function() {
            navigation.style.left = ("-50vw")
    }



console.log("hello world")
function squareDigits(num){
    //may the code be with you
    let result = 0;
    let array = num.toString().split('');
    for(let i = 0; i < array.length; i++){
        let theNum = array[i] ** 2;
        let string = String(theNum);
        result += string;
    }
    let newResult = Number(result);    
    return newResult;
  }
let myFunc = squareDigits(234);
console.log(myFunc);

// let string = 1234;
// let result = String(string);
// console.log(result);

let newArray = [2, 3, 4]

function findOutlier(array){
    let outlier;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            outlier = array[i];
        }
    }
    console.log(outlier);
}
findOutlier(newArray);
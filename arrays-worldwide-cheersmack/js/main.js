

//Create a function that takes in a number. The function 
//should return an array that contains every number 
//from 1 to that number as seperate elements

function listNum(num){
    let numArray = []
    for(let i = 1; i <= num; i++){
        numArray.push(i)
    }

    console.log(numArray)
}

listNum(50)

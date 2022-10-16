//Create a function that takes in an array of numbers. 
//Multiply each number together and alert the product.

function multiplyEach(array){
    sum = 1
    array.forEach(item => {
        sum = sum * item
        
    })
    alert(sum)
}

multiplyEach([1,2,3,4,5])
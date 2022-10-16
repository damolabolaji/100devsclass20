// Create a function that takes in an array. If the first number, is less than the last number, 
//alert "Hi". If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour"

function closeInHour(array){
    compare = array[0] < array[array.length - 1]

    if (compare){
        alert('Hi')
    }else if(!compare){
        alert('Bye')
    }else{
        alert('We close in an hour')
    }
}
closeInHour([80,5,6,32,54,67,7,22,56,70])
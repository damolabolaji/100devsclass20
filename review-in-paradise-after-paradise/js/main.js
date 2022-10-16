// Create a function that takes in an array. If the first number, is less than the last number, 
//alert "Hi". If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour"

function closeInHour(array){
    
    

    if (array[0] < array[array.length - 1]){
        alert('Hi')
    }else if(array[0] < array[array.length - 1]){
        alert('Bye')
    }else{
        alert('We close in an hour')
    }
}
closeInHour([70,5,6,32,54,67,7,22,56,70])
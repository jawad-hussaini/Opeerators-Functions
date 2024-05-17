
// It's not working
let boy =[ "ali", "ahmed", "usman", "saqlain"]
let girl= ["aliya", "amina", "shazia", "fatima"]

let ride = function(check){
    // console.log(check)

    let IsBiker= boy.filter(element =>{ 
        if(element == check){
            return true;
        }else return false;
    })
    // console.log(IsBiker)

    if (IsBiker.length>0){
        console.log("You Can Ride a Bike")
    }
    else {
        console.log("You Can't Ride a Bike")

    }
}
ride("aliya");

//                   //***** BASIC OPERATORS *****//
// function positive(a){
//     console.log(a)
//     console.log(a++);
//     console.log(a);
//     console.log(++a);
//     console.log(a)
//     console.log("Done")
// }
// positive(1)

// function negative(b){
//     console.log(b);
//     console.log(b--);
//     console.log(b);
//     console.log(--b);
//     console.log(b)
//     console.log("Done")
// }
// negative(2)

// function multiplication(c,d){
//     console.log(c*d);
//     console.log(c*6);
//     console.log(c**d);
//     console.log("Done")
// }
// multiplication(2,5);

// let division = (e,f) => {  // answer will be in point
//     console.log(e/f); 
//     console.log(f/e);
//     console.log("Done")
// }
// division(2,30)

// let modulus = (g,h) =>{ // answer will be in number after round off
//     console.log(g%h);
//     console.log(h%g);
//     console.log("Done")
// }
// modulus(2,3);


//              //**** COMPARISON_&_LOGICAL OPERATORS ******//
//     if(4 === 5){
//         console.log("it's equal")
//     }else{
//         console.log("it's not equal")
//     }

// let grater_equal = (age) =>{
//     if(age == 18 || age > 18){
//         console.log("Great! You can ride a bike")
//     }else{
//         console.log("Sorry! You are not able to ride a bike")
//     }
// }
// grater_equal(17);


// let less_equal = (age) =>{
//     if(age == 16 || age >= 18){
//         console.log("Sorry! This Pool is only for less than 16 years old")
//     }else{
//         console.log("Welcome! You can bath in a Pool **Enjoy**")
//     }
// }
// less_equal(23)





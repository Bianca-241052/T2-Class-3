let hour = 11;

if (hour < 12){
    console.log("Good Morning");
} else{
    console.log("Good Afternoon")
}

for (var i = 0; i < 3; i++){
    let sent = "My name is Bianca";
    console.log(sent);
}

let numbers = [1, 2, 7, 67, 45, 66, 88, 90];
let even = [];
let odd = [];

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] %2 != 1) {
        even.push (numbers [i]);
    } else{
        odd.push(numbers[i]);
    }
}

console.log(even);
console.log(odd);
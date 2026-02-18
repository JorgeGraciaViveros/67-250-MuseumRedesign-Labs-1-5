// part 3 Step 1: Variables and Console Output

let x = 5;
let y = 7;
let z = x + y;

console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;

console.log(C);



// part 2 step 2
function SumNPrint(x1, x2) {
    let result = x1 + x2;
    console.log(result);
}
SumNPrint(x, y);
SumNPrint(A, B);

// part 3 step 3

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


// step 4 part 3

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

// findTheBanana(L1);
// findTheBanana(L2);

function forEachLoop(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

// forEachLoop(L1);
// forEachLoop(L2);




// part 4 greeting

// function greetingFunc() {

//     let d = new Date();
//     let h = d.getHours();
//     let greeting = document.getElementById("greeting");

//     // order of conditions
//     if (h < 5 || h >= 20) {
//         greeting.innerHTML = "Good night";
//     } else if (h < 12) {
//         greeting.innerHTML = "Good morning";
//     } else if (h < 18) {
//         greeting.innerHTML = "Good afternoon";
//     } else {
//         greeting.innerHTML = "Good evening";
//     }
// }

// THIS version works and prevents console errors
function greetingFunc() {
    const greeting = document.getElementById("greeting");
    if (!greeting) return; // <-- prevents crash on pages without #greeting
  
    const h = new Date().getHours();
  
    if (h < 5 || h >= 20) {
      greeting.innerHTML = "Good night";
    } else if (h < 12) {
      greeting.innerHTML = "Good morning";
    } else if (h < 18) {
      greeting.innerHTML = "Good afternoon";
    } else {
      greeting.innerHTML = "Good evening";
    }
  }

greetingFunc();


// part 5 add year

function addYear() {
    let year = new Date().getFullYear();

    document.getElementById("copyYear").innerHTML =
        "&copy; " + year + " MuseumName. All rights reserved.";
}

// part 6

function showTickets() {
    const table = document.getElementById("ticketTable");
    const btn = document.getElementById("ticketBtn");
  
    if (table) table.style.display = "table";
    if (btn) btn.style.display = "none";
  }



// function showTickets() {
//     const table = document.getElementById("ticketTable");
//     const btn = document.getElementById("ticketBtn");
  
//     if (table) table.style.display = "table";
//     if (btn) btn.style.display = "none";
//   }
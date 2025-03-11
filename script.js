function sum(var_one, var_two) {
    const sum = var_one + var_two;
    return sum;
}

function sub(var_one, var_two) {
    const sub = var_one - var_two;
    return sub;
}

function multiply(var_one, var_two) {
    const multiply = var_one * var_two;
    return multiply;
}

function div(var_one, var_two) {
    if (var_two === 0) {
        return "Error: Division by zero!";
    }
    const div = var_one / var_two;
    return div;
}

// Testing the function
console.log(div(20, 5));  // Output: 4



function variables() {
    const data = [
        "Hello",
        "Ostad",
        "Bangladesh",
        "Data Ten",
        "Testing",
        "Automation",
        55.666,
        "Batch_9",
        10,
        "Hridoy",
        { test_1: "ONE", test_2: "TWO" },
        { obj_3: "OBJ_ONE", obj_4: "OBJ_TWO" } // Placed inside the array
    ];
    
    console.log(data[11]); // Accessing index 11 -> Output: { obj_3: "OBJ_ONE", obj_4: "OBJ_TWO" }
}

// Call the function
variables();






let num = 5;
let factorial = 1;
while (num > 0) {
    factorial *= num;
    num--;
}
console.log("Factorial:", factorial);
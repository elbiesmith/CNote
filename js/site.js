function getValues() {
    // access the web page and get the values from the inputs
    let startValue = parseInt(document.getElementById("startValue").value);
    let endValue = parseInt(document.getElementById("endValue").value);

    // take the start and end values as teh bounds for a 'for' loop
    // that will create an array and return it.
    let numbers = generateNumbers(startValue, endValue);

    // take the array that was returned and pass it to a function that 
    // will display it on the page.
    displayNumbers(numbers);
}

function generateNumbers(startNum, endNum) {
    let numberArray = [];
    for (let i = startNum; i < endNum + 1; i++) {
        numberArray.push(i);
    }

    return numberArray;
}

function displayNumbers(numberArray) {
    let tableBody = document.getElementById("output");
    tableBody.innerHTML = "";
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            tableBody.innerHTML += `<tr><td><strong>${numberArray[i]}</strong></td> </tr>`;
        } else {
            tableBody.innerHTML += `<tr><td>${numberArray[i]}</td> </tr>`;
        }
    }
}
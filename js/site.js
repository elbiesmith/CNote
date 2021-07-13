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

function generateNumbers(startValue, endValue) {
    let numberArray = [];
    for (let i = startValue; i < endValue + 1; i++) {
        numberArray.push(i);
    }

    return numberArray;
}

function displayNumbers(numberArray) {
    let tableBody = document.getElementById("output");
    tableBody.innerHTML = "";
    let className = 'even';
    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] % 2 === 0) {
            className = 'even';
        } else {
            className = 'odd'
        }

        tableBody.innerHTML += `<tr><td class="${className}">${numberArray[i]}</td> </tr>`;
    }
}
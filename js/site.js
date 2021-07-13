function getValues() {
    // access the web page and get the values from the inputs
    let startValue = parseInt(document.getElementById("startValue").value);
    let endValue = parseInt(document.getElementById("endValue").value);
    let errorState = false;
    let errorMsg = "";

    // Verify that we have numbers
    if (isNaN(startValue) || isNaN(endValue)) {
        errorState = true;
        errorMsg += 'Please use a number.<hr />'
    }
    
    if (startValue > endValue) {
        errorState = true;
        errorMsg += 'Please ensure that the start number is less than the end number.<hr />'
    }

    if (startValue < -10000 || startValue > 10000 || endValue < -10000 || endValue > 10000) {
        errorState = true;
        errorMsg += 'To Save your processor, please use a range of less than 20,000';
    }

    if (errorState) {
        Swal.fire(
            'Something went wrong',
            `${errorMsg}`,
            'error',
            'OK'
        )
    }

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
function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return sortedArr.concat(leftArr.slice().concat(rightArr.slice()));
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function sortNumbers() {
    const inputDiv = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    let numbersInput = prompt('Enter 10 numbers separated by spaces:');
    const numbersArr = numbersInput.split(' ').map(Number);
    if (numbersArr.length !== 10) {
        alert('Please enter exactly 10 numbers!');
        return;
    }
    const sortedNumbers = mergeSort(numbersArr);
    inputDiv.style.display = 'none';
    outputDiv.innerHTML = '<h2>Sorted Numbers:</h2><p>' + sortedNumbers.join(', ') + '</p>';
}


function isPalindrome(word) {
    if (word.length < 2) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return isPalindrome(word.slice(1, word.length - 1));
}

function checkPalindrome() {
    const wordInput = document.getElementById('word').value;
    const palindromeDiv = document.getElementById('palindrome');
    const isPal = isPalindrome(wordInput);
    let result = '';
    if (isPal) {
        result = ' is a palindrome!';
    } else {
        result = ' is not a palindrome.';
    }
    palindromeDiv.innerHTML += '<p>' + wordInput + result + '</p>';
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkAge() {
    const birthYear = document.getElementById('yearOfBirth').value;
    const result = document.getElementById('result');
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    if (isPrime(age)) {
        result.innerHTML += '<p>Your age is ' + age + ' and it is a prime number!</p>';
    } else {
        result.innerHTML += '<p>Your age is ' + age + ' and it is not a prime number.</p>';
    }
}
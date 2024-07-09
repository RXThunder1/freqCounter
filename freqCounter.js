function constructNote(message, letters) {
    // Create frequency counters for message and letters
    let messageFreq = {};
    let lettersFreq = {};

    // Populate frequency counter for message
    for (let char of message) {
        messageFreq[char] = (messageFreq[char] || 0) + 1;
    }

    // Populate frequency counter for letters
    for (let char of letters) {
        lettersFreq[char] = (lettersFreq[char] || 0) + 1;
    }

    // Check if we can form the message using the letters
    for (let key in messageFreq) {
        if (!lettersFreq[key] || lettersFreq[key] < messageFreq[key]) {
            return false;
        }
    }

    return true;
}


function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}


function twoArrayObject(keys, values) {
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = i < values.length ? values[i] : null;
    }

    return obj;
}


function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    let countNum1 = {};
    let countNum2 = {};

    for (let char of strNum1) {
        countNum1[char] = (countNum1[char] || 0) + 1;
    }

    for (let char of strNum2) {
        countNum2[char] = (countNum2[char] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) {
            return false;
        }
    }

    return true;
}


function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            // Swap arr[left] and arr[right]
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else {
            if (arr[left] >= 0) left++;
            if (arr[right] < 0) right--;
        }
    }

    return arr;
}


function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
        j++;
    }

    return false;
}


function countPairs(arr, target) {
    let seen = new Set();
    let count = 0;

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            count++;
        }
        seen.add(num);
    }

    return count;
}
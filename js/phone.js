function showdBtns() {
    document.getElementById("advanced").style.display = "none";
    document.getElementById("advanced-buttons").style.display = "block";
    document.getElementById("sub").style.marginTop = "30px";
}

function mul(num, phone_num) {
    return phone_num * num;
}

function add(num, phone_num) {
    return phone_num + num;
}

function sub(num, phone_num) {
    return Math.max(0, phone_num - num);
}

function div(num, phone_num) {
    return phone_num / num;
}

function floor(phone_num) {
    return Math.floor(phone_num);
}

function log10(phone_num) {
    return Math.log10(phone_num);
}

function sqrt(phone_num) {
    return Math.sqrt(phone_num);
}

function square(phone_num) {
    return phone_num * phone_num;
}

function padWithZeros(num, length) {
    return num.toString().padStart(length, '0');
}

function updatePhoneInput(operation, num) {
    let phoneInput = document.getElementById("phone-input");
    let originalLength = phoneInput.value.length;
    let phone_num = parseFloat(phoneInput.value);

    switch (operation) {
        case 'add':
            phone_num = add(num, phone_num);
            break;
        case 'mul':
            phone_num = mul(num, phone_num);
            break;
        case 'sub':
            phone_num = sub(num, phone_num);
            break;
        case 'div':
            phone_num = div(num, phone_num);
            break;
        case 'floor':
            phone_num = floor(phone_num);
            break;
        case 'log10':
            phone_num = log10(phone_num);
            break;
        case 'sqrt':
            phone_num = sqrt(phone_num);
            break;
        case 'square':
            phone_num = square(phone_num);
            break;
    }

    phone_num = Math.max(0, phone_num); // Ensure the number does not go negative
    phoneInput.value = padWithZeros(phone_num, originalLength);
    console.log(phoneInput.value);
}

function resetPhoneInput() {
    let phoneInput = document.getElementById("phone-input");
    phoneInput.value = "0000000000"; // Set to default value
    console.log(phoneInput.value);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-button").addEventListener("click", function() {
        updatePhoneInput('add', 7);
    });

    document.getElementById("mul-button").addEventListener("click", function() {
        updatePhoneInput('mul', 3);
    });

    document.getElementById("sub-button").addEventListener("click", function() {
        updatePhoneInput('sub', 2);
    });

    document.getElementById("div-button").addEventListener("click", function() {
        updatePhoneInput('div', 5);
    });

    document.getElementById("floor-button").addEventListener("click", function() {
        updatePhoneInput('floor');
    });

    document.getElementById("log10-button").addEventListener("click", function() {
        updatePhoneInput('log10');
    });

    document.getElementById("square-root-button").addEventListener("click", function() {
        updatePhoneInput('sqrt');
    });

    document.getElementById("square-button").addEventListener("click", function() {
        updatePhoneInput('square');
    });

    document.getElementById("reset-button").addEventListener("click", function() {
        resetPhoneInput();
    });
});
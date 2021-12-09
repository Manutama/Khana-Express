const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const city = document.getElementById('city');
const subject = document.getElementById('subject');
const error = document.getElementById('error');
let errorMessage = [];

// menahan form untuk tidak langsung di submit
form.addEventListener('submit', (e) => {
    errorMessage=[];   
    // Validate Full Name
    validateFname();
    // Validate Email
    validateEmail();
    // Validasi kota
    validateCity();
    // Validasi subject
    validateSubject();
    if(errorMessage.length > 0){
        // Ada error
        error.innerHTML = errorMessage[0]
        e.preventDefault();
    } else {
        // Tidak ada error
        error.innerHTML = "";
    }
})

// Full Name
const validateFname=()=> {
    let value = fname.value.trim();
    
    // Validasi kosong
    if(validateEmpty(value) == true){
        errorMessage.push('Full name not must be empty')
    }
}

// Email
const validateEmail=()=> {
    let value = email.value.trim();
    
    // Validasi kosong
    if(validateEmpty(value) == true){
        errorMessage.push('Email must not be empty')
    }

    // Validasi contain @
    if(checkcontain(value, '@') == false){
        errorMessage.push('Email must contain @')
    }

    // Validasi  endswith .com
    if(value.endsWith('.com') == false){
        errorMessage.push('Email must endswith gmail.com')
    }

}

// Kota
const validateCity=()=> {
    let value = city.value;
    
    // Validasi kosong
    if(validateEmpty(value) == true){
        errorMessage.push('You must choose a city')
    }
}

// Subject
const validateSubject=()=> {
    let value = subject.value;
    
    // Validasi kosong
    if(validateEmpty(value) == true){
        errorMessage.push('You must insert the subject')
    }   
}

// Function
function validateEmpty(param){
    if(param === ''){
        return true
    } return false;
}

function checkcontain(param, pattern){
    if(param.indexOf(pattern) !== -1){
        return true;
    } else return false;
}


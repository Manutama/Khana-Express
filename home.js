var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const review = document.getElementById('review')
const error = document.getElementById('error');
let errorMessage = [];

// menahan form untuk tidak langsung di submit
form.addEventListener('submit', (e) => {
    errorMessage=[];   
    // Validate Full Name
    validateFname();
    // Validate Email
    validateEmail();
    // Validate Review
    validateReview();
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

// Review
const validateReview=()=> {
    let value = review.value.trim();
    
    // Validasi kosong
    if(validateEmpty(value) == true){
        errorMessage.push('Review not must be empty')
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

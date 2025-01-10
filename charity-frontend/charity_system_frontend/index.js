
function toggleSidebar() {
    const navbarLinks = document.querySelector('.navbar-link');
    navbarLinks.classList.toggle('active');
}

function signup() {   
    const form = document.getElementById('signupForm');
    const mainContent = document.querySelector('main');
    form.style.display = "block";
    mainContent.classList.add('blur-background'); 
}

function login() {
    const form = document.getElementById('loginForm');
    const mainContent = document.querySelector('main');
    form.style.display = "block"; 
    mainContent.classList.add('blur-background'); }
function admin() {
        const form = document.getElementById('adminForm');
        const mainContent = document.querySelector('main');
        form.style.display = "block"; 
        mainContent.classList.add('blur-background');
}



function closeForm() {
    const form = document.getElementById('signupForm');
    const mainContent = document.querySelector('main');
    form.style.display = "none"; 
    mainContent.classList.remove('blur-background'); 
    
    const forms = document.getElementById('loginForm');
    const mainContents = document.querySelector('main');
    forms.style.display = "none"; 
    mainContents.classList.remove('blur-background'); 

    const formss = document.getElementById('adminForm');
    const mainContentss = document.querySelector('main');
    formss.style.display = "none"; 
    mainContentss.classList.remove('blur-background'); 
}


function validateSignup() {
    const signupError = document.getElementById('signupError');
    const signupError4 = document.getElementById('signupError4');
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('passwordSignup').value;
    const email = document.getElementById('signupemail').value;
    const confirmPassword = document.getElementById('confirmSignup').value;
   

    signupError.textContent = ''; // Clear previous errors

    if (fullname.trim() === '') {
        signupError.textContent = 'Fullname is required.';
        return false;
    }
    else{
        signupError.textContent = '';
    }
    if (password.trim() === '') {
        signupError.textContent = 'password is required.';
        return false;
    }
    else{
        signupError.textContent = '';
        
    }
    if (email.trim() === '') {
        signupError.textContent = 'email is required.';
        return false;
    }

    if (password !== confirmPassword) {
        
       signupError4.textContent = 'Passwords do not match.'
        return false;
    }
    else{
        signupError4.textContent = '';
        
    }
    return true; 
}



function validateLogin() {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const loginError = document.getElementById('loginError');

    loginError.textContent = ''; 

    if (email.trim() === '') {
        loginError.textContent = 'Email is required.';
        return false;
    }
    if (password.trim() === '') {
        loginError.textContent = 'Password is required.';
        return false;
    }
    return true; 
}


function validateAdmin() {
    const secretKey = "Admin123@";
    const adminEmail = document.getElementById('adminEmail').value;
    const adminPassword = document.getElementById('secretkey').value;
    const adminError4 = document.getElementById('adminError4');
    const adminError = document.getElementById('adminError');

    adminError4.textContent = ''; 

    if (adminEmail.trim() === '') {
        adminError.textContent = 'Admin email is required.';
        return false;
    }
    if (adminPassword.trim() === '') {
        adminError.textContent = 'Admin password is required.';
        return false;
    }
    if (adminPassword !== secretKey) {
        adminError4.textContent = 'Incorrect Secret Key';
        return false;
    }
    if (adminPassword == secretKey){
        console.log("Redirecting to admin dashboard");
        window.location.assign('./Admin.html');
    }

    
    return true;
}


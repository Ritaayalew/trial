
function showLogoutModal() {   
    const logout = document.getElementById('logoutForm');
    const logoutContent = document.querySelector('main');
    logout.style.display = "block";
    logoutContent.classList.add('blur-background'); 
}
function logoutClose(){
    const no = document.getElementById('logoutForm');
    const mainContet = document.querySelector('main');
    no.style.display = "none"; 
    mainContet.classList.remove('blur-background'); 
}

function logout() {
    const logoutYes = document.getElementById('logoutYes');
    const token = localStorage.getItem('authToken'); 
    console.log(token);
    localStorage.removeItem('authToken');
    
    const tokennn = localStorage.getItem('authToken');
    console.log(tokennn);
    
    logoutYes.href = './index.html';
    window.location.href = logoutYes.href;
    console.log("you previously logged out!") }
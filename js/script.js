
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
});
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false; // Uncheck the checkbox
    });
});
document.querySelectorAll('nav ul li button').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false; // Uncheck the checkbox
    });
});
document.getElementById('form-box_register').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
});
function toggleContactForm() {
    var form = document.getElementById("contactForm");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  

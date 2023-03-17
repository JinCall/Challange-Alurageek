const loginBtn = document.querySelector('[data-login-button]');
loginBtn.addEventListener('click', () => window.location.href = "./login.html");

(() => {
function verify() {
window.event.preventDefault();

if (email.value == '') {
    email.classList.add('input-error');
    email.focus();
    Swal.fire({
        title: 'Required',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
    return false;

} else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
    email.focus();
    Swal.fire('Fill in your email');
    return false;
} else {
    email.classList.add('input-sucess');
}

if (password.value === '') {
    password.focus();
    password.classList.add('input-error');
    Swal.fire({
        title: 'Password required',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
    return false;

} else if (password.value.length >= 7) {
    Swal.fire('Maximum of 6 chracters');
    return false;
} else {
    password.classList.add('input-sucess');
}

if (email.value === '123@gmail.com' && password.value === '123456'); {
    window.location.href='./add-product.html';
}

}

const sendBtn = document.querySelector('[data-form-button]');
sendBtn.addEventListener('click', (verify));
})();

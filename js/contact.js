(() => {
    function verify() {
    window.event.preventDefault();

    if (form.Name.value === '') {
        form.Name.focus();
        Name.classList.add('input-error');
        Swal.fire({
        title: 'This information is required',
        icon: 'error',
        confirmButtonText: 'Ok'
        });
        return false;
    } else if (form.Name.value.length >= 40) {
        Swal.fire('Maximum of 40 characters');
        return false;
    } else {
        Name.classList.add('input-sucess');
    }

    if (form.msg.value === '') {
        form.msg.focus();
        msg.classList.add('input-error');
        Swal.fire({
        title: 'Write a message.',
        icon: 'error',
        confirmButtonText: 'Ok'
        });
        return false;
    } else if (form.mensagem.value.length >= 100) {
        Swal.fire('Maximum of 120 characters');
        return false;
    } else {
        msg.classList.add('input-sucess');
    }

    }

    document.querySelector('form').addEventListener('submit', verify);
})();
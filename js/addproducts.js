(() => {
    function verify() {
        window.event.preventDefault();

        if (item.value === '') {
        item.classList.add('input-error');
        item.focus();
        Swal.fire({
            title: 'Add a item name',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        return false;
    } else if (item.value.length >= 21) {
        Swal.fire('Maximum of 20 characters');
        return false;
    } else {
        item.classList.add('input-sucess');
    }

    if (price.value === '') {
        price.focus();
        price.classList.add('input-error');
        Swal.fire({
            title: 'Set a price',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return false;

    } else if (!isNaN(price.value) == false) {
        price.focus();
        price.classList.add('input-error');
        Swal.fire({
            title: 'Price required',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return false;
    } else {
        price.classList.add('input-sucess');
    }

    if (description.value === '') {
        description.focus();
        description.classList.add('input-erro');
        Swal.fire({
            title: 'Add a description',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return false;
    } else if (description.value.length >= 151) {
        Swal.fire('Maximum of 150 chracter');
        return false;
    } else {
        description.classList.add('input-sucess');
    }

    };

    const addBtn = document.querySelector('[data-add-btn]');
    addBtn.addEventListener('click', (verify));
})();
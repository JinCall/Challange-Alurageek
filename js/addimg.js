const dropZone = document.querySelector(".imagem"),
dragText = dropZone.querySelector("p");
let file;

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.classList.add("active");
        dragText.textContent = "You can let go"
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("active");
        dragText.textContent = "Drag the image"
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.classList.add("active");

    file = event.dataTransfer.files[0];
    showFile();
    });

function showFile() {
let fileType = file.type;

let validExtensions = ["image/png", "image/jpg", "image/jpeg"];
if (validExtensions.includes(fileType)) {

    let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="" >`;
            dropZone.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Invalid file");
        dropZone.classList.remove("active");
    }

};

const imageBtn = document.querySelector('.add__img__btn');
imageBtn.addEventListener('click', (e) => {
    e.preventDefault();

    function onClickHandler() {
        const elmnt = window._protected_reference = document.createElement('INPUT');
        elmnt.type = "file";
        elmnt.accept = "image/*";
        elmnt.multiple = "multiple";

        elmnt.addEventListener('change', function () {
            if (elmnt.files.length) {
                document.getElementById('image').src = URL.createObjectURL(elmnt.files[0]);
                dropZone.classList.add("active");
                dragText.remove('p');
            }
        });
    elmnt.click(); 
    };

onClickHandler();
});
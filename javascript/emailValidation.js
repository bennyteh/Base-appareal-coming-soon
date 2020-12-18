const form = document.getElementById('form');
const email = document.getElementById('email');
const text = document.getElementById('text');
const pattern = /^[^ ]+@[^ ]+\.[A-Z]{2,3}$/i;


form.addEventListener('submit',(e) => {
    if ((email.value).match(pattern) === null){
        text.innerHTML = "Please provide a valid email";
        e.preventDefault();
        email.classList.add("op-1");
        email.classList.add("warning")
        email.classList.remove("op-0-4");
    }
    
})

const form = document.getElementById('form');
const email = document.getElementById('email').value;
const text = document.getElementById('text');
const pattern = /^[^ ]+@[^ ]+\.[A-Z]{2,3}$/;

form.addEventListener('submit',(e) => {
    e.preventDefault();
})

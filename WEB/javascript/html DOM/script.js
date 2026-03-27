const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const age = document.getElementById("age").value;
const msgBox = document.getElementById("message");

let message = " ";
if (email === "") {
    message += "Email is required. ";
msgBox.style.color = 'red';
}else if (password === " q") {
    message += "Password is required. ";
msgBox.style.color = 'red';
}else if (age === "") {
    message += "Age is required. ";
msgBox.style.color = 'red';
}
else {
    msgBox.style.color = 'green';
    message += "Form submitted successfully!";
}

msgBox.innerHTML = message;

document.getElementById("loginForm").onsubmit = Validate;

document.getElementById("email").oninput = ()=> validate({ preventdefault: () => {} });
document.getElementById("password").oninput = ()=> validate({ preventdefault: () => {} });
document.getElementById("age").oninput = ()=> {
    return validate({ preventdefault: () => { } });
};
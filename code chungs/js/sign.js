function validateName(nameText) {
    var userName = nameText.length;
    if (userName < 5) {
        document.getElementById("User").innerHTML = "Your Name is Invalid";
    } else if (userName) {
        document.getElementById("User").innerHTML = "";
    };
};

function validateEmail(emailText) {
    var Address = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailText.value.match(Address)) {
        document.getElementById("Email").innerHTML = "";
    } else {
        document.getElementById("Email").innerHTML = "Your Email Address Invalid"
    };
};


function validatePassword(PassText) {
    if (PassText.match(/[a-z]/g) && PassText.match(/[A-Z]/g) && PassText.match(/[0-9]/g) && PassText.match(/[^a-zA-Z\d]/g) && PassText.length >= 8 && PassText.length < 9) {
        document.getElementById("Password").innerHTML = "";
    } else {
        document.getElementById("Password").innerHTML = "Your Password is Invalid";

    }
};
/*

function save(userName, Address, Password) {
    var x = 5;
    user[x].username = userName;
    user[x].email = Address;
    user[x].pass = Password;
    alert(username + "'s Account created");
    x++;
}
*/

let Users = [];
        const addUser = (ev)=>{
            ev.preventDefault();  
            let User = {
                User: document.getElementById("User").value,
                Email: document.getElementById("Email").value,
                Password: document.getElementById("Password").value
            }
            Users.push(User);
            document.forms[0].reset(); 

           
            console.warn('added' , {Users} );
            let p = document.querySelector('#upload p');
            p.textContent = '\n' + JSON.stringify(Users, '\t', 2);

           
            localStorage.setItem('MyUsers', JSON.stringify(Users) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('signup').addEventListener('click', addUser);
        });
var user = [
    {
        Email: "Abi@gmail.com",
        password: "12345"
    },
    {
        Email: "Abde@gmail.com",
        password: "67890"
    },
    {
        Email: "Abcd@gmail.com",
        password: "11111"
    },
    {
        Email: "Abbb@gmail.com",
        password: "22222"
    },
    {
        Email: "Accc@gmail.com",
        password: "33333"
    }
]
function login() {
    var Email = document.getElementById("Email").value
    var password = document.getElementById("password").value

    for (var x = 0; x < user.length; x++) {
        if (Email == user[x].Email && password == user[x].password) {
            alert("Login Successful")
            return
        } else {
            alert("Login Unsuccessful")
        };
    };

};
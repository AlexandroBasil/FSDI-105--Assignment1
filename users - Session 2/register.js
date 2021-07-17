
function User(email, password, firstName, lastName, age, address, phoneNumber, payment, color) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.payment = payment;
    this.color = color;
}

function registerUser(){
    console.log("Button CLicked!");

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let firstName = $("#txtFirst").val();
    let lastName = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phoneNumber = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#selColor").val();


    let user = new User(email, password, firstName, lastName, age, address, phoneNumber, payment, color)
    saveUser(user); // this fn exist in storageManager.js

    readUsers();
}

function init() {
    console.log("Register Page!");

// #    id
// .    class
// TAG

    $("#btnSave").click( registerUser );
}

window.onload = init()
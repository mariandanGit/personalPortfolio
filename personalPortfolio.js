function emailValidation(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formValidation() {

    var name = document.forms["form"]["name"].value;
    var mail = document.forms["form"]["email"].value;

    if (name == "") {
         alert("Name must be filled out!");
        name.focus();
        return false;
    }

    if (mail == "") {
        alert("Email must be filled out!");
        mail.focus();
        return false;
    }

    if(emailValidation(mail) == false){
        alert("Wrong email format!");
        mail.focus();
        return false;
    }
}
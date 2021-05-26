function validateform() {
    var name = document.forms['contactform']['contact_name'].value;

    if (name == "" || name == null) {
        alert("Pls fill the name");
        return false;
    }

    var Email = document.forms['contactform']['contact_email'].value;

    if (Email == "" || Email == null) {
        alert("Pls fill the Email");
        return false;
    }

    var message = document.forms['contactform']['contact_message'].value;

    if (message == "" || message == null) {
        alert("Pls fill the message");
        return false;
    }

}
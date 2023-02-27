function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "courseasus@gmail.com",
    Password: "3BFF12F02E25F819E131FA1648BB282F3AC4",
    To: "naikdhiraj9@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

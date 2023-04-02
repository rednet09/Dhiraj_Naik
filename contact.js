function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("phone").value;
  let subject = document.getElementById("message").value;

  let body =
    "Name: " +
    name +
    "<br/> Email: " +
    email +
    "<br/>Phone: " +
    contact +
    "<br/> message: " +
    subject;

  Email.send({
    SecureToken: "0479a533-1082-4f43-8146-6f674d96e64f",
    To: "naikdhiraj9@gmail.com",
    From: "courseasus@gmail.com",
    Subject: "This is the subject",
    Body: body,
  }).then((message) => alert(message));
}


function SendMail() {
  var params = {
    first_name: document.getElementById('firstname').value,
    last_name: document.getElementById('lastname').value,
    email_id: document.getElementById('email').value,
    phone_number: document.getElementById('phonenumber').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };
  if (
    params.first_name != '' &&
    params.last_name != '' &&
    params.email_id != '' &&
    params.phone_number != '' &&
    params.subject != '' &&
    params.message != ''
  ) {
    emailjs
      .send('service_6vltxmk', 'template_jn0eupg', params)
      .then(function (res) {
        element = document.getElementById('submitSuccessMessage');
        element.classList.remove('d-none');
        alert('Thank you for submitting the form');
      });
  }
}

function isEmpty() {
  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let phonenumber = document.getElementById('phonenumber').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (
    firstname != '' &&
    lastname != '' &&
    email != '' &&
    phonenumber != '' &&
    subject != '' &&
    message != ''
  ) {
    document.getElementById('submitButton').removeAttribute('disabled');
    /*document.getElementById('submitButton').className = 'buttonEnabled';*/
  }
}

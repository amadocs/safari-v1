function SendMail() {
  var params = {
    from_name: document.getElementById('fname').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  (let fname = document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if (fname != '' && email != '' && message != '') {
    document.getElementById('submitButton').removeAttribute('disabled');)
    emailjs
      .send('service_6vltxmk', 'template_jn0eupg', params)
      .then(function (res) {
        element = document.getElementById('submitSuccessMessage');
        element.classList.remove('d-none');
        alert('Thank you! ' + params.from_name + res.status);
      });
  }
}

function isEmpty() {
  let fname = document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (fname != '' && email != '' && message != '') {
    document.getElementById('submitButton').removeAttribute('disabled');
  }
}

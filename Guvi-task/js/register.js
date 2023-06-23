const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  let valid = true;

  if (!nameRegex.test(nameInput.value)) {
    valid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (!emailRegex.test(emailInput.value)) {
    valid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  if (!passwordRegex.test(passwordInput.value)) {
    valid = false;
    passwordInput.classList.add('error');
  } else {
    passwordInput.classList.remove('error');
  }

  if (valid) {
    form.submit();
  }
});

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            dataType: 'json',
            data: $('form').serialize(),
            success: function(response) {
                // handle success response
            },
            error: function(xhr, status, error) {
                // handle error response
            }
        });
    });
});
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const usernameRegex = /^[A-Za-z0-9_-]{3,16}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  let valid = true;

  if (!usernameRegex.test(usernameInput.value)) {
    valid = false;
    usernameInput.classList.add('error');
  } else {
    usernameInput.classList.remove('error');
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
    $('form').on('submit', function(event) {
      event.preventDefault(); // prevent the default form submission
      $.ajax({
        url: 'php/login.php', // backend PHP file path
        type: 'POST', // request method
        data: $('form').serialize(), // serialize form data
        success: function(response) {
          alert(response); // display the response message in an alert box
        }
      });
    });
  });
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mobileInput = document.getElementById('mobile');
  const cityInput = document.getElementById('city');
  const dobInput = document.getElementById('dob');

  const mobileRegex = /^\d{10}$/;
  const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

  let valid = true;

  if (!mobileRegex.test(mobileInput.value)) {
    valid = false;
    mobileInput.classList.add('error');
  } else {
    mobileInput.classList.remove('error');
  }

  if (!cityRegex.test(cityInput.value)) {
    valid = false;
    cityInput.classList.add('error');
  } else {
    cityInput.classList.remove('error');
  }

  if (!dobRegex.test(dobInput.value)) {
    valid = false;
    dobInput.classList.add('error');
  } else {
    dobInput.classList.remove('error');
  }

  if (valid) {
    form.submit();
  }
});

$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form data
      var formData = {
        'mobile': $('input[name=mobile]').val(),
        'city': $('input[name=city]').val(),
        'dob': $('input[name=dob]').val()
      };

      // Send AJAX request
      $.ajax({
        type: 'POST',
        url: 'php/profile.php',
        data: formData,
        dataType: 'json',
        encode: true
      })
      .done(function(data) {
        // Handle response from backend
        console.log(data);
        alert('Profile saved successfully!');
      })
      .fail(function(data) {
        // Handle error response from backend
        console.log(data);
        alert('Failed to save profile!');
      });
    });
  });
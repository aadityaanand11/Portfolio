document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var msg = document.getElementById('msg');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.textContent = 'Thank you — message sent (demo).';
    form.reset();
    setTimeout(function(){ msg.textContent = ''; }, 3000);
  });
});

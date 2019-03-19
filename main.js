window.addEventListener('load', function() {
  document.querySelector('.video-container video').src = 'BG.mov';
});

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search.slice(1));
let signupSuccess = document.querySelector('.signup-alert');
let signupForm = document.getElementById('mc_embed_signup_scroll');
let footerLinks = document.querySelectorAll('.contact-links h2');
console.log(params.has('success') === true);

if (params.has('success')) {
  // signupSuccess.style.display = 'flex';
  // setTimeout(function() {
  //   signupSuccess.style.display = 'none';
  // }, 3000);
  footerLinks[0].style.textTransform = 'capitalize';
  footerLinks[1].style.textTransform = 'capitalize';
  signupForm.innerHTML = '<p id="thank-you">Thank You!</p>';
}

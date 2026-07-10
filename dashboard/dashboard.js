// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 25, 47, 0.98)";
    navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(10, 25, 47, 0.92)";
    navbar.style.boxShadow = "none";
  }
});




const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#yourname").value.trim()
  const email = document.querySelector("#youremail").value.trim()
  const phoneNumber = document.querySelector("#yourphoneNumber").value.trim();
  const message = document.querySelector("#message").value.trim();

  console.log(message);



  // if (name === "" || email === "" || phoneNumber === "" || message === "") {
  //   alert("'⚠️ Please fill all fields before sending.'");
  //   return;
  // }


  const fullMessage = `
Name: ${name}
Email: ${email}
PhoneNumber: ${phoneNumber}
sendMessage: ${message}`.trim();

  const encodeMessage = encodeURIComponent(fullMessage);

  const AdminNumber = "923142832602";

  const WhatsappLink = `https://wa.me/${AdminNumber}?text=${encodeMessage}`;

  window.open(WhatsappLink, "_blank")

  form.reset();


  Swal.fire({
    icon: 'success',
    title: '✅ Message Sent!',
    text: 'WhatsApp open ho raha hai. Bas "Send" button dabana hai!',
    background: '#1a2333',
    color: '#fff',
    confirmButtonColor: '#f39c12'
  })

})




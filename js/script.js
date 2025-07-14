// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop default form submit

    // Get form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    try {
      // Send POST request to your backend
      const res = await fetch("https://your-backend-url/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        responseDiv.textContent = "✅ Your message has been sent successfully!";
        responseDiv.style.color = "green";
        form.reset();
      } else {
        const errorData = await res.text();
        responseDiv.textContent = "❌ Could not send message: " + errorData;
        responseDiv.style.color = "red";
      }
    } catch (err) {
      responseDiv.textContent = "❌ An error occurred. Please try again later.";
      responseDiv.style.color = "red";
      console.error(err);
    }
  });
});

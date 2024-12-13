document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("loadingOverlay").style.display = "flex";
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    timestamp: new Date().toISOString(),
  };
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwIxSdl6TG-hnzwGlJ0WmsiM0Wh0tcojr2OEFMwYK6dkY1NB_lVBR3pR6Pwti-Ea-U/exec";
  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      document.getElementById("loadingOverlay").style.display = "none";
      alert("Thank you! Your message has been submitted successfully.");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("loadingOverlay").style.display = "none";
      console.error("Error:", error);
      alert(
        "Oops! There was an error submitting your message. Please try again."
      );
    });
});

// JavaScript to toggle the active class
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    navButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
  });
});

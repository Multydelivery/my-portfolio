

  // Function to toggle Dark Mode
  function toggleWhiteMode() {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle("dark-mode");

    // Update the button text dynamically
    const button = document.querySelector(".togglemode");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light";
    } else {
        button.textContent = "Dark";
    }

    // Optional: Save the mode in localStorage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// Load the theme from localStorage on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".togglemode").textContent = "Light";
    }
});
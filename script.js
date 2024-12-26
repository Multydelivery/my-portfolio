

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


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/676ca953af5bfec1dbe1fd10/1ig07arrf';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


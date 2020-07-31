//Poppin up alert if bell is clicked
const popUp = document.getElementsByClassName("bell")[0];
popUp.addEventListener("click", () => {
  const alertBox = document.getElementById("pop");
  const pop = document.getElementById("iconNotification");
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
    pop.style.display = "none";
  } else {
    alertBox.style.display = "none";
    pop.style.display = "block";
  }
});

// create the HTML for the Banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong></p>You have <strong> 6 </strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;
alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

// Messaging section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", (e) => {
  // ensure userand message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user fields before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

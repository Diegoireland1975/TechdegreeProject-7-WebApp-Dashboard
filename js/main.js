const alertBanner = document.getElementById("alert");
// create the HTML for the Banner

alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong></p>You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;
alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none";
  }
});
